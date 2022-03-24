import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  margin: '16px',
  width: '284px',
  height: '227px',
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
  padding: '24px',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#FEFEFE',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
}

const icon: SxStyleProp = {
  width: '32px',
  height: 'auto',
}

const title: SxStyleProp = {
  my: '8px',
  fontSize: '22px',
  fontWeight: '400',
  lineHeight: '32px',
  color: 'muted.0',
}

const description: SxStyleProp = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
  color: 'muted.1',
}

const quickStartedContainer: SxStyleProp = {
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
  mx: 'auto',
  my: '16px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
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
