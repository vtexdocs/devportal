import Layout from 'components/category-layout'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const StorefrontDevelopmentPage: NextPage<Props> = () => {
  return (
    <Layout>
      <h1>Storefront Development</h1>
      <p>Storefront Development</p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'Storefront Development'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
    },
  }
}

export default StorefrontDevelopmentPage
