import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  pt: '5rem',
  width: '100%',
  backgroundColor: 'white',
}

const mainContainer: SxStyleProp = {
  width: '100%',
}

const contentContainer: SxStyleProp = {
  mx: 'auto',
  mt: ['16px', '32px'],
  mb: ['32px', '64px'],
  px: ['18px', 'initial'],
  maxWidth: ['324px', 'initial'],
  width: ['auto', '544px', '544px', '544px', '720px'],
  boxSizing: 'initial',
}

const subtitle: SxStyleProp = {
  mb: ['16px', '8px'],
  textAlign: ['center', 'initial'],
  fontSize: ['16px', '18px'],
  lineHeight: ['22px', '24px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const cardsContainer: SxStyleProp = {
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}

const resourcesSectionContainer: SxStyleProp = {
  mt: '24px',
}

const resourcesSectionTitle: SxStyleProp = {
  fontSize: ['18px', '22px'],
  lineHeight: ['30px', '32px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const resourceContainer: SxStyleProp = {
  mt: '24px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
}

const resourceTitle: SxStyleProp = {
  color: '#E31C58',
}

const resourceDescription: SxStyleProp = {
  mt: '8px',
  color: '#4A4A4A',
}

export default {
  container,
  mainContainer,
  contentContainer,
  subtitle,
  cardsContainer,
  resourcesSectionContainer,
  resourcesSectionTitle,
  resourceContainer,
  resourceTitle,
  resourceDescription,
}
