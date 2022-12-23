import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  my: ['16px', '16px', '16px', '16px', '16px', '16px', '24px'],
  padding: '8px',

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

const icon: SxStyleProp = {
  width: ['24px', '24px', '24px', '24px', '24px', '24px', '36px'],
  height: ['24px', '24px', '24px', '24px', '24px', '24px', '36px'],
}

const text: SxStyleProp = {
  fontSize: ['16px', '16px', '16px', '16px', '16px', '16px', '24px'],
  lineHeight: ['22px', '22px', '22px', '22px', '22px', '22px', '28px'],
  fontWeight: '400',
  textTransform: 'none',
}

const title: SxStyleProp = {
  ...text,
  ml: ['8px', '8px', '8px', '8px', '8px', '8px', '12px'],
  color: 'muted.0',
}

const description: SxStyleProp = {
  ...text,
  ml: ['32px', '32px', '32px', '32px', '32px', '32px', '48px'],
  color: 'muted.1',
}

export default {
  cardContainer,
  description,
  icon,
  title,
  titleContainer,
}
