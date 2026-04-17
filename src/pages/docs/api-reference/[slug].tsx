import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Oas from 'oas'
import SwaggerParser from '@apidevtools/swagger-parser'
import ArticlePagination from 'components/article-pagination'
import { Box } from '@vtex/brand-ui'
import jp from 'jsonpath'
import { marked } from 'marked'

import getReferencePaths from 'utils/getReferencePaths'
import getNavigation from 'utils/getNavigation'
import { MethodType, isMethodType } from 'utils/typings/unionTypes'
import { flattenWithChildren } from 'utils/navigation-utils'
import { getLogger } from 'utils/logging/log-util'
import getSiteUrl from 'utils/getSiteUrl'

// Client-side logger
const clientLogger = {
  info: (message: string) => console.info(`[OpenAPI Client] ${message}`),
  warn: (message: string) => console.warn(`[OpenAPI Client] ${message}`),
  error: (message: string) => console.error(`[OpenAPI Client] ${message}`),
}

interface Endpoint {
  title: string
  description: string
}

interface OverviewEndpoint {
  method: string
  path: string
  summary: string
}

interface OverviewEndpointGroup {
  tagName: string
  endpoints: OverviewEndpoint[]
}

interface OverviewEndpointWithTags extends OverviewEndpoint {
  tags: string[]
}

interface OverviewTagDefinition {
  name: string
}

interface Pagination {
  previousDoc: {
    slug: string | null
    name: string | null
    method?: string
  }
  nextDoc: {
    slug: string | null
    name: string | null
    method?: string
  }
}

interface Props {
  slug: string
  descriptionHtml: string
  endpoints: { [key: string]: Endpoint }
  overviewEndpoints: OverviewEndpoint[]
  overviewEndpointGroups: OverviewEndpointGroup[]
  overviewTitle: string
  pagination: { [key: string]: Pagination }
  endpointNames: { [key: string]: string }
}

interface ReadmeSlugObj {
  slug: string
  swaggerPath: string
  apiMethod: string
}

/**
 * Fetches OpenAPI spec and performs client-side reference resolution if needed
 * @param url The URL to fetch the OpenAPI spec from
 * @returns The OpenAPI spec with resolved references
 */
