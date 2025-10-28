import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  mt: '16px',
  padding: '25px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  width: '100%',
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
  fontSize: ['14px', '20px'],
  fontWeight: '400',
  lineHeight: ['22px', '30px'],
  color: 'muted.0',
}

const description: SxStyleProp = {
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: '400',
  color: 'muted.1',
  overflow: 'hidden',
  width: '100%',
  height: '50%',
  display: ['none', 'none', 'block', 'block', 'block', 'block', 'block'],
}

const linkContainer: SxStyleProp = {
  mt: '8px',
  alignItems: 'center',
}

const link: SxStyleProp = {
  ...description,
  color: 'muted.1',
}

const tag: SxStyleProp = {
  width: 'max-content',
  px: '8px',
  margin: '4px',
}

const tagsContainer: SxStyleProp = {
  display: 'flex',
  flexWrap: 'wrap',
  mt: '12px',
}

export default {
  container,
  title,
  description,
  linkContainer,
  link,
  tag,
  tagsContainer,
}
