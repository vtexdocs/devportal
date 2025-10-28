import { SKUMatrix, SKUMatrixTrigger, SKUMatrixSidebar } from '@faststore/ui'
import { useMockSKUMatrix, MockSKUMatrixInitializer } from './useMockSKUMatrix'

const SKUMatrixBasicUsage = () => {
  const { columns, buyProps, formatter, ImageComponent } = useMockSKUMatrix()

  return (
    <SKUMatrix>
      <MockSKUMatrixInitializer />
      <SKUMatrixTrigger style={{ width: '15rem' }}>
        Buy Multiple Sizes
      </SKUMatrixTrigger>

      <SKUMatrixSidebar
        title="T-Shirt Variants"
        columns={columns}
        formatter={formatter}
        buyProps={buyProps}
        ImageComponent={ImageComponent}
        direction="rightSide"
        size="partial"
      >
        {/* Optional additional content can be added here */}
      </SKUMatrixSidebar>
    </SKUMatrix>
  )
}

export default SKUMatrixBasicUsage
