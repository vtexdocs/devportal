import { SKUMatrix, SKUMatrixTrigger, SKUMatrixSidebar } from '@faststore/ui'
import { useMockSKUMatrix } from './useMockSKUMatrix'

const SKUMatrixBasicUsage = () => {
  const { columns, buyProps, formatter, ImageComponent } = useMockSKUMatrix()

  return (
    <SKUMatrix>
      <SKUMatrixTrigger style={{ width: '15rem' }}>
        Buy Multiple Sizes
      </SKUMatrixTrigger>

      <SKUMatrixSidebar
        title="T-Shirt Variants"
        columns={columns}
        formatter={formatter}
        buyProps={buyProps}
        ImageComponent={ImageComponent}
      />
    </SKUMatrix>
  )
}

export default SKUMatrixBasicUsage
