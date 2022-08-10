import Link from 'next/link'
import { Flex } from '@vtex/brand-ui'

import Sidebar from 'components/sidebar'
import SidebarContextProvider from 'utils/contexts/sidebar'
import styles from 'styles/api-reference'

const APIReferencePage = () => {
  return (
    <SidebarContextProvider>
      <Flex sx={styles.container}>
        <Sidebar sectionSelected={'API Reference'} />
        <ul>
          <li>
            <Link href="/docs/api-reference/catalog">
              <a>Catalog API</a>
            </Link>
          </li>
          <li>
            <Link href="/docs/api-reference/checkout">
              <a>Checkout API</a>
            </Link>
          </li>
        </ul>
      </Flex>
    </SidebarContextProvider>
  )
}

export default APIReferencePage
