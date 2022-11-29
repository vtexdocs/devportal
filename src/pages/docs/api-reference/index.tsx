import Link from 'next/link'
import Layout from 'components/category-layout'

const APIReferencePage = () => {
  return (
    <Layout>
      <h1>API Reference</h1>
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
        <li>
          <Link href="/docs/api-reference/antifraud">
            <a>antifraud API</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/api-reference/giftcard">
            <a>giftcard API</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default APIReferencePage
