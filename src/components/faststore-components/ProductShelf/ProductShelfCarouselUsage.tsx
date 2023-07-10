/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
  Carousel,
  ProductCard,
  ProductCardImage,
  ProductCardContent,
  ProductShelf,
} from '@faststore/ui'

import { products } from 'components/faststore-components/mocks/products'
import { useFormattedPrice } from '../utilities/usePriceFormatter'

const ProductShelfCarouselUsage = () => {
  return (
    <ProductShelf>
      <Carousel itemsPerPage={3} variant="scroll" infiniteMode={false}>
        {products.map(({ product }) => (
          <ProductCard bordered>
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
        ))}
      </Carousel>
    </ProductShelf>
  )
}

export default ProductShelfCarouselUsage
