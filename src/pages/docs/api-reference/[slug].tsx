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
import { stripHTML } from 'utils/string-utils'
import {
  enhanceCalloutHtml,
  replaceCalloutBlocks,
} from 'utils/replaceCalloutBlocks'
import {
  buildOverviewEndpointGroups,
  buildOverviewMetaDescription,
  getOverviewEndpointHash,
  type OverviewEndpoint,
  type OverviewEndpointGroup,
  type OverviewEndpointWithTags,
  type OverviewTagDefinition,
} from 'utils/api-reference-overview'
import apiReferenceStyles, {
  getOverviewEndpointMethodBadgeSx,
} from 'styles/api-reference'

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
  const [isLoadingSpec, setIsLoadingSpec] = useState<boolean>(false)
  const [isRapiDocReady, setIsRapiDocReady] = useState<boolean>(false)
  const [errorLoadingSpec, setErrorLoadingSpec] = useState<string | null>(null)

  const pageTitle =
    capitalize(slug.replaceAll('-', ' ').replace('api', '')) + ' API'

  // Derive the active endpoint identifier from the current Next route. Hash
  // navigation pushes the URL back through `router.push` (see effects below),
  // so `router.asPath` stays in sync with `window.location` and this stays
  // truthful on every render.
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

  // Mirror non-router hash changes (back/forward, raw <a href="#…"> clicks,
  // RapiDoc's internal scroll-spy mutating window.location.hash) back into the
  // Next router so `router.asPath` — and the derived `cleanPath` above — stay
  // in sync with the URL the browser is actually showing.
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
            {endpoints[endpointPath]?.description && (
              <meta
                name="description"
                content={endpoints[endpointPath].description}
              />
            )}
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
          <Box as="article" sx={apiReferenceStyles.overviewArticleStyles}>
            <Box as="header" sx={apiReferenceStyles.overviewHeaderStyles}>
              <h1>{overviewTitle}</h1>
            </Box>
            {descriptionHtml && (
              <Box
                sx={apiReferenceStyles.overviewContentStyles}
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            )}
            {!!overviewEndpointGroups.length && (
              <Box as="section" sx={{ mt: '2rem' }}>
                <h2>Endpoints</h2>
                {overviewEndpointGroups.map(({ tagName, endpoints }) => (
                  <Box key={tagName} sx={{ mt: '1.5rem' }}>
                    <h3>{tagName}</h3>
                    <Box sx={apiReferenceStyles.overviewTableWrapperStyles}>
                      <Box
                        as="table"
                        sx={apiReferenceStyles.overviewTableStyles}
                      >
                        <thead>
                          <tr>
                            <th>Summary</th>
                            <th>Method</th>
                            <th>Path</th>
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
                                  <Box
                                    as="a"
                                    href={`#${endpointHash}`}
                                    sx={apiReferenceStyles.endpointLinkStyles}
                                  >
                                    {summary || `Open ${method} ${path}`}
                                  </Box>
                                </td>
                                <td>
                                  <Box
                                    as="span"
                                    sx={getOverviewEndpointMethodBadgeSx(
                                      method
                                    )}
                                  >
                                    {method.toUpperCase()}
                                  </Box>
                                </td>
                                <td>
                                  <Box
                                    as="code"
                                    sx={apiReferenceStyles.endpointPathStyles}
                                  >
                                    {path}
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
              goto-path={cleanPath || defaultFocusedEndpointId}
              show-header="false"
              show-info="false"
              show-side-nav="false"
              update-route="false"
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
  const sectionSelected = 'API Reference'
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
    const specDefinition = endpointFile.getDefinition()
    const { info, paths } = specDefinition
    const overviewTitle = info?.title || (slug as string)
    const normalizedDescription = replaceCalloutBlocks(info?.description || '')
    const descriptionHtml = enhanceCalloutHtml(
      await marked.parse(normalizedDescription)
    )
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
      stripHTML(descriptionHtml),
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
        sidebarfallback,
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
