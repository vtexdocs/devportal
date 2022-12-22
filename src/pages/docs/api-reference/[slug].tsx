import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useLayoutEffect, useRef } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Props {
  slug: string
}

const APIPage: NextPage<Props> = ({ slug }) => {
  const router = useRouter()
  const rapidoc = useRef<{ scrollTo: (endpoint: string) => void }>(null)

  useLayoutEffect(() => {
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
        spec-url={`/docs/api-reference/${slug}.json`}
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

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [
    {
      params: {
        slug: 'Catalog-API',
      },
    },
    {
      params: {
        slug: 'Checkout-API',
      },
    },
    {
      params: {
        slug: 'antifraud-provider-protocol-overview',
      },
    },
    {
      params: {
        slug: 'giftcard',
      },
    },
  ]

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      slug: params?.slug,
    },
  }
}

export default APIPage
