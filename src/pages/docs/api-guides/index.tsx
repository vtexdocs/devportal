import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'

interface Props {
  sidebarfallback: any //eslint-disable-line
}

const ApiGuidesPage: NextPage<Props> = () => {
  return (
    <ul>
      <li>
        <Link href="/docs/api-guides/billing-options">
          <a>Billing Options</a>
        </Link>
      </li>
      <li>
        <Link href="/docs/api-guides/clients">
          <a>Clients</a>
        </Link>
      </li>
      <li>
        <Link href="/docs/api-guides/developing-an-app">
          <a>Developing an App</a>
        </Link>
      </li>
    </ul>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()

  return {
    props: {
      sidebarfallback,
    },
  }
}

export default ApiGuidesPage
