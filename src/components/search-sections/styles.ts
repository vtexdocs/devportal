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

const allResultsContainer: SxStyleProp = {
  justifyContent: 'space-between',
  padding: '8px',
  mb: '8px',
  cursor: 'pointer',
  ':active, :hover': {
    backgroundColor: '#F8F7FC',
    '.search-section-title': {
      color: '#000711',
    },
    '.search-section-count': {
      background: '#E7E9EE',
    },
  },
}

const allResultsText: SxStyleProp = {
  fontSize: '12px',
  lineHeight: '16px',
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
  allResultsText,
  allResultsContainer,
  sectionCount,
}
