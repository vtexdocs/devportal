import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  width: '100%',
  padding: '16px',
  mt: '8px',
  background: '#FFFFFF',
  cursor: 'pointer',
  borderRadius: '4px',
  ':hover': {
    background: '#F8F7FC',
    '.searchCardTitle, .searchCardDescription': {
      color: '#142032',
    },
  },
}

const title: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  lineHeight: '24px',
  color: 'muted.0',
}

const httpMethod: SxStyleProp = {
  mr: '4px',
  fontSize: '12px',
  lineHeight: '16px',
}

const icon: SxStyleProp = {
  width: '24px',
  height: '24px',
  mr: '8px',
  path: {
    stroke: '#A1A8B3',
  },
}

const description: SxStyleProp = {
  fontSize: '16px',
  lineHeight: '22px',
  paddingLeft: '32px',
  color: 'muted.0',
  mt: '4px',
  mb: '8px',
}

const filterContainer: SxStyleProp = {
  paddingLeft: '32px',
}

const filter: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  lineHeight: '18px',
  color: 'muted.1',
}

const filterIn: SxStyleProp = {
  ...filter,
  mr: '4px',
}

const filterArrow: SxStyleProp = {
  width: '16px',
  height: '16px',
}

const actionContainer: SxStyleProp = {
  paddingLeft: '32px',
  alignItems: 'center',
}

const actionIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  height: '16px',
  mr: '8px',
}

export default {
  container,
  title,
  httpMethod,
  icon,
  description,
  filterContainer,
  filter,
  filterIn,
  filterArrow,
  actionContainer,
  actionIcon,
}
