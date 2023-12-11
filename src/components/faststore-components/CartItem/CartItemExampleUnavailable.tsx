/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CartItem, CartItemImage, CartItemSummary } from '@faststore/ui'

import { product } from 'components/faststore-components/mocks/product'
import { useFormattedPrice } from '../utilities/usePriceFormatter'

const skuActiveVariants = product.isVariantOf.skuVariants.activeVariations
const activeVariations = Object.keys(skuActiveVariants).map((key) => ({
  label: key,
  option: skuActiveVariants[key as keyof typeof skuActiveVariants],
}))

export const CartItemExampleUnavailable = () => {
  return (
    <CartItem
      price={{
        value: product.offers.offers[0].price,
        listPrice: product.offers.offers[0].listPrice,
        formatter: useFormattedPrice,
      }}
      quantity={3}
      unavailable
    >
      <CartItemImage>
        <img
          data-fs-image
          src={product.image[0].url}
          alt={product.image[0].alternateName}
        />
      </CartItemImage>
      <CartItemSummary
        title={product.isVariantOf.name}
        activeVariations={activeVariations}
      />
    </CartItem>
  )
}

export default CartItemExampleUnavailable
