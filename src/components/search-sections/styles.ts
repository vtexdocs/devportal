import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  height: '100%',
  width: '242px',
  border: '1px solid #E7E9EE',
  borderRadius: '4px',
  mr: '32px',
  mt: '96px',
}

const notesSection: SxStyleProp = {
  px: '8px',
  paddingTop: '8px',
}

const docsSection: SxStyleProp = {
  ...notesSection,
  borderBottom: '1px solid #E7E9EE',
}

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

const allResults: SxStyleProp = {
  ...sectionTitle,
  ml: '24px',
  fontWeight: 'bold',
  color: '#0C1522',
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
  container,
  notesSection,
  docsSection,
  allResults,
  sectionContainer,
  sectionIconTitleBox,
  sectionIcon,
  sectionTitle,
  sectionCount,
}
