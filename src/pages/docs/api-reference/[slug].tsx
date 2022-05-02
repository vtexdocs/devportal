import Script from 'next/script'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Props {
  slug: string
}

const APIPage: NextPage<Props> = ({ slug }) => {
  return (
    <>
      <Script
        src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"
        strategy="beforeInteractive"
      />

      <rapi-doc
        spec-url={`/docs/api-reference/${slug}.json`}
        theme="light"
        show-header={false}
        render-style="focused"
        nav-bg-color="#FFFFFF"
        primary-color="#142032"
        regular-font="VTEX Trust Variable"
        style={{ height: '100%', width: '100%', marginTop: '5rem' }}
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
