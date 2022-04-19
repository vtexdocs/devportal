import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: SxStyleProp = {
  justifyContent: 'space-between',
  padding: '8px',
  mb: '8px',
}

const sectionIconTitleBox: SxStyleProp = {
  alignItems: 'center',
}

const sectionIcon: SxStyleProp = {
  width: '16px',
  height: '16px',
  minWidth: '16px',
  minHeight: '16px',
  mr: '8px',
}

const sectionTitle: SxStyleProp = {
  fontSize: '12px',
  lineHeight: '16px',
}

const sectionCount: SxStyleProp = {
  background: '#F8F7FC',
  borderRadius: '24px',
  width: 'auto',
  textAlign: 'center',
  px: '8px',
  fontSize: '12px',
  lineHeight: '16px',
}

export default {
  sectionContainer,
  sectionIconTitleBox,
  sectionIcon,
  sectionTitle,
  sectionCount,
}
