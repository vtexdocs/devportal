import Link from 'next/link'
import Layout from 'components/category-layout'

const APIReferencePage = () => {
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

export default APIReferencePage
