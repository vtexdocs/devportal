import Sidebar from 'components/sidebar'
import { Flex } from '@vtex/brand-ui'

import Script from 'next/script'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import styles from 'styles/documentation-page'
interface Props {
  slug: string
}
//<rapi-doc-mini spec-url={`/docs/api-reference/${slug}.json`} />
const APIPage: NextPage<Props> = ({ slug }) => {
  return (
    <>
      <Script
        type="text/javascript"
        src="/rapidoc/rapidoc-min.js"
        strategy="beforeInteractive"
      />

      <Flex sx={styles.container}>
        <Sidebar sectionSelected="API Reference" />
        <rapi-doc-mini
          spec-url={`/docs/api-reference/${slug}.json`}
          match-paths="get /api/catalog_system/pvt/products/GetProductAndSkuIds"
          paths-expanded={true}
          layout="column"
          fill-request-fields-with-example={true}
          theme="light"
          bg-color="#FFFFFF"
          primary-color="#142032"
          regular-font="VTEX Trust Variable"
          mono-font="VTEX Trust Variable"
          load-fonts={false}
          schema-style="table"
          schema-description-expanded={true}
          id="the-doc"
        />
      </Flex>
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
