import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  right: '20px',
  position: 'fixed',
  alignItems: 'flex-end',
}

const contentContainer: SxStyleProp = {
  mr: '8px',
  py: '16px',
  width: '360px',
  borderRadius: '8px',
  backgroundColor: 'white',
  border: '1px solid #CCCED8',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
}

const contributorsHeaderContainer: SxStyleProp = {
  px: '16px',
  mb: '16px',
  justifyContent: 'space-between',
}

const contributorsTitleContainer: SxStyleProp = {
  alignItems: 'center',
}

const contributorsTitle: SxStyleProp = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
  color: '#0C1522',
}

const contributorsCount: SxStyleProp = {
  ml: '4px',
  px: '8px',
  width: '30px',
  height: '16px',
  borderRadius: '24px',
  backgroundColor: 'muted.4',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  textAlign: 'center',
  color: '#4A4A4A',
}

const contributorsCaret: SxStyleProp = {
  cursor: 'pointer',
  borderRadius: '16px',
  backgroundColor: 'muted.4',
}

const photoGrid: SxStyleProp = {
  padding: '16px',
  gap: '16px 24px',
  backgroundColor: 'muted.4',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  borderTop: '1px solid #E7E9EE',
}

const photo: SxStyleProp = {
  width: '44px',
  height: '44px',
  borderRadius: '100%',
  backgroundColor: 'muted.2',
}

const onThisPageTitle: SxStyleProp = {
  px: '16px',
  pt: '16px',
  mb: '16px',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  color: '#4A4A4A',
  borderTop: '1px solid #E7E9EE',
}

const tableOfContents: SxStyleProp = {
  ml: '16px',
}

const buttonContainer: SxStyleProp = {
  cursor: 'pointer',
  alignItems: 'center',
  backgroundColor: 'muted.4',
  border: '1px solid #CCCED8',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
}

const iconContainer: SxStyleProp = {
  width: '32px',
  height: '32px',
  padding: '8px',
  boxSizing: 'initial',
  borderRadius: '8px',
  backgroundColor: 'white',
  borderRight: '1px solid #CCCED8',
}

const titlesContainer: SxStyleProp = {
  ml: '2px',
  padding: '8px',
}

const title: SxStyleProp = {
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  color: 'black',
}

export default {
  container,
  contentContainer,
  contributorsHeaderContainer,
  contributorsTitleContainer,
  contributorsTitle,
  contributorsCount,
  contributorsCaret,
  photoGrid,
  photo,
  onThisPageTitle,
  tableOfContents,
  buttonContainer,
  iconContainer,
  titlesContainer,
  title,
}
