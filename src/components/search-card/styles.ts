import { SxStyleProp } from '@vtex/brand-ui'
import { methodsColors } from 'components/method-category/functions'
import { MethodType } from 'utils/typings/unionTypes'

const container: SxStyleProp = {
  justifyContent: 'space-between',
  borderRadius: '9px',
  border: '1px solid #DDDDDD',
  width: '100%',
  mb: '18px',
  paddingTop: '26px',
  paddingBottom: '10px',
  paddingLeft: ['13px', '44px'],
  paddingRight: ['13px', '34px'],
  background: '#FFFFFF',
  cursor: 'pointer',
}

const containerActive = (method: MethodType | undefined): SxStyleProp => {
  const methodCategory = method ? methodsColors[method] : ''
  return {
    ...container,
    ':hover': {
      background: '#F8F7FC',
      '.searchCardTitle, .searchCardDescription': {
        color: '#142032',
      },
      '.method-category': {
        ...methodCategory,
      },
    },
  }
}

const title: SxStyleProp = {
  display: 'flex',
  alignItems: 'flex-start',
  fontSize: ['16px', '18px'],
  lineHeight: ['22px', '24px'],
  color: 'muted.0',
}

const httpMethod: SxStyleProp = {
  mr: '4px',
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

const descriptionToggle: SxStyleProp = {
  height: 'auto',
  minWidth: 'auto',
}

const descriptionExpandedItem: SxStyleProp = {
  mt: '24px',
}

const breadcrumbsContainer: SxStyleProp = {
  display: ['none', 'flex'],
  paddingLeft: '32px',
  alignItems: 'center',
}

const alignCenter: SxStyleProp = {
  alignItems: 'center',
}

const documentation: SxStyleProp = {
  ...alignCenter,
  minWidth: 'max-content',
}

const breadcrumb: SxStyleProp = {
  color: 'muted.1',
  fontSize: '16px',
  lineHeight: '18px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const lastBreadcrumb: SxStyleProp = {
  ...breadcrumb,
  margin: 'auto 0',
  display: 'block',
  overflow: 'hidden',
  maxWidth: 'max-content',
  whiteSpace: 'nowrap',
}

const breadcrumbsIn: SxStyleProp = {
  ...breadcrumb,
  mr: '4px',
  minWidth: 'fit-content',
}

const breadcrumbsArrow: SxStyleProp = {
  width: '16px',
  height: '16px',
  color: 'muted.2',
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
  containerActive,
  title,
  httpMethod,
  icon,
  description,
  descriptionToggle,
  descriptionExpandedItem,
  breadcrumbsContainer,
  alignCenter,
  documentation,
  breadcrumb,
  lastBreadcrumb,
  breadcrumbsIn,
  breadcrumbsArrow,
  actionContainer,
  actionIcon,
}
