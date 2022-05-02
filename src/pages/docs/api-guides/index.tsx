import { Flex } from '@vtex/brand-ui'

import Sidebar from 'components/sidebar'
import Link from 'next/link'
import styles from 'styles/api-guides'
import ContextProvider from 'utils/contexts/context'

const ApiGuidesPage = () => {
  return (
    <ContextProvider>
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
        </ul>
      </Flex>
    </ContextProvider>
  )
}

export default ApiGuidesPage
