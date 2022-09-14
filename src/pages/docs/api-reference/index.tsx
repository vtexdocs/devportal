import Link from 'next/link'

const APIReferencePage = () => {
  return (
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
  )
}

export default APIReferencePage
