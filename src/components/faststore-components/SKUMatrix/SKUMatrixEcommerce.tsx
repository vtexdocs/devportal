import { useState } from 'react'
import { SKUMatrix, SKUMatrixTrigger, SKUMatrixSidebar } from '@faststore/ui'
import Image from 'next/image'
import { useMockSKUMatrix } from './useMockSKUMatrix'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

const SKUMatrixEcommerce = () => {
  const [loading, setLoading] = useState(false)
  const { formatter } = useMockSKUMatrix()

  const columns = {
    name: 'Variant',
    additionalColumns: [
      { label: 'Size', value: 'size' },
      { label: 'Color', value: 'color' },
    ],
    availability: {
      label: 'Availability',
      stockDisplaySettings: 'showAvailability' as const,
    },
    price: 'Price',
    quantitySelector: 'Qty',
  }

  const handleAddToCart = async () => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Items successfully added to cart!')
    } catch (error) {
      console.error('Failed to add items:', error)
    } finally {
      setLoading(false)
    }
  }

  const buyProps = {
    'data-testid': 'sku-matrix-add-to-cart',
    'data-sku': 't-shirt-classic-cotton',
    'data-seller': 'default-seller',
    onClick: handleAddToCart,
  }

  const CustomImage = ({ src, alt }: ImageProps) => (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      style={{
        borderRadius: '8px',
        objectFit: 'cover',
        border: '1px solid #e0e0e0',
      }}
    />
  )

  return (
    <div style={{ padding: '20px' }}>
      <SKUMatrix>
        <SKUMatrixTrigger variant="secondary" style={{ width: '18rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v10h12V5H4zm2 2h8v2H6V7zm0 4h8v2H6v-2z" />
            </svg>
            Buy Multiple Sizes & Colors
          </span>
        </SKUMatrixTrigger>

        <SKUMatrixSidebar
          title="Classic Cotton T-Shirt - Select Variants"
          columns={columns}
          loading={loading}
          formatter={formatter}
          direction="rightSide"
          size="partial"
          buyProps={buyProps}
          ImageComponent={CustomImage}
        >
          <div
            style={{
              padding: '16px 24px',
              backgroundColor: '#f5f5f5',
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              Select the quantities you need for each variant. Available in
              multiple sizes and colors.
            </p>
          </div>
        </SKUMatrixSidebar>
      </SKUMatrix>
    </div>
  )
}

export default SKUMatrixEcommerce
