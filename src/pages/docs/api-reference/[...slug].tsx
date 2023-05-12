import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Oas from 'oas'
import SwaggerParser from '@apidevtools/swagger-parser'
import ArticlePagination from 'components/article-pagination'
import { Box } from '@vtex/brand-ui'
import jp from 'jsonpath'

import getReferencePaths from 'utils/getReferencePaths'
import getNavigation from 'utils/getNavigation'
import { MethodType, isMethodType } from 'utils/typings/unionTypes'
import '../../../../RapiDoc/src/rapidoc.js'
import { flattenWithChildren } from 'utils/navigation-utils'
import { getLogger } from 'utils/logging/log-util'
import getReferenceEndpoints from 'utils/getReferenceEndpoints'
import filterOpenAPI from 'utils/filterOpenAPI'

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
  slugAPI: string
  doc: string
  endpoints: { [key: string]: Endpoint }
  pagination: { [key: string]: Pagination }
  endpointNames: { [key: string]: string }
}

interface ReadmeSlugObj {
  slug: string
  swaggerPath: string
  apiMethod: string
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

const referencePaths = await getReferencePaths()
const slugs = Object.keys(await getReferencePaths())
const referenceEndpoints = (await getReferenceEndpoints({
  sitemap: false,
})) as string[]

const APIPage: NextPage<Props> = ({
  slug,
  slugAPI,
  doc,
  endpoints,
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
  const pageTitle =
    capitalize(slugAPI.replaceAll('-', ' ').replace('api', '')) + ' API'

  const getMethod = () => {
    const regexMethodMatches = router.asPath.match(/#(.*?)-/) || ''
    const method = regexMethodMatches ? regexMethodMatches[1].toUpperCase() : ''
    return method && isMethodType(method) ? method : ''
  }
  const httpMethod: MethodType | '' = getMethod()
  const hash = router.asPath.split('#')[1]
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
  const endpointPath = hash ? `#${hash}` : slugAPI

  useEffect(() => {
    if (slugAPI !== slug && rapidoc.current)
      rapidoc.current.scrollToPath(slug.slice(slug.indexOf('/') + 1))
  }, [slug])

  useEffect(() => {
    const scrollDoc = () => {
      if (rapidoc.current) {
        if (slugAPI === slug)
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
    setEndpointPagination(
      pagination[endpointPath] ? pagination[endpointPath] : pag
    )
  }, [endpointPath])

  return (
    <>
      <Head>
        <title>{endpointNames[endpointPath]}</title>
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
      <Box sx={{ px: ['1em', '2em'], pt: '1em' }}>
        <rapi-doc
          ref={rapidoc}
          postman-url={`/api/postman/${slug}`}
          spec-url={`/api/openapi/${slugAPI}`}
          spec={doc}
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
          id="the-doc"
          allow-spec-file-download={true}
        />
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
  const paths = referenceEndpoints.map((slug) => ({
    params: { slug: [slug] },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug =
    typeof params?.slug === 'object'
      ? params.slug.join('/')
      : params?.slug ?? ''
  const slugAPI = params?.slug ? params?.slug[0] : ''
  const url = referencePaths[slugAPI as string]
  const sectionSelected = 'API Reference'
  const sidebarfallback = await getNavigation()
  const logger = getLogger('API Reference')
  let api

  if (slugs.includes(slugAPI as string)) {
    const openAPI = await filterOpenAPI(slug)
    try {
      api = await SwaggerParser.dereference(openAPI)
    } catch (error) {
      logger.error(`Parse Error on file ${slug}`)
      return {
        notFound: true,
      }
    }
    const doc = JSON.stringify(await SwaggerParser.parse(api))
    const endpointFile = new Oas(doc)
    const { info, paths } = endpointFile.getDefinition()
    const endpoints: {
      [key: string]: Endpoint
    } = {}

    endpoints[slugAPI as string] = {
      title: info.title,
      description: getDescription(info.description || ''),
    }

    if (paths) {
      Object.entries(paths).forEach(([key, value]) => {
        if (value) {
          Object.entries(value).forEach(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ([endpointKey, endpointValue]: any) => {
              if (
                isMethodType(endpointKey.toUpperCase()) &&
                endpointValue &&
                endpointValue.description
              ) {
                endpoints[`#${endpointKey}-${key.replaceAll(/{|}/g, '-')}`] = {
                  title: endpointValue.summary || '',
                  description: getDescription(endpointValue.description),
                }
              }
            }
          )
        }
      })
    }
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
        slugAPI,
        doc,
        url,
        sectionSelected,
        sidebarfallback,
        endpoints,
        pagination,
        endpointNames,
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
