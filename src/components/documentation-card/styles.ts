import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  width: '284px',
  height: '227px',
  boxSizing: 'initial',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  margin: '16px',

  ':active, :hover': {
    backgroundColor: 'white',
    borderColor: '#CCCED8',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',

    '.title': {
      color: '#000711',
    },

    '.description': {
      color: '#4A596B',
    },

    '.quickStartedContainer': {
      borderColor: '#CCCED8',
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
  color: '#4A596B',
}

const description: SxStyleProp = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
  color: '#A1A8B3',
}

const quickStartedContainer: SxStyleProp = {
  borderTop: '1px solid #E7E9EE',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',

  ':active, :hover': {
    backgroundColor: '#F8F7FC',
  },
}

const quickStartedText: SxStyleProp = {
  mx: 'auto',
  my: '16px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
  color: '#4A596B',
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
