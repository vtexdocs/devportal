# SKU Matrix Components for Documentation

This folder contains all the example components for the SKU Matrix documentation.

## Files Created

### Example Components
1. **SKUMatrixBasicUsage.tsx** - Basic implementation with single specification column
2. **SKUMatrixMultiColumn.tsx** - Example with multiple specification columns (Size, Color, Material)
3. **SKUMatrixStockQuantity.tsx** - Example showing exact stock quantities
4. **SKUMatrixLoading.tsx** - Example with loading state and skeleton loaders
5. **SKUMatrixEcommerce.tsx** - Real-world e-commerce implementation
6. **SKUMatrixWholesale.tsx** - B2B/Wholesale example with bulk ordering

### Supporting Files
- **useMockSKUMatrix.tsx** - Custom hook providing mock data and shared logic
- **mockSKUMatrixData.ts** - Mock variant product data for examples

## How These Components Work

All example components are wrapped in `UIProvider` in the documentation to provide:
- Modal state management
- Toast notifications
- Fade effects

The `useMockSKUMatrix` hook:
- Loads mock variant products when the sidebar opens
- Provides common configurations (columns, formatter, buyProps, ImageComponent)
- Can be customized for each example

## Mock Data Structure

The mock data in `mockSKUMatrixData.ts` includes 5 t-shirt variants:
- Small, Medium, Large, X-Large (all in stock)
- XX-Large (out of stock)

Each variant includes:
- Product information (id, name, image)
- Inventory and availability
- Pricing (with and without taxes)
- Specifications (size, color, material, packsize)
- Offers data structure

## Usage in Documentation

In the `sku-matrix.mdx` documentation file, examples are rendered as:

```mdx
<OverviewSection>
  <UIProvider>
    <SKUMatrixBasicUsage />
  </UIProvider>
</OverviewSection>
```

## Exports

All components are exported in the main `index.ts` file:
- SKUMatrixBasicUsage
- SKUMatrixMultiColumn
- SKUMatrixStockQuantity
- SKUMatrixLoading
- SKUMatrixEcommerce
- SKUMatrixWholesale

## Testing the Components

To test these components locally:
1. Run the devportal development server
2. Navigate to the SKU Matrix documentation page
3. Click the trigger buttons to open the sidebars
4. Interact with the quantity selectors and add to cart buttons

## Customization

To create new examples:
1. Create a new component file in this folder
2. Import and use the `useMockSKUMatrix` hook
3. Customize the `columns` configuration as needed
4. Export the component in `index.ts`
5. Add the component to the documentation file

## Notes

- The CssSyntaxError linter warnings are false positives (CSS linter checking TypeScript files)
- All components use the same mock data for consistency
- Images use VTEX placeholder images from the existing mock data
- Price formatting uses USD with 2 decimal places

