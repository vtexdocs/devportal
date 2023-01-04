import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import getReferencePaths from 'utils/getReferencePaths'

interface Props {
  slug: string
}

interface ReadmeSlugObj {
  slug: string
  swaggerPath: string
  apiMethod: string
}

const referencePaths = await getReferencePaths()
const slugs = Object.keys(await getReferencePaths())

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const APIPage: NextPage<Props> = ({ slug }) => {
  const router = useRouter()
  const rapidoc = useRef<{ scrollTo: (endpoint: string) => void }>(null)

  useEffect(() => {
    const scrollDoc = () => {
      if (rapidoc.current) {
        const endpoint = window.location.hash.slice(1) || 'overview'
        rapidoc.current.scrollTo(endpoint)
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
        <meta name="docsearch:doctype" content="API Reference" />
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

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params?.slug || ''
  const url = referencePaths[slug as string]
  const sectionSelected = 'API Reference'
  if (slugs.includes(slug as string)) {
    //Regular flow
    return {
      props: {
        slug,
        url,
        sectionSelected,
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
