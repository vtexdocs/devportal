import { useMemo } from 'react'
import { product } from './mocks/product'
import { products } from './mocks/products'
import { useFormattedPrice } from './utilities/usePriceFormatter'
import { breadcrumbList } from './mocks/breadcrumbList'
import { Icon } from '@faststore/ui'
import { propsPriceDefinition } from './PriceDefinitionProps/PriceDefinitionProps'

export const options = [
  {
    numberOfInstallments: 1,
    monthlyPayment: 200,
    minItems: 1,
    maxItems: 4,
    total: 200,
  },
  {
    numberOfInstallments: 2,
    monthlyPayment: 100,
    minItems: 10,
    maxItems: 20,
    total: 200,
  },
  {
    numberOfInstallments: 3,
    monthlyPayment: 68,
    minItems: 1,
    maxItems: 10,
    total: 204,
  },
]

export const constants = {
  searchContent: 'Appl',
  suggestions: [{ value: 'apple airpods' }, { value: 'apple tv' }],
  searchContentAlt: 'So',
  NavigationUsage: () => null,
  openAlert: () => {
    alert('You clicked the button! Action triggered.')
  },
  suggestionsAlt: [
    {
      value: 'sony headphone',
      icon: <Icon name="Tag" onReset={undefined} onResetCapture={undefined} />,
    },
    {
      value: 'sound speaker',
      icon: (
        <Icon
          name="FadersHorizontal"
          onReset={undefined}
          onResetCapture={undefined}
        />
      ),
    },
  ],
  propsAccordionItem: [
    {
      name: 'testId',
      type: 'string',
      description:
        'ID to find this component in testing tools (e.g.: cypress, testing library, and jest).',
      default: 'fs-accordion-item',
    },
    {
      name: 'index',
      type: 'number',
      description: 'Index of the current accordion item within the accordion.',
    },
    {
      name: 'prefixId',
      type: 'string',
      description:
        "Namespace ID prefix for the current Accordion item's panel and button to avoid ID duplication when multiple instances are on the same page.",
    },
  ],
  propsSROnly: [
    {
      name: 'text',
      type: 'string',
      description: 'Defines component element type (e.g.: span).',
      required: true,
    },
    {
      name: 'as',
      type: 'ElementType',
      description: 'Defines component element type (e.g.: span, div, h1).',
      default: 'span',
    },
  ],
  propsSkuOptions: [
    {
      name: 'alt',
      type: 'string',
      description: 'Alternative text description of the image.',
      default: '',
    },
    {
      name: 'src',
      type: 'string',
      description:
        'Label to describe the option when selected. This is mandatory if you want to use the `image` variant.',
      default: '',
    },
    {
      name: 'label',
      type: 'string',
      description: 'Current value for this option.',
      default: '',
      required: true,
    },
    {
      name: 'value',
      type: 'string',
      description: 'Specifies that this option should be disabled.',
      required: true,
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Specifies that this option should be disabled.',
      default: '',
    },
    {
      name: 'hexColor',
      type: 'string',
      description:
        'Hex color code for this option. This is mandatory if you want to use the `color` variant.',
    },
  ],
  options,
  sizes: [
    {
      type: 'Width',
      value: '1.5m',
    },
    {
      type: 'Height',
      value: '1.5m',
    },
    {
      type: 'Dimensions',
      value: '7 x 3 x 9 in',
    },
  ],
  propsLink: [
    {
      name: 'testId',
      type: 'string',
      description:
        'ID to find this component in testing tools (e.g.: cypress, testing library, and jest).',
      default: 'fs-link',
    },
    {
      name: 'variant',
      type: "'default' | 'display' | 'inline'",
      description: 'Specifies the component variant.',
      default: 'default',
    },
    {
      name: 'size',
      type: "'small' | 'regular'",
      description: 'Specifies the size variant.',
      default: 'regular',
    },
    {
      name: 'inverse',
      type: 'boolean',
      description: 'Defines the use of inverted colors.',
    },
    {
      name: 'as',
      type: 'string | PolymorphicComponentPropsWithRef',
      description: 'Defines how this component should behave.',
      default: 'a',
    },
  ],
  propsRange: [
    {
      name: 'absolute',
      type: 'number',
      description: 'The absolute value of the slider.',
    },
    {
      name: 'selected',
      type: 'number',
      description: 'The selected value of the slider.',
    },
  ],
  propsRangeLabel: [
    {
      name: 'min',
      type: 'string | ReactNode',
      description: 'Label for minimum range value.',
    },
    {
      name: 'max',
      type: 'string | ReactNode',
      description: 'Label for maximum range value.',
    },
  ],
  propsToast: [
    {
      name: 'title',
      type: 'string',
      description: "Toast's title.",
    },
    {
      name: 'message',
      type: 'string',
      description: 'Message shown in Toast.',
      required: true,
    },
    {
      name: 'status',
      type: "'ERROR' | 'WARNING' | 'INFO'",
      description: "Toast's status type.",
      required: true,
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: "A React component that will be rendered as toast's icon.",
    },
  ],
  imagesUsage: [
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190902/unsplash-magic-mouse.jpg?v=637800136963870000',
      alternateName: 'Magicwhite',
    },
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190923/lena-de-fanti-nQ_j5d-klVU-unsplash.jpg?v=637867501523500000',
      alternateName: 'magicbox',
    },
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190924/anthony-choren-e7dG26YCrZU-unsplash.jpg?v=637867501835430000',
      alternateName: 'magicblackwhite',
    },
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190925/maheshkumar-painam-GZdfLeL-MDk-unsplash.jpg?v=637867502064000000',
      alternateName: 'magiccombo',
    },
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190926/math-0U9fBLGP3EY-unsplash.jpg?v=637867502325830000',
      alternateName: 'magicback',
    },
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190927/marek-levak-YPeqMN_wfw0-unsplash.jpg?v=637867502641430000',
      alternateName: 'magictable',
    },
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190928/mouse8.jpg?v=637867504048970000',
      alternateName: 'magichand',
    },
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190929/harpal-singh-KuvEVL7lXYQ-unsplash.jpg?v=637867509459130000',
      alternateName: 'magicstyle',
    },
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190930/chris-hardy-182PzOtcmWc-unsplash.jpg?v=637867509778300000',
      alternateName: 'magicscale',
    },
  ],
  imagesWithoutSelector: [
    {
      url: 'https://storeframework.vtexassets.com/arquivos/ids/190902/unsplash-magic-mouse.jpg?v=637800136963870000',
      alternateName: 'Magicwhite',
    },
  ],
  propsRadioGroup: [
    {
      name: 'name',
      type: 'string',
      description: 'Name to link children by context.',
      required: true,
    },
    {
      name: 'selectedValue',
      type: 'string | number',
      description: 'Value of checked child.',
    },
    {
      name: 'onChange',
      type: 'ChangeEventHandler<HTMLInputElement>',
      description: 'Function that is triggered when any children is checked.',
    },
  ],
  propsLinkButton: [
    {
      name: 'testId',
      type: 'string',
      description:
        'ID to find this component in testing tools (e.g.: cypress, testing library, and jest).',
      default: 'fs-link-button',
    },
    {
      name: 'variant',
      type: "'primary' | 'secondary' | 'tertiary'",
      description: 'Specifies the component color variant.',
      default: 'primary',
    },
    {
      name: 'size',
      type: "'small' | 'regular'",
      description: 'Specifies the size variant.',
      default: 'regular',
    },
    {
      name: 'inverse',
      type: 'boolean',
      description: 'Defines the use of inverted colors.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Specifies that this button should be disabled.',
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'A React component that will be rendered as an icon.',
    },
    {
      name: 'iconPosition',
      type: "'left' | 'right'",
      description: 'Specifies where the icon should be positioned.',
    },
  ],
  propsInputField: [
    {
      name: 'testId',
      type: 'string',
      description:
        'ID to find this component in testing tools (e.g.: cypress, testing library, and jest).',
      default: 'fs-input-field',
    },
    {
      name: 'id',
      type: 'string',
      description: 'ID to identify input and corresponding label.',
      required: true,
    },
    {
      name: 'label',
      type: 'string',
      description: 'The text displayed to identify input text.',
      required: true,
    },
    {
      name: 'error',
      type: 'string',
      description: 'The error message is displayed when an error occurs.',
    },
    {
      name: 'inputRef',
      type: 'MutableRefObject<HTMLInputElement | null>',
      description: "Component's ref.",
    },
    {
      name: 'disabled',
      type: 'boolean',
      description:
        'Specifies that the whole input component should be disabled.',
    },
    {
      name: 'actionable',
      type: 'boolean',
      description: 'Adds a Button to the component.',
    },
    {
      name: 'onSubmit',
      type: '() => void',
      description:
        'Callback function when button is clicked. Required for actionable input.*',
    },
    {
      name: 'onClear',
      type: '() => void',
      description:
        'Callback function when clear button is clicked. Required for actionable input.*',
    },
    {
      name: 'buttonActionText',
      type: 'string',
      description:
        'The text displayed on the Button. Suggestion: maximum 9 characters.',
      default: 'Apply',
    },
    {
      name: 'displayClearButton',
      type: 'boolean',
      description: 'Boolean that controls the clear button.',
    },
  ],
  propsImageElementData: [
    {
      name: 'url',
      type: 'string',
      description: 'Image URL.',
      default: '',
      required: true,
    },
    {
      name: 'alternateName',
      type: 'string',
      description: ' Alternative text description of the image.',
      default: '',
      required: true,
    },
  ],
  flags: [
    { icon: { icon: 'Amex' }, alt: 'Amex' },
    { icon: { icon: 'Visa' }, alt: 'Visa' },
    { icon: { icon: 'Diners' }, alt: 'Diners Club' },
    { icon: { icon: 'Mastercard' }, alt: 'Mastercard' },
    { icon: { icon: 'EloCard' }, alt: 'Elo Card' },
    { icon: { icon: 'PayPal' }, alt: 'PayPal' },
    { icon: { icon: 'Pix' }, alt: 'Pix' },
    { icon: { icon: 'Stripe' }, alt: 'Stripe' },
    { icon: { icon: 'GooglePay' }, alt: 'GooglePay' },
    { icon: { icon: 'ApplePay' }, alt: 'ApplePay' },
  ],
  propsFlag: [
    {
      name: 'icon',
      type: '{ icon: string }',
      description: 'An object with the icon name to display the flag image.',
    },
    {
      name: 'alt',
      type: 'string',
      description:
        'Description of the flag image to be also used for accessibility purposes.',
    },
  ],
  propsSearchInput: [
    {
      name: 'testId',
      type: 'string',
      description:
        'ID to find this component in testing tools (e.g.: cypress, testing library, and jest).',
      default: 'fs-search-input',
    },
    {
      name: 'visibleDropdown',
      type: 'false | true',
      description: 'The current status of the Search Dropdown.',
    },
    {
      name: 'term',
      type: 'string',
      description: 'Term to be researched.',
      required: true,
    },
    {
      name: 'isLoading',
      type: 'false | true',
      description: 'Enables a loading state.',
    },
    {
      name: 'terms',
      type: '{ value: string; }[]',
      description: 'List of Suggestion terms.',
      required: true,
    },
    {
      name: 'products',
      type: '{}[]',
      description: 'List of Suggested products.',
      required: true,
    },
    {
      name: 'onSearchSelection',
      type: '(term: string, path: string) => void',
      description: 'Callback function when a search term is selected.',
      required: false,
    },
  ],
  propsShippingSla: [
    {
      name: 'carrier',
      type: 'string',
      description: '',
      default: 'ShippingSLA carrier.',
      required: true,
    },
    {
      name: 'localizedEstimates',
      type: 'string',
      description: '',
      default: 'ShippingSLA localized shipping estimate.',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      description: '',
      default: 'ShippingSLA price.',
      required: true,
    },
  ],
  desktopList: [
    { size: 12, token: 'var(--fs-text-size-0)' },
    { size: 14, token: 'var(--fs-text-size-1)' },
    { size: 16, token: 'var(--fs-text-size-2)' },
    { size: 20, token: 'var(--fs-text-size-3)' },
    { size: 25, token: 'var(--fs-text-size-4)' },
    { size: 31, token: 'var(--fs-text-size-5)' },
    { size: 39, token: 'var(--fs-text-size-6)' },
    { size: 48, token: 'var(--fs-text-size-7)' },
    { size: 61, token: 'var(--fs-text-size-8)' },
  ],
  mobileList: [
    { size: 12, token: 'var(--fs-text-size-0)' },
    { size: 14, token: 'var(--fs-text-size-1)' },
    { size: 16, token: 'var(--fs-text-size-2)' },
    {
      size: 18,
      token: 'var(--fs-text-size-3)',
    },
    {
      size: 20,
      token: 'var(--fs-text-size-4)',
    },
    {
      size: 23,
      token: 'var(--fs-text-size-5)',
    },
    {
      size: 26,
      token: 'var(--fs-text-size-6)',
    },
    {
      size: 29,
      token: 'var(--fs-text-size-7)',
    },
    {
      size: 33,
      token: 'var(--fs-text-size-8)',
    },
  ],
  outOfStock:
    product.offers.offers[0].availability === 'https://schema.org/InStock',
  product,
  products,
  useFormattedPrice,
  useMemo,
  breadcrumbList,
  propsPriceDefinition,
}
