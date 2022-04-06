import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  my: '16px',
  padding: '8px',
  width: '427px',

  ':active, :hover': {
    borderRadius: '4px',
    backgroundColor: '#F8F7FC',
  },

  ':active .title': {
    color: '#0C1522',
  },

  ':hover .title': {
    color: '#000711',
  },
}

const titleContainer: SxStyleProp = {
  alignItems: 'center',
}

const icon: SxStyleProp = {
  width: '24px',
  height: '24px',
}

const text: SxStyleProp = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
  textTransform: 'none',
}

const title: SxStyleProp = {
  ...text,
  ml: '8px',
  color: 'muted.0',
}

const description: SxStyleProp = {
  ...text,
  ml: '32px',
  color: 'muted.1',
}

export default {
  cardContainer,
  description,
  icon,
  title,
  titleContainer,
}