async function fetchWithClientSideResolution(url: string): Promise<string> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to fetch OpenAPI spec: ${response.status}`)
    }

    // Get the spec text first
    const specText = await response.text()

    // Always try to resolve references client-side in production
    // This ensures references are properly handled even if server-side resolution fails
    if (typeof window !== 'undefined') {
      try {
        // Validate it's proper JSON first
        JSON.parse(specText)

        clientLogger.info('Resolving references client-side')

        // Use dereference instead of bundle to fully resolve all references
        const parser = new SwaggerParser()
        const dereferenced = await parser.dereference(JSON.parse(specText), {
          dereference: {
            circular: true, // Allow circular references
          },
        })

        // Return the fully dereferenced spec
        return JSON.stringify(dereferenced)
      } catch (error) {
        clientLogger.error(
          `Failed to resolve references client-side: ${
            error instanceof Error ? error.message : String(error)
          }`
        )
        // If client-side resolution fails, return the original spec
        return specText
      }
    }

    // If we're not in the browser or client-side resolution fails, return the original spec
    return specText
  } catch (error) {
    clientLogger.error(
      `Error fetching OpenAPI spec: ${
        error instanceof Error ? error.message : String(error)
      }`
    )
    throw error
  }
}

function capitalize(content: string) {
  return content.replace(/^./, content[0].toUpperCase())
}

function getDescription(description: string) {
  return (
    description
      .split(/\r?\n/)
      .map((line: string) => line.trim())
      .find(
        (line: string) =>
          line && line[0].toLowerCase() !== line[0].toUpperCase()
      ) || ''
  )
}

function normalizeWhitespace(content: string) {
  return content.replace(/\s+/g, ' ').trim()
}

function stripHtml(content: string) {
  return normalizeWhitespace(content.replace(/<[^>]+>/g, ' '))
}

function getFirstSentence(content: string) {
  const normalizedContent = normalizeWhitespace(content)

  if (!normalizedContent) {
    return ''
  }

  const match = normalizedContent.match(/^.*?[.!?](?=\s|$)/)

  return match ? match[0].trim() : normalizedContent
}

function trimToLength(content: string, maxLength: number) {
  if (maxLength <= 0 || !content) {
    return ''
  }

  if (content.length <= maxLength) {
    return content
  }

  const truncated = content.slice(0, maxLength - 1)
  const lastSpaceIndex = truncated.lastIndexOf(' ')

  if (lastSpaceIndex > 0) {
    return `${truncated.slice(0, lastSpaceIndex)}…`
  }

  return `${truncated}…`
}

function removeTitlePrefix(content: string, title: string) {
  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return content
    .replace(new RegExp(`^${escapedTitle}\\s*[:\\-.]?\\s*`, 'i'), '')
    .trim()
}

function buildOverviewMetaDescription(
  apiTitle: string,
  descriptionText: string,
  overviewEndpoints: OverviewEndpoint[]
) {
  const descriptionSentence = removeTitlePrefix(
    getFirstSentence(descriptionText),
    apiTitle
  )

  const uniqueSummaries = overviewEndpoints.reduce<string[]>(
    (summaries, { summary }) => {
      const cleanedSummary = normalizeWhitespace(summary).replace(/[.!?]+$/, '')

      if (!cleanedSummary) {
        return summaries
      }

      const isDuplicate = summaries.some(
        (existingSummary) =>
          existingSummary.toLowerCase() === cleanedSummary.toLowerCase()
      )

      if (isDuplicate) {
        return summaries
      }

      summaries.push(cleanedSummary)
      return summaries
    },
    []
  )

  const maxSummaryCount = Math.min(uniqueSummaries.length, 5)

  for (let summaryCount = maxSummaryCount; summaryCount >= 0; summaryCount--) {
    const summaryText = uniqueSummaries.slice(0, summaryCount).join(', ')
    const suffix = summaryText ? `${summaryText}.` : ''
    const availableDescriptionLength =
      160 - apiTitle.length - 3 - (suffix ? suffix.length + 1 : 0)
    const trimmedDescription = trimToLength(
      descriptionSentence,
      availableDescriptionLength
    )

    const candidate = normalizeWhitespace(
      `${apiTitle} - ${trimmedDescription}${
        trimmedDescription && suffix ? ' ' : ''
      }${suffix}`
    )

    if (candidate.length <= 160) {
      return candidate
    }
  }

  if (uniqueSummaries.length) {
    return trimToLength(`${apiTitle} - ${uniqueSummaries.join(', ')}.`, 160)
  }

  return trimToLength(`${apiTitle} - ${descriptionSentence}`, 160)
}

function getOverviewEndpointHash(method: string, path: string) {
  return `${method.toLowerCase()}-${path.replaceAll(/{|}/g, '-')}`
}

const GENERAL_OVERVIEW_TAG_NAME = 'General'

function buildOverviewEndpointGroups(
  tagDefinitions: OverviewTagDefinition[],
  overviewEndpoints: OverviewEndpointWithTags[]
) {
  const groupedEndpoints = new Map<string, OverviewEndpointGroup>()
  const definedTagNames = new Set(tagDefinitions.map(({ name }) => name))

  overviewEndpoints.forEach(({ tags, ...endpoint }) => {
    const tagName = tags[0] || GENERAL_OVERVIEW_TAG_NAME
    const existingGroup = groupedEndpoints.get(tagName)

    if (existingGroup) {
      existingGroup.endpoints.push(endpoint)
      return
    }

    groupedEndpoints.set(tagName, {
      tagName,
      endpoints: [endpoint],
    })
  })

  const orderedTagNames = [
    ...tagDefinitions
      .map(({ name }) => name)
      .filter((name) => groupedEndpoints.has(name)),
    ...Array.from(groupedEndpoints.keys()).filter(
      (name) =>
        !definedTagNames.has(name) && name !== GENERAL_OVERVIEW_TAG_NAME
    ),
  ]

  if (
    groupedEndpoints.has(GENERAL_OVERVIEW_TAG_NAME) &&
    !orderedTagNames.includes(GENERAL_OVERVIEW_TAG_NAME)
  ) {
    orderedTagNames.push(GENERAL_OVERVIEW_TAG_NAME)
  }

  return orderedTagNames.map((tagName) => groupedEndpoints.get(tagName)!)
}

function getEndpointPathFromLocation() {
  if (typeof window === 'undefined') {
    return ''
  }

  const hash = window.location.hash.slice(1)
  if (hash) {
    return hash
  }

  return new URLSearchParams(window.location.search).get('endpoint') || ''
}

const overviewArticleStyles = {
  maxWidth: '960px',
  mx: 'auto',
  mb: '2.5rem',
  color: '#4A596B',
  fontSize: '0.95em',
  lineHeight: '1.5em',
}

const overviewHeaderStyles = {
  mt: 0,
  mb: '1.5rem',
  '*': {
    margin: '0px',
  },
  '& h1': {
    fontSize: ['20px', '28px'],
    lineHeight: ['30px', '38px'],
    fontWeight: '400',
    color: '#142032',
  },
}

const overviewContentStyles = {
  color: '#4A596B',
  '& p': {
    lineHeight: '1.5em',
    mb: '1rem',
  },
  '& ul, & ol': {
    mb: '1rem',
    pl: '1.5rem',
  },
  '& ul li, & ol li': {
    mt: '0.5em',
    mb: '0.5em',
  },
  '& h2': {
    fontSize: '1.375em',
    lineHeight: '2em',
    fontWeight: '400',
    mt: '1.3em',
    mb: '0.875em',
    color: '#142032',
  },
  '& h3': {
    fontSize: ['1.125rem', '1.25rem'],
    lineHeight: '1.75rem',
    fontWeight: '600',
    mt: '1.5rem',
    mb: '0.75rem',
    color: '#142032',
  },
  '& h4': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: '600',
    mt: '1.25rem',
    mb: '0.75rem',
    color: '#142032',
  },
  '& a': {
    color: '#E31C58',
    textDecoration: 'underline',
    textUnderlineOffset: '0.18em',
  },
  '& strong': {
    fontWeight: '600',
  },
  '& blockquote': {
    borderLeft: '4px solid #E7E9EE',
    color: '#4A596B',
    ml: 0,
    my: '1.5rem',
    pl: '1rem',
  },
  '& code': {
    fontFamily: 'mono',
    fontSize: '0.875rem',
    bg: '#F7F8FA',
    borderRadius: '4px',
    px: '0.25rem',
    py: '0.125rem',
  },
  '& pre': {
    bg: '#F7F8FA',
    border: '1px solid #E7E9EE',
    borderRadius: '4px',
    overflowX: 'auto',
    p: '1rem',
    mb: '1.5rem',
  },
  '& pre code': {
    bg: 'transparent',
    px: 0,
    py: 0,
  },
  '& table': {
    width: '100%',
    borderCollapse: 'collapse',
    mb: '1.5rem',
  },
  '& th, & td': {
    borderBottom: '1px solid #E7E9EE',
    px: '0.75rem',
    py: '0.625rem',
    textAlign: 'left',
    verticalAlign: 'top',
  },
}

const overviewTableWrapperStyles = {
  overflowX: 'auto',
  border: '1px solid #E7E9EE',
  borderRadius: '4px',
  bg: '#FFFFFF',
}

const overviewTableStyles = {
  width: '100%',
  minWidth: '640px',
  borderCollapse: 'collapse',
  '& th': {
    textAlign: 'left',
    padding: '0.875rem 1rem',
    borderBottom: '1px solid #E7E9EE',
    bg: '#F7F8FA',
    color: '#4A596B',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  '& td': {
    padding: '0.875rem 1rem',
    borderBottom: '1px solid #E7E9EE',
    verticalAlign: 'top',
    color: '#4A596B',
  },
  '& td:first-of-type': {
    whiteSpace: 'nowrap',
  },
  '& td:nth-of-type(2), & td:nth-of-type(3)': {
    wordBreak: 'break-word',
  },
  '& tbody tr:last-of-type td': {
    borderBottom: 'none',
  },
}

const endpointMethodBadgeStyles = {
  bg: '#F2F4F7',
  borderRadius: '999px',
  color: '#142032',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.75rem',
  fontWeight: '600',
  letterSpacing: '0.04em',
  minWidth: '3.25rem',
  px: '0.625rem',
  py: '0.25rem',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
}

const endpointPathStyles = {
  fontFamily: 'mono',
  fontSize: '0.875rem',
  bg: '#F7F8FA',
  borderRadius: '4px',
  px: '0.25rem',
  py: '0.125rem',
  wordBreak: 'break-word',
}

const endpointLinkStyles = {
  color: '#E31C58',
  textDecoration: 'underline',
  textUnderlineOffset: '0.18em',
  fontWeight: '500',
}

// Ensure the URL has a proper protocol during build time
function getAbsoluteUrl(path: string): string {
  // During SSR
  if (typeof window === 'undefined') {
    // Use localhost for development mode
    if (process.env.NODE_ENV === 'development') {
      return `http://localhost:3000${path}`
    }
    return `${getSiteUrl()}${path}`
  }
  // In browser
  return path
}

