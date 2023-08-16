import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  mt: '16px',
  padding: '16px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  width: ['100%', '49%'],
  transition: 'all 0.3s ease-out',
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
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px',
  color: 'muted.0',
}

const linkContainer: SxStyleProp = {
  mt: '8px',
  alignItems: 'center',
}

const link: SxStyleProp = {
  ...description,
  color: 'muted.1',
  ':hover': {
    color: '#e31d58 !important',
  },
}

const builderList: SxStyleProp = {
  display: 'flex',
  gap: '8px',
  mt: '10px',
  flexWrap: 'wrap',
}

const builderListItem: SxStyleProp = {
  ...description,
  bg: '#e7e9ed',
  px: '6px',
  borderRadius: '4px',
  display: 'inline',
}

const flexLinks: SxStyleProp = {
  ...builderList,
  justifyContent: 'space-between',
}

export default {
  container,
  title,
  description,
  linkContainer,
  link,
  builderList,
  builderListItem,
  flexLinks,
}
