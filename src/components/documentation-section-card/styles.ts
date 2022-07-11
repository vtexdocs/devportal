import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  flexDirection: 'column',
  margin: ['8px', '12px', '12px', '16px'],
  width: ['151px', '282px'],
  height: ['120px', '225px', '225px'],
  boxSizing: 'initial',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  transition: 'all 0.3s ease-out',

  '.title, .description, .quickStartedContainer': {
    transition: 'all 0.3s ease-out',
  },

  ':active, :hover': {
    backgroundColor: 'white',
    borderColor: 'muted.2',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-out',

    '.title': {
      color: '#000711',
    },

    '.description': {
      color: 'muted.0',
    },

    '.quickStartedContainer': {
      borderColor: 'muted.2',
    },

    '.title, .description, .quickStartedContainer': {
      transition: 'all 0.3s ease-out',
    },
  },
}

const infoContainer: SxStyleProp = {
  py: ['16px', '24px'],
  px: '16px',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#FEFEFE',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
}

const icon: SxStyleProp = {
  width: ['24px', '32px'],
  height: 'auto',
}

const title: SxStyleProp = {
  mt: ['8px'],
  mb: ['0px', '8px'],
  fontSize: ['16px', '22px'],
  lineHeight: ['22px', '32px'],
  fontWeight: '400',
  color: 'muted.0',
}

const description: SxStyleProp = {
  display: ['none', '-webkit-box'],
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: '400',
  color: 'muted.1',
  minHeight: '44px',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  width: '100%',
}

const quickStartedContainer: SxStyleProp = {
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #E7E9EE',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  transition: 'all 0.3s ease-out',

  '.quickStartedText': {
    transition: 'all 0.3s ease-out',
  },

  ':active, :hover': {
    backgroundColor: '#F8F7FC',
    transition: 'all 0.3s ease-out',

    '.quickStartedText': {
      color: '#000711',
      transition: 'all 0.3s ease-out',
    },
  },
}

const quickStartedText: SxStyleProp = {
  fontSize: ['12px', '16px'],
  lineHeight: ['16px', '22px'],
  fontWeight: '400',
  color: 'muted.0',
}

export default {
  cardContainer,
  description,
  icon,
  infoContainer,
  quickStartedContainer,
  quickStartedText,
  title,
}
