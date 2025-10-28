import { SKUMatrix, SKUMatrixTrigger, SKUMatrixSidebar } from '@faststore/ui'
import { useMockSKUMatrix, MockSKUMatrixInitializer } from './useMockSKUMatrix'

const SKUMatrixMultiColumn = () => {
  const { buyProps, formatter, ImageComponent } = useMockSKUMatrix()

  const columns = {
    name: 'Product',
    additionalColumns: [
      { label: 'Size', value: 'size' },
      { label: 'Color', value: 'color' },
      { label: 'Material', value: 'material' },
    ],
    availability: {
      label: 'Availability',
      stockDisplaySettings: 'showAvailability' as const,
    },
    price: 'Unit Price',
    quantitySelector: 'Quantity',
  }

  return (
    <SKUMatrix>
      <MockSKUMatrixInitializer />
      <SKUMatrixTrigger variant="primary" style={{ width: '15rem' }}>
        Order Multiple Variants
      </SKUMatrixTrigger>

      <SKUMatrixSidebar
        title="Premium Polo Shirts - Select Variants"
        columns={columns}
        formatter={formatter}
        buyProps={buyProps}
        ImageComponent={ImageComponent}
      />
    </SKUMatrix>
  )
}

export default SKUMatrixMultiColumn
