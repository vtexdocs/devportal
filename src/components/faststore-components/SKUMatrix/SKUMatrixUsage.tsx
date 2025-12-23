import React, { useEffect } from 'react'
import Image from 'next/image'
import {
  SKUMatrix,
  SKUMatrixTrigger,
  SKUMatrixSidebar,
  useSKUMatrix,
  UIProvider,
} from '@faststore/ui'
import { skus } from 'components/faststore-components/mocks/skus'

const ImageComponent = ({
  src,
  alt,
  width = 64,
  height = 64,
}: {
  src: string
  alt: string
  width?: number
  height?: number
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    style={{ objectFit: 'contain' }}
  />
)

function SKUMatrixContent() {
  const { setAllVariantProducts } = useSKUMatrix()

  useEffect(() => {
    setAllVariantProducts(skus)
  }, [])

  return (
    <>
      <SKUMatrixTrigger variant="secondary">Plan restock</SKUMatrixTrigger>

      <SKUMatrixSidebar
        title="Philips Monitor"
        direction="rightSide"
        size="partial"
        loading={false}
        columns={{
          name: 'Variation',
          additionalColumns: [
            { label: 'Color', value: 'color' },
            { label: 'Screen sizes', value: 'size' },
            { label: 'Safety rating', value: 'safetyrating' },
          ],
          availability: {
            label: 'Availability',
            stockDisplaySettings: 'showStockQuantity',
          },
          price: 'Price',
          quantitySelector: 'Quantity',
        }}
        buyProps={{
          'data-testid': 'bulk-add',
          'data-sku': 'safety-boot',
          'data-seller': 'seller-1',
          onClick: () => {
            /* call cart mutation */
          },
        }}
        overlayProps={{ 'aria-label': 'SKU matrix overlay' }}
        ImageComponent={ImageComponent}
      >
        {null}
      </SKUMatrixSidebar>
    </>
  )
}

export default function ProductPageSkuMatrix() {
  return (
    <UIProvider>
      <SKUMatrix data-testid="sku-matrix">
        <SKUMatrixContent />
      </SKUMatrix>
    </UIProvider>
  )
}
