import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Oas from 'oas'

import getReferencePaths from 'utils/getReferencePaths'
import getNavigation from 'utils/getNavigation'
import { MethodType, isMethodType } from 'utils/typings/unionTypes'

interface Endpoint {
  title: string
  description: string
}
interface Props {
  slug: string
  endpoints: { [key: string]: Endpoint }
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

const APIPage: NextPage<Props> = ({ slug, endpoints }) => {
  const router = useRouter()
  const rapidoc = useRef<{ scrollToPath: (endpoint: string) => void }>(null)
  const [endpointPath, setEndpointPath] = useState('')
  const pageTitle =
    capitalize(slug.replaceAll('-', ' ').replace('api', '')) + ' API'

  const getMethod = () => {
    const regexMethodMatches = router.asPath.match(/#(.*?)-/) || ''
    const method = regexMethodMatches ? regexMethodMatches[1].toUpperCase() : ''
    return method && isMethodType(method) ? method : ''
  }
  const httpMethod = getMethod() as MethodType | ''

  useEffect(() => {
    const path = router.asPath.split('#')[1]
    setEndpointPath(path ? `#${router.asPath.split('#')[1]}` : slug)
  }, [router.asPath])

  useEffect(() => {
    const scrollDoc = () => {
      if (rapidoc.current) {
        const endpoint = window.location.hash.slice(1) || 'overview'
        rapidoc.current.scrollToPath(endpoint)
      }
    }

    router.events.on('hashChangeComplete', scrollDoc)
    return () => {
      router.events.off('hashChangeComplete', scrollDoc)
    }
  }, [rapidoc.current, router.events])

  return (
    <>
      <Head>
        <title>
          {capitalize(slug.replaceAll('-', ' ').replace('api', ''))} API
        </title>
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
      <Script
        type="text/javascript"
        src="/rapidoc/rapidoc-min.js"
        strategy="beforeInteractive"
      />
      <rapi-doc
        ref={rapidoc}
        spec-url={`/api/openapi/${slug}`}
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
  const url = referencePaths[slug as string]
  const sectionSelected = 'API Reference'
  const sidebarfallback = await getNavigation()
  if (slugs.includes(slug as string)) {
    const response = await fetch(
      `https://developers.vtex.com/api/openapi/${slug}`
    )
    const doc = await response.json()
    const endpointFile = new Oas(doc)
    const { info, paths } = endpointFile.getDefinition()
    const endpoints: {
      [key: string]: Endpoint
    } = {}

    endpoints[slug as string] = {
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

    //Regular flow
    return {
      props: {
        slug,
        url,
        sectionSelected,
        sidebarfallback,
        endpoints,
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
