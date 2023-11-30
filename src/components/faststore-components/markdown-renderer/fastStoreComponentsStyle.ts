import { SxStyleProp } from '@vtex/brand-ui'

const tabItemContainer: SxStyleProp = {
  borderBottom: '1px solid #E7E9EE',
}

const tabItem: SxStyleProp = {
  mr: '8px',
  padding: '8px',
  color: '#4A596B',
  cursor: 'pointer',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  transition: '0.15s ease-in',
  '&:hover': {
    transition: '0.15s ease-in',
    color: '#142032',
  },
}

const tabItemActive: SxStyleProp = {
  ...tabItem,
  color: '#E31C58',
  borderTop: '1px solid #E31C58',
  borderInline: '1px solid #E31C58',
  '&:hover': {
    color: '#E31C58',
  },
}

export default {
  tabItemContainer,
  tabItem,
  tabItemActive,
}
