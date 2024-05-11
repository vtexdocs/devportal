/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
  ProductCard,
  ProductCardImage,
  ProductCardContent,
  ProductGridItem,
  ProductGrid,
} from '@faststore/ui'

import { products } from 'components/faststore-components/mocks/products'
import { useFormattedPrice } from '../utilities/usePriceFormatter'

const ProductGridUsage = () => {
  return (
    <ProductGrid>
      {products.map(({ product }, _idx) => (
        <ProductGridItem>
          <ProductCard>
            <ProductCardImage>
              <img
                data-fs-image
                src={product.image[0].url}
                alt={product.image[0].alternateName}
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
        </ProductGridItem>
      ))}
    </ProductGrid>
  )
}

export default ProductGridUsage
