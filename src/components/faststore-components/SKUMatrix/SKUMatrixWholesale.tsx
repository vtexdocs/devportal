import { SKUMatrix, SKUMatrixTrigger, SKUMatrixSidebar } from '@faststore/ui'
import { useMockSKUMatrix, MockSKUMatrixInitializer } from './useMockSKUMatrix'

const SKUMatrixWholesale = () => {
  const { ImageComponent } = useMockSKUMatrix()

  const columns = {
    name: 'SKU',
    additionalColumns: [
      { label: 'Size', value: 'size' },
      { label: 'Pack Size', value: 'packSize' },
    ],
    availability: {
      label: 'Stock Units',
      stockDisplaySettings: 'showStockQuantity' as const,
    },
    price: 'Unit Price',
    quantitySelector: 'Units',
  }

  const handleWholesaleOrder = () => {
    console.log('Wholesale order submitted')
  }

  const formatWholesalePrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
    return `${formattedPrice}/unit`
  }

  const buyProps = {
    'data-testid': 'wholesale-order-submit',
    'data-sku': 'office-paper-bulk',
    'data-seller': 'wholesale-supplier',
    onClick: handleWholesaleOrder,
  }

  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Wholesale Office Supplies</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
          Order multiple variants at wholesale prices
        </p>
      </div>

      <SKUMatrix>
        <MockSKUMatrixInitializer />
        <SKUMatrixTrigger variant="primary" style={{ width: '100%' }}>
          Open Bulk Order Form
        </SKUMatrixTrigger>

        <SKUMatrixSidebar
          title="Bulk Order - Office Paper"
          columns={columns}
          formatter={formatWholesalePrice}
          direction="rightSide"
          size="full"
          buyProps={buyProps}
          ImageComponent={ImageComponent}
        >
          <div
            style={{
              padding: '20px 24px',
              backgroundColor: '#e3f2fd',
              borderBottom: '1px solid #90caf9',
            }}
          >
            <h4
              style={{
                margin: '0 0 8px 0',
                fontSize: '16px',
                color: '#1565c0',
              }}
            >
              Wholesale Pricing Active
            </h4>
            <p style={{ margin: 0, fontSize: '14px', color: '#424242' }}>
              Minimum order: 10 units per SKU. Volume discounts applied
              automatically.
            </p>
          </div>
        </SKUMatrixSidebar>
      </SKUMatrix>
    </div>
  )
}

export default SKUMatrixWholesale
