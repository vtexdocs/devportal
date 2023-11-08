import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontSize: '14px',
  mt: '16px',
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

const innerContent: SxStyleProp = {
  padding: '16px',
}

const category: SxStyleProp = {
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '12px',
  letterSpacing: '0.8px',
  color: '#a1a8b3',
  mb: '10px',
}

const title: SxStyleProp = {
  mb: '6px',
  fontSize: '16px',
  fontWeight: 'bold',
  lineHeight: '22px',
  color: 'muted.0',
}

const description: SxStyleProp = {
  fontSize: '1.05em',
  fontWeight: '400',
  color: 'muted.0',
  maxHeight: '82px',
}

const ctaLink: SxStyleProp = {
  padding: '12px 0',
  maxHeight: '56px',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #E7E9EE',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  transition: 'all 0.3s ease-out',
  '.ctaLinkText': {
    transition: 'all 0.3s ease-out',
  },
  ':active, :hover': {
    backgroundColor: '#F8F7FC',
    transition: 'all 0.3s ease-out',
    '.ctaLinkText': {
      color: '#000711',
      transition: 'all 0.3s ease-out',
    },
  },
}

const ctaLinkText: SxStyleProp = {
  fontSize: '1.1em',
  fontWeight: '400',
  color: 'muted.0',
}

const linkContainer: SxStyleProp = {
  alignItems: 'center',
}

const link: SxStyleProp = {
  mt: '10px',
  color: 'muted.1',
  textDecoration: 'underline',
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
  bg: 'muted.3',
  px: '6px',
  borderRadius: '4px',
  display: 'inline',
}

export default {
  container,
  innerContent,
  title,
  description,
  link,
  linkContainer,
  builderList,
  builderListItem,
  ctaLink,
  ctaLinkText,
  category,
}
