import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Oas from 'oas'

import getReferencePaths from 'utils/getReferencePaths'
import getNavigation from 'utils/getNavigation'

interface Props {
  slug: string
}

interface ReadmeSlugObj {
  slug: string
  swaggerPath: string
  apiMethod: string
}

function capitalize(content: string) {
  return content.replace(/^./, content[0].toUpperCase())
}

const referencePaths = await getReferencePaths()
const slugs = Object.keys(await getReferencePaths())

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const APIPage: NextPage<Props> = ({ slug, descriptions }) => {
  const router = useRouter()
  const rapidoc = useRef<{ scrollToPath: (endpoint: string) => void }>(null)
  const [endpointPath, setEndpointPath] = useState('')

  useEffect(() => {
    setEndpointPath(`#${router.asPath.split('#')[1]}`)
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
        <meta name="docsearch:doctype" content="API Reference" />
        {descriptions && (
          <meta name="description" content={descriptions[endpointPath]} />
        )}
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
        regular-font="VTEX Trust Variable"
        mono-font="VTEX Trust Variable"
        medium-font="VTEX Trust Medium"
        load-fonts={false}
        schema-style="table"
        schema-description-expanded={true}
        id="the-doc"
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
    const allPaths = endpointFile.getDefinition().paths
    const descriptions: { [key: string]: string } = {}
    const isMethod = (key: string) =>
      ['get', 'post', 'delete', 'put'].includes(key)

    if (allPaths) {
      Object.entries(allPaths).forEach(([key, value]) => {
        if (value) {
          Object.entries(value).forEach(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ([endpointKey, endpointValue]: any) => {
              if (
                isMethod(endpointKey) &&
                endpointValue &&
                endpointValue.description
              ) {
                descriptions[`#${endpointKey}-${key.replaceAll(/{|}/g, '-')}`] =
                  endpointValue.description
                    .split(/\r?\n/)
                    .map((line: string) => line.trim())
                    .find(
                      (line: string) =>
                        line && line[0].toLowerCase() !== line[0].toUpperCase()
                    ) || ''
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
        descriptions,
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
