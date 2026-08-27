import type { SxStyleProp } from '@vtex/brand-ui'
import { isMethodType } from 'utils/typings/unionTypes'
import { methodsColors } from 'components/method-category/functions'

const overviewArticleStyles: SxStyleProp = {
  ml: 'auto',
  mb: '2.5rem',
  color: '#4A596B',
  fontSize: '0.95em',
  lineHeight: '1.5em',
}

const overviewHeaderStyles: SxStyleProp = {
  mt: 0,
  mb: '1.5rem',
  '*': {
    margin: '0px',
  },
  '& h1': {
    fontSize: ['20px', '28px'],
    lineHeight: ['30px', '38px'],
    fontWeight: '400',
    color: '#142032',
  },
}

const overviewContentStyles: SxStyleProp = {
  img: {
    maxWidth: '100%',
    display: 'block',
    padding: '0',
    margin: '0',
    border: '1px solid #e7e9ed',
    borderRadius: '4px',
  },
  '& blockquote': {
    borderLeft: '4px solid #E7E9EE',
    ml: 0,
    my: '1.5rem',
    pl: '1rem',
  },
  '& .overview-callout': {
    display: 'grid',
    columnGap: '20px',
    rowGap: '0.75rem',
    width: '100%',
    pl: 0,
    ml: 0,
    mt: '1rem',
    mb: '1.5rem',
    p: '20px',
    borderRadius: '4px',
    alignItems: 'center',
    gridTemplateColumns: '20px 1fr',
    wordBreak: 'break-word',
    bg: '#F8F7FC',
    border: '1px solid #CCCED8',
    '& code': {
      bg: '#ECEBF3',
    },
  },
  '& .overview-callout-icon': {
    display: 'block',
    gridColumn: '1',
  },
  '& .overview-callout > div': {
    m: 0,
    gridColumn: '2 / -1',
    display: 'grid',
    rowGap: '0.75rem',
    minWidth: 0,
  },
  '& .overview-callout p': {
    m: 0,
  },
  '& .overview-callout a': {
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  },
  '& .overview-callout--info': {
    bg: '#F8F7FC',
    borderColor: '#CCCED8',
    '& code': {
      bg: '#ECEBF3',
    },
  },
  '& .overview-callout--warning': {
    bg: '#FFF2D4',
    borderColor: '#FFB100',
    '& code': {
      bg: '#FFE5B5',
    },
  },
  '& .overview-callout--danger': {
    bg: '#FDEFEF',
    borderColor: '#DC5A41',
  },
  '& .overview-callout--success': {
    bg: '#F3F8F3',
    borderColor: '#80BE80',
  },
}

const endpointPathStyles: SxStyleProp = {
  fontFamily: 'mono',
  fontSize: '0.875rem',
  bg: '#F7F8FA',
  borderRadius: '4px',
  px: '0.25rem',
  py: '0.125rem',
  wordBreak: 'break-word',
}

const endpointLinkStyles: SxStyleProp = {
  color: '#E31C58',
  textDecoration: 'underline',
  textUnderlineOffset: '0.18em',
  fontWeight: '500',
}

// Style factory for the per-endpoint method badge. Returns a method-specific
// palette when available, or a sensible red fallback for unknown HTTP verbs.
export function getOverviewEndpointMethodBadgeSx(method: string): SxStyleProp {
  const upper = method.toUpperCase()
  const palette =
    isMethodType(upper) && methodsColors[upper]
      ? methodsColors[upper]
      : {
          border: '1px solid #F49494',
          color: '#CC3D3D',
          background: '#F8E3E3',
        }

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2px',
    fontSize: '12px',
    fontWeight: '600',
    minHeight: '24px',
    px: '6px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    ...palette,
  }
}

const docsearchFallbackStyles: SxStyleProp = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
}

const apiReferenceStyles = {
  overviewArticleStyles,
  overviewHeaderStyles,
  overviewContentStyles,
  endpointPathStyles,
  endpointLinkStyles,
  docsearchFallbackStyles,
}

export default apiReferenceStyles