// Using await here without wasting the result
const slugs = Object.keys(await getReferencePaths())

const APIPage: NextPage<Props> = ({
  slug,
  descriptionHtml,
  endpoints,
  overviewEndpoints,
  overviewEndpointGroups,
  overviewTitle,
  pagination,
  endpointNames,
}) => {
  const router = useRouter()
  const rapidoc = useRef<{
    shadowRoot: Node
    scrollToPath: (endpoint: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolvedSpec: any
  }>(null)
  // State for client-side resolved spec
  const [resolvedSpec, setResolvedSpec] = useState<string | null>(null)
  const [cleanPath, setCleanPath] = useState('')
  const [isLoadingSpec, setIsLoadingSpec] = useState<boolean>(false)
  const [isRapiDocReady, setIsRapiDocReady] = useState<boolean>(false)
  const [errorLoadingSpec, setErrorLoadingSpec] = useState<string | null>(null)

  const pageTitle =
    capitalize(slug.replaceAll('-', ' ').replace('api', '')) + ' API'

  const getMethod = () => {
    const method = cleanPath.split('/')[0].replace('-', '').toUpperCase()
    return isMethodType(method) ? method : ''
  }

  const httpMethod: MethodType | '' = getMethod()
  const endpointPath = cleanPath ? `#${cleanPath}` : slug
  const isOverview = endpointPath === slug
  const headTitle = isOverview ? overviewTitle : endpointNames[endpointPath]
  const defaultFocusedEndpointId = overviewEndpoints[0]
    ? getOverviewEndpointHash(
        overviewEndpoints[0].method,
        overviewEndpoints[0].path
      )
    : undefined
  const pag: Pagination = {
    previousDoc: {
      name: null,
      slug: null,
    },
    nextDoc: {
      name: null,
      slug: null,
    },
  }
  const [endpointPagination, setEndpointPagination] = useState(pag)

  // Generate the absolute spec URL
  const specUrl = getAbsoluteUrl(`/api/openapi/${slug}`)

  useEffect(() => {
    let isMounted = true

    const loadRapiDoc = async () => {
      try {
        await import('../../../../RapiDoc/src/rapidoc.js')
        if (isMounted) {
          setIsRapiDocReady(true)
        }
      } catch (error) {
        if (isMounted) {
          setErrorLoadingSpec('Failed to load the interactive API viewer')
        }
        clientLogger.error(`Failed to load RapiDoc: ${error}`)
      }
    }

    loadRapiDoc()

    return () => {
      isMounted = false
    }
  }, [])

  // Effect to handle client-side fetching and reference resolution
  useEffect(() => {
    // Only run in the browser, not during SSR
    if (typeof window !== 'undefined') {
      const fetchAndResolveSpec = async () => {
        try {
          setIsLoadingSpec(true)
          setErrorLoadingSpec(null)

          const resolvedSpecText = await fetchWithClientSideResolution(specUrl)
          setResolvedSpec(resolvedSpecText)
        } catch (error) {
          setErrorLoadingSpec(
            error instanceof Error
              ? error.message
              : 'Failed to load API specification'
          )
          clientLogger.error(`Failed to fetch and resolve spec: ${error}`)
        } finally {
          setIsLoadingSpec(false)
        }
      }

      fetchAndResolveSpec()
    }
  }, [specUrl])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const syncEndpointPath = () => {
      setCleanPath(getEndpointPathFromLocation())
    }

    syncEndpointPath()
    window.addEventListener('hashchange', syncEndpointPath)

    return () => {
      window.removeEventListener('hashchange', syncEndpointPath)
    }
  }, [slug])

  useEffect(() => {
    setCleanPath(getEndpointPathFromLocation())
  }, [router.asPath])

  useEffect(() => {
    if (typeof window === 'undefined' || !window.location.hash) {
      return
    }

    const searchParams = new URLSearchParams(window.location.search)
    if (!searchParams.has('endpoint')) {
      return
    }

    // Preserve the active endpoint hash while stripping stale legacy query state.
    window.history.replaceState(
      window.history.state,
      document.title,
      `${window.location.pathname}${window.location.hash}`
    )
  }, [slug])

  useEffect(() => {
    if (!cleanPath || !isRapiDocReady || !rapidoc.current) {
      return
    }

    rapidoc.current.scrollToPath(cleanPath)
  }, [cleanPath, isRapiDocReady])

  useEffect(() => {
    setEndpointPagination(
      pagination[endpointPath] ? pagination[endpointPath] : pag
    )
  }, [endpointPath])

  const handleOverviewEndpointLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    endpointHash: string
  ) => {
    if (typeof window === 'undefined') {
      return
    }

    const searchParams = new URLSearchParams(window.location.search)
    if (!searchParams.has('endpoint')) {
      return
    }

    event.preventDefault()
    window.history.replaceState(
      window.history.state,
      document.title,
      window.location.pathname
    )
    window.location.hash = endpointHash
  }

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <link
          rel="canonical"
          href={`${getSiteUrl()}/docs/api-reference/${slug}`}
        />
        {endpoints && (
          <>
            <meta
              name="description"
              content={endpoints[endpointPath]?.description}
            />
            <meta
              name="docsearch:doctitle"
              content={endpoints[endpointPath]?.title}
            />
          </>
        )}
        <meta name="docsearch:doctype" content="API Reference" />
        <meta name="docsearch:doccategory" content={pageTitle} />
        {httpMethod && <meta name="docsearch:method" content={httpMethod} />}
      </Head>
      <Box sx={{ mx: 'auto', pt: '1em', maxWidth: '90%' }}>
        <Box sx={{ display: isOverview ? 'block' : 'none' }}>
          <Box as="article" sx={overviewArticleStyles}>
            <Box as="header" sx={overviewHeaderStyles}>
              <h1>{overviewTitle}</h1>
            </Box>
            {descriptionHtml && (
              <Box
                sx={overviewContentStyles}
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            )}
            {!!overviewEndpointGroups.length && (
              <Box as="section" sx={{ mt: '2rem' }}>
                <h2>Endpoints</h2>
                {overviewEndpointGroups.map(({ tagName, endpoints }) => (
                  <Box key={tagName} sx={{ mt: '1.5rem' }}>
                    <h3>{tagName}</h3>
                    <Box sx={overviewTableWrapperStyles}>
                      <Box as="table" sx={overviewTableStyles}>
                        <thead>
                          <tr>
                            <th>Method</th>
                            <th>Path</th>
                            <th>Summary</th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoints.map(({ method, path, summary }) => {
                            const endpointHash = getOverviewEndpointHash(
                              method,
                              path
                            )

                            return (
                              <tr key={`${method}-${path}`}>
                                <td>
                                  <Box as="span" sx={endpointMethodBadgeStyles}>
                                    {method}
                                  </Box>
                                </td>
                                <td>
                                  <Box as="code" sx={endpointPathStyles}>
                                    {path}
                                  </Box>
                                </td>
                                <td>
                                  <Box
                                    as="a"
                                    href={`#${endpointHash}`}
                                    onClick={(
                                      event: MouseEvent<HTMLAnchorElement>
                                    ) =>
                                      handleOverviewEndpointLinkClick(
                                        event,
                                        endpointHash
                                      )
                                    }
                                    sx={endpointLinkStyles}
                                  >
                                    {summary || `Open ${method} ${path}`}
                                  </Box>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{ display: isOverview ? 'none' : 'block' }}>
          {errorLoadingSpec && (
            <Box
              role="alert"
              sx={{
                bg: '#FFF4E5',
                border: '1px solid #FFD7A3',
                borderRadius: '4px',
                color: '#7A4B00',
                mb: '1.5rem',
                p: '1rem',
              }}
            >
              <strong>Interactive API reference unavailable.</strong>
              <p>{errorLoadingSpec}</p>
            </Box>
          )}
          {(isLoadingSpec || !isRapiDocReady) && (
            <Box sx={{ textAlign: 'center', p: '2em' }}>
              <p>Loading API specification...</p>
            </Box>
          )}
          {isRapiDocReady && (
            <rapi-doc
              ref={rapidoc}
              spec-url={specUrl}
              postman-url={getAbsoluteUrl(`/api/postman/${slug}`)}
              spec={resolvedSpec}
              layout="column"
              render-style="focused"
              // RapiDoc focused mode crashes when show-info is false and no
              // explicit goto-path is provided, because it tries to scroll using
              // the first path object instead of its elementId.
              goto-path={defaultFocusedEndpointId}
              show-header="false"
              show-info="false"
              show-side-nav="false"
              default-schema-tab="schema"
              fill-request-fields-with-example={true}
              theme="light"
              bg-color="#FFFFFF"
              primary-color="#142032"
              regular-font="VTEX Trust Regular"
              mono-font="Consolas,monaco,monospace"
              medium-font="VTEX Trust Medium"
              load-fonts={false}
              schema-style="table"
              schema-description-expanded={true}
              schema-expand-level="2"
              id="the-doc"
              allow-spec-file-download={true}
              allow-server-selection={true}
              allow-spec-url-load={false}
              allow-spec-file-load={false}
              persist-auth="true"
            />
          )}
        </Box>
        <Box sx={{ mx: ['0', '0', '80px'], borderTop: '1px solid #e7e9ed' }}>
          <ArticlePagination
            hidePaginationNext={false}
            hidePaginationPrevious={false}
            pagination={endpointPagination}
          />
        </Box>
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug || ''
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'API Reference'
  const logger = getLogger('API Reference')

  if (slugs.includes(slug as string)) {
    // Use the production URL for fetching specs during build time
    const url = `${getSiteUrl()}/api/openapi/${slug}`

    let apiSpec: string
    try {
      // Use fetch directly during build to avoid file system access issues with SwaggerParser
      if (
        process.env.NODE_ENV === 'production' &&
        typeof window === 'undefined'
      ) {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch OpenAPI spec for ${slug}: ${response.status}`
          )
        }
        // Get the raw text directly
        apiSpec = await response.text()

        try {
          // Validate that it's valid JSON by parsing it
          JSON.parse(apiSpec)
        } catch (parseError) {
          logger.error(`Invalid JSON in OpenAPI spec for ${slug}`)
          throw new Error(`Invalid JSON in OpenAPI spec for ${slug}`)
        }
      } else {
        // In development, use SwaggerParser directly with better error handling
        try {
          const bundledSpec = await SwaggerParser.bundle(url)
          apiSpec = JSON.stringify(bundledSpec) // Convert the bundled spec to string
        } catch (bundleError) {
          // If we can't bundle the spec, try to at least fetch it as raw text
          logger.info(
            `Could not bundle spec for ${slug}, falling back to raw fetch`
          )
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error(
              `Failed to fetch raw OpenAPI spec for ${slug}: ${response.status}`
            )
          }
          apiSpec = await response.text()
        }
      }
    } catch (error) {
      logger.error(`Parse Error on file ${slug}`)
      logger.error(error instanceof Error ? error.message : String(error))

      // Return notFound for any API spec that fails to parse
      return {
        notFound: true,
      }
    }

    // Use Oas to process the spec string
    const endpointFile = new Oas(apiSpec)
    const specDefinition = endpointFile.getDefinition()
    const { info, paths } = specDefinition
    const overviewTitle = info?.title || (slug as string)
    const descriptionHtml = await marked.parse(info?.description || '')
    const overviewEndpoints: OverviewEndpoint[] = []
    const overviewEndpointsWithTags: OverviewEndpointWithTags[] = []
    const overviewTagDefinitions = Array.isArray(specDefinition.tags)
      ? specDefinition.tags.reduce(
          (
            tagDefinitions: OverviewTagDefinition[],
            tagDefinition: { name?: unknown }
          ) => {
            if (
              tagDefinition &&
              typeof tagDefinition.name === 'string' &&
              tagDefinition.name.trim()
            ) {
              tagDefinitions.push({
                name: tagDefinition.name.trim(),
              })
            }

            return tagDefinitions
          },
          [] as OverviewTagDefinition[]
        )
      : []
    const endpoints: {
      [key: string]: Endpoint
    } = {}

    endpoints[slug as string] = {
      title: overviewTitle,
      description: '',
    }

    if (paths) {
      Object.entries(paths).forEach(([key, value]) => {
        if (value) {
          Object.entries(value).forEach(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ([endpointKey, endpointValue]: any) => {
              if (isMethodType(endpointKey.toUpperCase()) && endpointValue) {
                const operationTags = Array.isArray(endpointValue.tags)
                  ? endpointValue.tags.reduce(
                      (tags: string[], tag: unknown) => {
                        if (typeof tag === 'string' && tag.trim()) {
                          tags.push(tag.trim())
                        }

                        return tags
                      },
                      [] as string[]
                    )
                  : []
                const overviewEndpoint = {
                  method: endpointKey.toUpperCase(),
                  path: key,
                  summary: endpointValue.summary || '',
                }

                overviewEndpoints.push(overviewEndpoint)
                overviewEndpointsWithTags.push({
                  ...overviewEndpoint,
                  tags: operationTags,
                })
                endpoints[`#${getOverviewEndpointHash(endpointKey, key)}`] = {
                  title: endpointValue.summary || '',
                  description: getDescription(
                    endpointValue.description || endpointValue.summary || ''
                  ),
                }
              }
            }
          )
        }
      })
    }

    const overviewEndpointGroups = buildOverviewEndpointGroups(
      overviewTagDefinitions,
      overviewEndpointsWithTags
    )

    endpoints[slug as string].description = buildOverviewMetaDescription(
      overviewTitle,
      stripHtml(descriptionHtml),
      overviewEndpoints
    )
    const docsListEndpoint = jp.query(
      sidebarfallback,
      `$..[?(@.type=='openapi')]`
    )

    const docsList = flattenWithChildren(docsListEndpoint).filter(
      (obj) => obj.type === 'openapi'
    )

    docsList.map((doc) => {
      const path = doc.method
        ? `/docs/api-reference/${doc.slug}#${getOverviewEndpointHash(
            doc.method,
            doc.endpoint ?? ''
          )}`
        : `/docs/api-reference/${doc.slug}`
      doc['route'] = path
    })
    const isListed = docsList.find((obj) => obj.slug === slug)

    const pagination: { [key: string]: Pagination } = {}
    const endpointNames: { [key: string]: string } = {}
    Object.keys(endpoints).forEach((endpoint) => {
      const method = endpoint.split('-')[0].split('#')[1]
      const separator = endpoint.indexOf('-')
      const currentEndpoint = endpoint.substring(separator + 1)
      const currentEndpointPath = method
        ? `/docs/api-reference/${slug}#${method}-${currentEndpoint}`
        : `/docs/api-reference/${slug}`
      const currentEndpointObject = docsList.find(
        (obj) => obj.route === currentEndpointPath
      )
      const indexOfEndpoint = isListed
        ? docsList.findIndex((obj) => obj.route === currentEndpointPath)
        : -1

      endpointNames[`${endpoint}`] = currentEndpointObject?.name
        ? currentEndpointObject.name
        : endpoint === slug
        ? overviewTitle
        : ''
      pagination[`${endpoint}`] = {
        previousDoc: {
          name:
            indexOfEndpoint > 0
              ? `${docsList[indexOfEndpoint - 1].name}`
              : null,
          slug:
            indexOfEndpoint > 0
              ? `${docsList[indexOfEndpoint - 1].route}`
              : null,
          method:
            indexOfEndpoint > 0
              ? `${docsList[indexOfEndpoint - 1].method}`
              : 'undefined',
        },
        nextDoc: {
          name:
            indexOfEndpoint < docsList.length - 1
              ? `${docsList[indexOfEndpoint + 1].name}`
              : null,
          slug:
            indexOfEndpoint < docsList.length - 1
              ? `${docsList[indexOfEndpoint + 1].route}`
              : null,
          method:
            indexOfEndpoint < docsList.length - 1
              ? `${docsList[indexOfEndpoint + 1].method}`
              : 'undefined',
        },
      }
    })

    //Regular flow
    return {
      props: {
        slug,
        descriptionHtml,
        endpoints,
        overviewEndpoints,
        overviewEndpointGroups,
        overviewTitle,
        pagination,
        endpointNames,
        sectionSelected,
      },
      revalidate: 86400,
    }
  } else {
    const readmeSlugDict = new Map<string, ReadmeSlugObj>()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const readmeApisSlugList = require('utils/readmeAPIS.json')
    for (const slugItem of readmeApisSlugList) {
      const readmeSlug = slugItem?.readmeDoc?.slug
      const slugToWrite = slugItem?.slug
      const swaggerPath = slugItem?.readmeDoc?.swagger?.path
      const apiMethod = slugItem?.readmeDoc?.api?.method.toUpperCase()
      if (swaggerPath)
        readmeSlugDict.set(readmeSlug, {
          slug: slugToWrite,
          swaggerPath,
          apiMethod,
        })
    }
    if (readmeSlugDict.get(slug as string)) {
      //Readme redirect
      const readmeObj = readmeSlugDict.get(slug as string)
      return {
        redirect: {
          destination: `${
            readmeObj?.slug
          }#${readmeObj?.apiMethod.toLowerCase()}-${readmeObj?.swaggerPath
            .replaceAll('{', '-')
            .replaceAll('}', '-')}`,
          permanent: true,
        },
      }
    } else {
      // Not Found
      return {
        notFound: true,
      }
    }
  }
}

export default APIPage
