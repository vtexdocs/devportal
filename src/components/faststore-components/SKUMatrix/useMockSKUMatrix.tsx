import { useEffect } from 'react'
import { useSKUMatrix } from '@faststore/ui'
import Image from 'next/image'
import { mockVariantProducts } from './mockSKUMatrixData'

interface ImageComponentProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export const useMockSKUMatrix = () => {
  const { setAllVariantProducts, isOpen } = useSKUMatrix()

  useEffect(() => {
    if (isOpen) {
      setAllVariantProducts(mockVariantProducts)
    }
  }, [isOpen, setAllVariantProducts])

  const columns = {
    name: 'Product',
    additionalColumns: [{ label: 'Size', value: 'size' }],
    availability: {
      label: 'Stock',
      stockDisplaySettings: 'showAvailability' as const,
    },
    price: 'Price',
    quantitySelector: 'Qty',
  }

  const formatter = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price)
  }

  const handleAddToCart = () => {
    console.log('Items added to cart')
  }

  const buyProps = {
    'data-testid': 'sku-matrix-buy',
    'data-sku': 'product-123',
    'data-seller': 'seller-1',
    onClick: handleAddToCart,
  }

  const ImageComponent = ({ src, alt }: ImageComponentProps) => (
    <Image src={src} alt={alt} width={48} height={48} />
  )

  return {
    columns,
    formatter,
    buyProps,
    ImageComponent,
  }
}
