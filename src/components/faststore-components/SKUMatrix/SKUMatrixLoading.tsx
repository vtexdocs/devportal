import { useState, useEffect } from 'react'
import { SKUMatrix, SKUMatrixTrigger, SKUMatrixSidebar } from '@faststore/ui'
import { useMockSKUMatrix } from './useMockSKUMatrix'

const SKUMatrixLoading = () => {
  const [loading, setLoading] = useState(true)
  const { columns, buyProps, formatter, ImageComponent } = useMockSKUMatrix()

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <SKUMatrix>
      <SKUMatrixTrigger style={{ width: '15rem' }}>
        Select Variants
      </SKUMatrixTrigger>

      <SKUMatrixSidebar
        title="Product Variants"
        columns={columns}
        loading={loading}
        formatter={formatter}
        buyProps={buyProps}
        ImageComponent={ImageComponent}
      />
    </SKUMatrix>
  )
}

export default SKUMatrixLoading
