import { SKUMatrix, SKUMatrixTrigger, SKUMatrixSidebar } from '@faststore/ui'
import { useMockSKUMatrix, MockSKUMatrixInitializer } from './useMockSKUMatrix'

const SKUMatrixStockQuantity = () => {
  const { buyProps, formatter, ImageComponent } = useMockSKUMatrix()

  const columns = {
    name: 'Product',
    additionalColumns: [{ label: 'Size', value: 'size' }],
    availability: {
      label: 'In Stock',
      stockDisplaySettings: 'showStockQuantity' as const,
    },
    price: 'Price',
    quantitySelector: 'Order Qty',
  }

  return (
    <SKUMatrix>
      <MockSKUMatrixInitializer />
      <SKUMatrixTrigger style={{ width: '15rem' }}>
        View All Sizes
      </SKUMatrixTrigger>

      <SKUMatrixSidebar
        title="Shoes - All Sizes"
        columns={columns}
        formatter={formatter}
        buyProps={buyProps}
        ImageComponent={ImageComponent}
      />
    </SKUMatrix>
  )
}

export default SKUMatrixStockQuantity
