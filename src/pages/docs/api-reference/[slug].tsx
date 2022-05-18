import Script from 'next/script'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Props {
  slug: string
}

const APIPage: NextPage<Props> = ({ slug }) => {
  const rapidocstyle = {
    width: '100%',
    height: '100%',
    marginTop: '5rem',
    '--nav-get-color': '#38853C',
    '--nav-put-color': '#D56A00',
    '--nav-post-color': '#2978B5',
    '--nav-delete-color': '#CC3D3D',
    '--red': '#CC3D3D',
    '--orange': '#D56A00',
    '--green': '#2978B5',
    '--blue': '#38853C',
  }
  return (
    <>
      <Script
        type="text/javascript"
        src="/rapidoc/rapidoc-min.js"
        strategy="beforeInteractive"
      />

      <rapi-doc
        spec-url={`/docs/api-reference/${slug}.json`}
        style={rapidocstyle}
        fill-request-fields-with-example={true}
        theme="light"
        render-style="focused"
        bg-color="#FFFFFF"
        nav-bg-color="#FFFFFF"
        nav-hover-bg-color="#F8F7FC"
        nav-hover-text-color="#000711"
        show-method-in-nav-bar={true}
        primary-color="#142032"
        regular-font="VTEX Trust Variable"
        mono-font="VTEX Trust Variable"
        load-fonts={false}
        use-path-in-nav-bar={false}
        nav-text-color="#4A596B"
        nav-accent-color="#D71D55"
        nav-item-spacing="relaxed"
        on-nav-tag-click="expand-collapse"
        schema-style="table"
        schema-description-expanded={true}
        show-info={true}
        show-header={false}
      ></rapi-doc>
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
