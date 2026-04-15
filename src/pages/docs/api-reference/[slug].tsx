import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
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

const overviewContentStyles = {
  '& h2': {
    fontSize: ['1.5rem', '1.75rem'],
    mt: '2rem',
    mb: '1rem',
  },
  '& h3, & h4': {
    fontSize: ['1.25rem', '1.5rem'],
    mt: '1.5rem',
    mb: '0.75rem',
  },
  '& p': {
    lineHeight: '1.7',
    mb: '1rem',
  },
  '& ul, & ol': {
    lineHeight: '1.7',
    mb: '1rem',
    pl: '1.5rem',
  },
  '& li + li': {
    mt: '0.5rem',
  },
  '& a': {
    color: '#0C389F',
  },
  '& code': {
    fontFamily: 'mono',
    fontSize: '0.95em',
  },
  '& pre': {
    bg: '#F5F7FA',
    border: '1px solid #E7E9ED',
    borderRadius: '4px',
    overflowX: 'auto',
    p: '1rem',
    mb: '1.5rem',
  },
  '& pre code': {
    fontSize: '0.875rem',
  },
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
  const [isLoadingSpec, setIsLoadingSpec] = useState<boolean>(false)
  const [isRapiDocReady, setIsRapiDocReady] = useState<boolean>(false)
  const [errorLoadingSpec, setErrorLoadingSpec] = useState<string | null>(null)

  const pageTitle =
    capitalize(slug.replaceAll('-', ' ').replace('api', '')) + ' API'
  const hasHashTag = router.asPath.indexOf('#') > -1
  const cleanPath = hasHashTag
    ? router.asPath.split('#')[1]
    : router.asPath.split('?endpoint=')[1] || ''

  const getMethod = () => {
    const method = cleanPath.split('/')[0].replace('-', '').toUpperCase()
    return isMethodType(method) ? method : ''
  }

  const httpMethod: MethodType | '' = getMethod()
  const endpointPath = cleanPath ? `#${cleanPath}` : slug
  const headTitle =
    endpointPath === slug
      ? `${overviewTitle} - VTEX API Reference`
      : endpointNames[endpointPath]
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
    const scrollDoc = () => {
      if (rapidoc.current) {
        rapidoc.current.scrollToPath(
          window.location.hash.slice(1) || 'overview'
        )
      }
    }

    router.events.on('hashChangeComplete', scrollDoc)
    return () => {
      router.events.off('hashChangeComplete', scrollDoc)
    }
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      router.push(window.location.href)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [router])

  useEffect(() => {
    setEndpointPagination(
      pagination[endpointPath] ? pagination[endpointPath] : pag
    )
  }, [endpointPath])

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
        <Box as="article" sx={{ mb: '2.5rem' }}>
          <Box as="header" sx={{ mb: '1.5rem' }}>
            <h1>{overviewTitle}</h1>
          </Box>
          {descriptionHtml && (
            <Box
              sx={overviewContentStyles}
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          )}
          {!!overviewEndpoints.length && (
            <Box as="section" sx={{ mt: '2rem' }}>
              <h2>Endpoints</h2>
              <Box
                sx={{
                  overflowX: 'auto',
                  border: '1px solid #E7E9ED',
                  borderRadius: '4px',
                }}
              >
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    minWidth: '640px',
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          padding: '0.75rem 1rem',
                          borderBottom: '1px solid #E7E9ED',
                        }}
                      >
                        Method
                      </th>
                      <th
                        style={{
                          textAlign: 'left',
                          padding: '0.75rem 1rem',
                          borderBottom: '1px solid #E7E9ED',
                        }}
                      >
                        Path
                      </th>
                      <th
                        style={{
                          textAlign: 'left',
                          padding: '0.75rem 1rem',
                          borderBottom: '1px solid #E7E9ED',
                        }}
                      >
                        Summary
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {overviewEndpoints.map(({ method, path, summary }) => (
                      <tr key={`${method}-${path}`}>
                        <td
                          style={{
                            padding: '0.75rem 1rem',
                            borderBottom: '1px solid #E7E9ED',
                            verticalAlign: 'top',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Box
                            as="span"
                            sx={{
                              bg: '#E9F2FF',
                              borderRadius: '999px',
                              color: '#0C389F',
                              display: 'inline-block',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              letterSpacing: '0.04em',
                              px: '0.625rem',
                              py: '0.25rem',
                            }}
                          >
                            {method}
                          </Box>
                        </td>
                        <td
                          style={{
                            padding: '0.75rem 1rem',
                            borderBottom: '1px solid #E7E9ED',
                            verticalAlign: 'top',
                            wordBreak: 'break-word',
                          }}
                        >
                          <code>{path}</code>
                        </td>
                        <td
                          style={{
                            padding: '0.75rem 1rem',
                            borderBottom: '1px solid #E7E9ED',
                            verticalAlign: 'top',
                            wordBreak: 'break-word',
                          }}
                        >
                          {summary || ' '}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            </Box>
          )}
        </Box>
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
            show-header="false"
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
    const { info, paths } = endpointFile.getDefinition()
    const overviewTitle = info?.title || (slug as string)
    const descriptionHtml = await marked.parse(info?.description || '')
    const overviewEndpoints: OverviewEndpoint[] = []
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
                overviewEndpoints.push({
                  method: endpointKey.toUpperCase(),
                  path: key,
                  summary: endpointValue.summary || '',
                })
                endpoints[`#${endpointKey}-${key.replaceAll(/{|}/g, '-')}`] = {
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
        ? `/docs/api-reference/${doc.slug}#${doc.method.toLowerCase()}-${
            doc.endpoint
          }`
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
        overviewTitle,
        pagination,
        endpointNames,
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
