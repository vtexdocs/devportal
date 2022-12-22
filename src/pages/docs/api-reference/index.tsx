import Link from 'next/link'
import Layout from 'components/category-layout'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const APIReferencePage: NextPage<Props> = () => {
  return (
    <Layout>
      <h1>API Reference</h1>
      <ul>
        <li>
          <Link href="/docs/api-reference/Catalog-API" legacyBehavior>
            <a>Catalog API</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/api-reference/Checkout-API" legacyBehavior>
            <a>Checkout API</a>
          </Link>
        </li>
        <li>
          <Link
            href="/docs/api-reference/antifraud-provider-protocol-overview"
            legacyBehavior
          >
            <a>antifraud API</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/api-reference/giftcard" legacyBehavior>
            <a>giftcard API</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'API Reference'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
    },
  }
}

export default APIReferencePage
