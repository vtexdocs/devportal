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

  // ---------------------------------------------------------------------------
  // HASH NAVIGATION — see plans/api-navitagion-bug/.
  // ---------------------------------------------------------------------------
  // The page is statically generated once per slug but renders TWO views:
  //   - overview  (URL has NO hash) -> server-rendered HTML, indexable
  //   - endpoint  (URL has #method-path) -> RapiDoc focused viewer
  //
  // Since the hash is the only thing that distinguishes the two, the toggle
  // must be client-side. We use ONE source of truth: `window.location.hash`,
  // mirrored into `clientHash` React state by the `syncHash` effect below.
  //
  // RapiDoc has its own capture-phase `hashchange` listener
  // (`RapiDoc/src/rapidoc.js:540`) that calls `scrollToPath(...)` to focus
  // the matching endpoint inside its shadow DOM, and it also reads the hash
  // directly when its spec finishes loading (`rapidoc.js:791-797`). So
  // RapiDoc owns its own scroll behavior inside its shadow DOM — this page
  // only owns the overview/endpoint visibility toggle and the window scroll.
  // ---------------------------------------------------------------------------

  // Mirrors `window.location.hash` (and the legacy `?endpoint=` query) into
  // React state, AND forwards the new path to RapiDoc explicitly.
  //
  // `router.asPath` does NOT include the hash on SSR or on the initial client
  // hydration of a directly-loaded URL, so we read `window.location` directly.
  //
  // We trigger `syncHash` on three signals:
  //   - native `hashchange` (browser back/forward, raw `<a href="#…">` clicks)
  //   - Next router `hashChangeComplete` and `routeChangeComplete` (Next
  //     `<Link>` clicks navigate via `history.pushState`, which does NOT
  //     fire `hashchange`; sidebar links in this app are Next Links)
  //
  // The same effect re-runs when `slug` changes because Next.js reuses this
  // page component across `[slug]` param changes, so `clientHash` state
  // persists across slug navigations and would otherwise stay stale.
  //
  // Why we call `rapidoc.current.scrollToPath(...)` manually: RapiDoc has
  // its own `hashchange` listener (`rapidoc.js:540`) that handles native
  // browser hash changes, but `history.pushState` does NOT fire `hashchange`,
  // so Next-Link navigations bypass that listener entirely. Likewise,
  // RapiDoc only reads `goto-path` once at init (`rapidoc.js:584`) — prop
  // changes after the spec is loaded are ignored. Forwarding the new path
  // here is the only way to keep RapiDoc in sync on same-slug Next-Link
  // navigation between two endpoints. It's a no-op when the ref isn't ready
  // yet (initial hydration) or when the target matches the current focus.
  const [clientHash, setClientHash] = useState('')

  useEffect(() => {
    const syncHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1))
      let newHash = ''
      if (hash) {
        newHash = hash
      } else {
        // Fallback for legacy `/foo?endpoint=method-path` URLs that older
        // sitemaps and external links still use. New navigation always uses
        // hash fragments; this only matters on initial load.
        const legacyEndpoint = new URLSearchParams(window.location.search).get(
          'endpoint'
        )
        if (legacyEndpoint) newHash = decodeURIComponent(legacyEndpoint)
      }
      setClientHash(newHash)
      if (newHash && rapidoc.current?.scrollToPath) {
        rapidoc.current.scrollToPath(newHash)
      }
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    router.events.on('hashChangeComplete', syncHash)
    router.events.on('routeChangeComplete', syncHash)
    return () => {
      window.removeEventListener('hashchange', syncHash)
      router.events.off('hashChangeComplete', syncHash)
      router.events.off('routeChangeComplete', syncHash)
    }
  }, [router.events, slug])

  const cleanPath = clientHash

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
    setEndpointPagination(
      pagination[endpointPath] ? pagination[endpointPath] : pag
    )
  }, [endpointPath])

  // When transitioning from overview to endpoint view, reset the window
  // scroll. The user typically clicks an endpoint link from somewhere down
  // the overview's endpoint table, and the browser does not auto-scroll
  // because there is no element with an id matching the hash in the light
  // DOM (RapiDoc renders that element inside its shadow DOM). We intentionally
  // do NOT scroll on the inverse transition (endpoint -> overview) so that
  // browser-managed back/forward scroll restoration keeps working.
  useEffect(() => {
    if (!isOverview && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [isOverview])

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
        {/*
          View toggle. Both subtrees are mounted at all times so that
          RapiDoc's spec stays loaded across overview/endpoint transitions.
          Only one is visible. isOverview is true at SSG time (no hash on
          the server), so the static HTML always serves the overview
          content -- this is what makes overview pages indexable. On the
          client, `clientHash` flips the toggle.
        */}
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
              // Force RapiDoc's `routePrefix` to `#` regardless of whether the
              // current URL has a hash. RapiDoc's default initialization
              // (`rapidoc.js:500`) picks `?endpoint=` when the page loads on
              // the bare slug (overview, no hash). With that wrong prefix,
              // `getElementIDFromURL()` returns the full URL on every spec
              // (re)load and the focused template falls back to the first
              // endpoint, ignoring our `scrollToPath()` calls.
              route-prefix="#"
              // RapiDoc focused mode crashes when show-info is false and no
              // explicit goto-path is provided, because it tries to scroll using
              // the first path object instead of its elementId.
              //
              // NOTE: `goto-path` is consulted by RapiDoc only when
              // `window.location.hash` is empty (`rapidoc.js:584`). If the URL
              // has a hash, RapiDoc uses `getElementIDFromURL()` instead. So
              // for deep links, the hash wins; `goto-path` only matters for
              // bare-slug URLs to avoid the focused-mode crash.
              goto-path={cleanPath || defaultFocusedEndpointId}
              show-header="false"
              show-info="false"
              show-side-nav="false"
              // `update-route="false"` disables RapiDoc's `replaceHistoryState`
              // calls (`rapidoc.js:1010`, 875, 915, endpoint-template.js:17).
              // Without this, RapiDoc would append `?endpoint=…` to the URL on
              // init and on every scroll-spy event, polluting the URL.
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
