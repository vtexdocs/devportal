/* eslint-disable @next/next/no-img-element */
import {
  ProductCard,
  ProductCardContent,
  ProductCardImage,
} from '@faststore/ui'
import { product } from '../mocks/product'
import { useFormattedPrice } from '../utilities/usePriceFormatter'

const TilesTemplate = () => {
  return (
    <ul
      role="list"
      data-fs-tiles="true"
      data-fs-tiles-variant="expanded-first"
      data-fs-content="tiles"
      data-testid="store-tiles"
    >
      <li data-fs-tile="true">
        <ProductCard variant="wide">
          <ProductCardImage aspectRatio={1.8}>
            <img
              data-fs-image
              src={product.image[1].url}
              alt={product.image[1].alternateName}
            />
          </ProductCardImage>
          <ProductCardContent
            title={product.isVariantOf.name}
            price={{
              value: product.offers.offers[0].price,
              listPrice: product.offers.offers[0].listPrice,
              formatter: useFormattedPrice,
            }}
          />
        </ProductCard>
      </li>
      <li data-fs-tile="true">
        <ProductCard variant="wide">
          <ProductCardImage aspectRatio={1.8}>
            <img
              data-fs-image
              src={product.image[1].url}
              alt={product.image[1].alternateName}
            />
          </ProductCardImage>
          <ProductCardContent
            title={product.isVariantOf.name}
            price={{
              value: product.offers.offers[0].price,
              listPrice: product.offers.offers[0].listPrice,
              formatter: useFormattedPrice,
            }}
          />
        </ProductCard>
      </li>
      <li data-fs-tile="true">
        <ProductCard variant="wide">
          <ProductCardImage aspectRatio={1.8}>
            <img
              data-fs-image
              src={product.image[1].url}
              alt={product.image[1].alternateName}
            />
          </ProductCardImage>
          <ProductCardContent
            title={product.isVariantOf.name}
            price={{
              value: product.offers.offers[0].price,
              listPrice: product.offers.offers[0].listPrice,
              formatter: useFormattedPrice,
            }}
          />
        </ProductCard>
      </li>
    </ul>
  )
}

export default TilesTemplate
