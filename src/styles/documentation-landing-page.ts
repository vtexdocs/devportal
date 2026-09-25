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
  px: ['16px', 0],
  maxWidth: '100%',
  minWidth: 0,
  width: ['100%', '544px', '544px', '544px', '720px', '720px', '1400px'],
  boxSizing: 'border-box',
  color: '#4A4A4A',
  lineHeight: ['22px', '24px'],
  fontSize: ['16px', '18px'],
  overflowWrap: 'break-word',
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
  display: 'grid !important',
  gridTemplateColumns: [
    '1fr',
    'repeat(2, minmax(0, 1fr))',
    'repeat(2, minmax(0, 1fr))',
    'repeat(2, minmax(0, 1fr))',
    'repeat(2, minmax(0, 1fr))',
    'repeat(2, minmax(0, 1fr))',
    'repeat(3, minmax(0, 1fr))',
  ],
  gap: ['12px', '16px'],
  width: '100%',
  minWidth: 0,
  alignItems: 'stretch',
}

const resourcesSectionContainer: SxStyleProp = {
  mt: '24px',
}

const resourceContainer: SxStyleProp = {
  mt: '24px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
  minWidth: 0,
  overflowWrap: 'break-word',
}

const contentTitle: SxStyleProp = {
  paddingBottom: '6px',
  marginTop: ['24px', '40px'],
  fontSize: ['18px', '22px'],
  lineHeight: ['26px', '32px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const contentDescription: SxStyleProp = {
  marginBottom: '30px',
  fontSize: ['16px', '16px'],
  lineHeight: ['22px', '22px'],
  fontWeight: '400',
  color: '#4A596B',
}

const resourceTitle: SxStyleProp = {
  color: '#E31C58',
}

const resourceDescription: SxStyleProp = {
  mt: '8px',
  color: '#4A4A4A',
}

const boxTip: SxStyleProp = {
  backgroundColor: '#F8F7FC',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  padding: ['16px', '24px'],
  fontWeight: '400',
  fontSize: '16px',
  marginY: '20px',
  cursor: 'pointer',
  color: 'muted.0',
  display: 'block',
  minWidth: 0,
  ':active, :hover': {
    borderColor: 'muted.2',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3 ease-out',

    '.description': {
      transition: 'all 0.3s ease-out',
    },

    '.link, .caret': {
      transition: 'all 0.3s ease-out',
    },
  },
}

const boxTitle: SxStyleProp = {
  fontWeight: '600',
  fontSize: ['16px', '18px'],
  marginBottom: '5px',
  display: 'block',
  overflowWrap: 'anywhere',
}

const linkContainer: SxStyleProp = {
  mt: '8px',
  alignItems: 'center',
}

const description: SxStyleProp = {
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '16px',
  color: 'muted.0',
}

const link: SxStyleProp = {
  ...description,
  color: 'muted.1',
}

const divider: () => SxStyleProp = () => ({
  marginTop: '40px',
  borderBottom: '1px solid #E7E9EE',
})

const seeMoreLink: SxStyleProp = {
  display: 'flex',
  justifyContent: ['flex-start', 'flex-end'],
  alignItems: 'center',
  marginY: ['12px', '20px'],
  fontSize: '16px',
  minHeight: '44px',
}

const grid: SxStyleProp = {
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '3rem',
  marginY: '20px',
}

const gridElement: SxStyleProp = {
  maxWidth: ['100%', '45%', '45%', '45%', '45%', '30%'],
}

const gridTitle: SxStyleProp = {
  marginBottom: '15px',
  fontSize: ['24px', '24px'],
  lineHeight: ['32px', '32px'],
  fontWeight: '400',
}

const gridContent: SxStyleProp = {
  fontSize: ['16px', '16px'],
  lineHeight: ['22px', '22px'],
  fontWeight: '400',
}

const noResultsText: SxStyleProp = {
  py: '32px',
  textAlign: 'center',
  fontSize: '16px',
}

export default {
  container,
  mainContainer,
  contentContainer,
  subtitle,
  cardsContainer,
  resourcesSectionContainer,
  resourceContainer,
  resourceTitle,
  resourceDescription,
  contentTitle,
  contentDescription,
  boxTip,
  boxTitle,
  linkContainer,
  link,
  divider,
  seeMoreLink,
  grid,
  gridElement,
  gridTitle,
  gridContent,
  noResultsText,
}
