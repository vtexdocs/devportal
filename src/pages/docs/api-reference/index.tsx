import Link from 'next/link'

const APIReferencePage = () => {
  return (
    <ul>
      <li>
        <Link href="/docs/api-reference/catalog">Catalog API</Link>
      </li>
      <li>
        <Link href="/docs/api-reference/checkout">Checkout API</Link>
      </li>
      <li>
        <Link href="/docs/api-reference/antifraud">antifraud API</Link>
      </li>
      <li>
        <Link href="/docs/api-reference/giftcard">giftcard API</Link>
      </li>
    </ul>
  )
}

export default APIReferencePage
