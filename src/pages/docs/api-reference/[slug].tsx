import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import getReferencePaths from 'utils/getReferencePaths'

interface Props {
  slug: string
}

const referencePaths = await getReferencePaths()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const APIPage: NextPage<Props> = ({ url }) => {
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
        spec-url={`${url}`}
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
  const slugs = Object.keys(await getReferencePaths())
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params?.slug
  const url = referencePaths[slug as string] || ''
  return {
    props: {
      slug,
      url,
    },
  }
}

export default APIPage
