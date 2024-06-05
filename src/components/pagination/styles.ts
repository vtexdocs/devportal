import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  '.page-item': {
    borderRadius: '4px',
    maxHeight: '24px',
    display: 'flex',
    ':hover': {
      transition: 'all 0.3s ease-out',
      boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    },
  },
  '.page-link': {
    cursor: 'pointer',
    display: 'block',
    minWidth: '24px',
    color: '#4A596B',
    textAlign: 'center',
    ':active': {
      transition: 'all 0.3s ease-out',
      color: '#F71963',
    },
  },
  '.pagination': {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    fontSize: '18px',
    lineHeight: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    flexWrap: 'wrap',
    mx: '24px',
  },
  '.active': {
    backgroundColor: '#FFE0EF',
    '.page-link': {
      color: '#F71963',
    },
  },
}

export default {
  container,
}
