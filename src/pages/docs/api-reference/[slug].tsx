import Script from 'next/script'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Props {
  slug: string
  matchPath: string
}
//<rapi-doc-mini spec-url={`/docs/api-reference/${slug}.json`} />
const APIPage: NextPage<Props> = ({ slug, matchPath }) => {
  return (
    <>
      <Script
        type="text/javascript"
        src="/rapidoc/rapidoc-min.js"
        strategy="beforeInteractive"
      />
      <rapi-doc-mini
        spec-url={`/docs/api-reference/${slug}.json`}
        match-paths={matchPath}
        paths-expanded={true}
        layout="column"
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
        slug: 'catalog',
      },
    },
    {
      params: {
        slug: 'checkout',
      },
    },
    {
      params: {
        slug: 'antifraud',
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
  let matchPath =
    params?.slug === 'catalog'
      ? 'get /api/catalog_system/pvt/products/GetProductAndSkuIds'
      : 'post /api/checkout/pub/orderForms/simulation'

  if (params?.slug === 'antifraud') matchPath = 'post /authorization/token'
  if (params?.slug === 'giftcard')
    matchPath = 'get /giftcardproviders/{giftCardProviderId}'

  return {
    props: {
      slug: params?.slug,
      matchPath: matchPath,
    },
  }
}

export default APIPage
