import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  mt: '16px',
  padding: '16px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  width: ['100%', '49%'],
  transition: 'all 0.3s ease-out',
  ':hover': {
    cursor: 'pointer',
  },
  ':active, :hover': {
    borderColor: 'muted.2',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3 ease-out',

    '.title, .description': {
      transition: 'all 0.3s ease-out',
      color: '#000711',
    },

    '.link, .caret': {
      transition: 'all 0.3s ease-out',
      color: 'muted.0',
    },
  },
}

const title: SxStyleProp = {
  mb: '8px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: ['22px', '18px'],
  color: 'muted.0',
}

const description: SxStyleProp = {
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  color: 'muted.0',
}

const linkContainer: SxStyleProp = {
  mt: '8px',
  alignItems: 'center',
}

const link: SxStyleProp = {
  ...description,
  color: 'muted.1',
}

export default { container, title, description, linkContainer, link }
