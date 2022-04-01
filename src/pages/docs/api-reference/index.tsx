import Link from 'next/link'
import { Box } from '@vtex/brand-ui'

import styles from 'styles/api-reference'

const APIReferencePage = () => {
  return (
    <Box sx={styles.container}>
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
    </Box>
  )
}

export default APIReferencePage
