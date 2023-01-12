import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  my: ['16px', '16px', '16px', '16px', '16px', '16px', '24px'],
  padding: '8px',
  cursor: 'pointer',
  ':active, :hover': {
    borderRadius: '4px',
    backgroundColor: '#F8F7FC',

    '.description': {
      color: 'muted.0',
    },
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

const title: SxStyleProp = {
  ml: '8px',
  color: 'muted.0',
}

const description: SxStyleProp = {
  ml: '32px',
  fontSize: '16px',
  lineHeight: '18px',
  color: 'muted.1',
}

export default {
  cardContainer,
  description,
  title,
  titleContainer,
}
