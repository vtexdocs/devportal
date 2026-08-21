import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  minHeight: ['148px', '200px'],
  boxSizing: 'border-box',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',
  transition: 'all 0.3s ease-out',

  '.title, .description, .quickStartedContainer, .learnMoreText': {
    transition: 'all 0.3s ease-out',
  },

  ':active, :hover': {
    cursor: 'pointer',
    backgroundColor: 'white',
    borderColor: 'muted.2',
    boxShadow: '0px 8px 24px rgba(20, 32, 50, 0.08)',
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease-out',

    '.description': {
      color: 'muted.0',
    },

    '.quickStartedContainer': {
      borderColor: 'muted.2',
    },

    '.learnMoreText': {
      color: '#000711',
    },
  },
}

const infoContainer: SxStyleProp = {
  py: ['16px', '20px'],
  px: ['16px', '20px'],
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  textAlign: 'left',
  backgroundColor: '#FEFEFE',
  flex: 1,
}

const iconWrapper: SxStyleProp = {
  width: ['40px', '44px'],
  height: ['40px', '44px'],
  borderRadius: '50%',
  backgroundColor: '#f8f7fc',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

const icon: SxStyleProp = {
  width: ['20px', '24px'],
  height: 'auto',
}

const title: SxStyleProp = {
  mt: ['10px', '12px'],
  mb: ['4px', '8px'],
  fontSize: ['16px', '18px'],
  lineHeight: ['22px', '24px'],
  fontWeight: '400',
  color: '#142032',
}

const description: SxStyleProp = {
  display: '-webkit-box',
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  fontWeight: '400',
  color: 'muted.1',
  minHeight: ['40px', '44px'],
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  width: '100%',
}

const quickStartedContainer: SxStyleProp = {
  minHeight: ['40px', '48px'],
  justifyContent: 'flex-start',
  alignItems: 'center',
  px: ['16px', '20px'],
  borderTop: '1px solid #E7E9EE',
  backgroundColor: '#f8f7fc',
  transition: 'all 0.3s ease-out',
}

const learnMoreText: SxStyleProp = {
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  fontWeight: '400',
  color: 'muted.0',
}

export default {
  cardContainer,
  description,
  icon,
  iconWrapper,
  infoContainer,
  quickStartedContainer,
  learnMoreText,
  title,
}
