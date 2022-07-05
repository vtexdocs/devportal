import { Flex } from '@vtex/brand-ui'

import Sidebar from 'components/sidebar'
import Link from 'next/link'
import styles from 'styles/api-guides'
import SidebarContextProvider from 'utils/contexts/sidebar'

const ApiGuidesPage = () => {
  return (
    <SidebarContextProvider>
      <Flex sx={styles.container}>
        <Sidebar sectionSelected={'API Guides'} />
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
      </Flex>
    </SidebarContextProvider>
  )
}

export default ApiGuidesPage
