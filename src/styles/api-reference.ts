import type { SxStyleProp } from '@vtex/brand-ui'
import { isMethodType } from 'utils/typings/unionTypes'
import { methodsColors } from 'components/method-category/functions'

const overviewInnerContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  pt: ['24px', '32px', '3em'],
  mx: 'auto',
  px: ['18px', '24px', '32px', '40px', '48px', '64px', '20em'],
  pb: ['48px', '64px', '72px'],
}

const overviewArticleBox: SxStyleProp = {
  fontSize: '1em',
  lineHeight: '1.75em',
  fontWeight: '400',
  flex: '1 1 auto',
  width: '100%',
  minWidth: 0,
  maxWidth: '100%',
  color: 'rgb(51, 65, 85)',
  overflowWrap: 'anywhere',
  table: {
    overflowWrap: 'normal',
    wordBreak: 'normal',
  },
  'th, td': {
    overflowWrap: 'normal',
    wordBreak: 'normal',
    hyphens: 'none',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  a: {
    color: '#E31C58',
    textDecoration: 'none',
    fontWeight: '500',
  },
  ul: {
    pl: '1.5em',
    mt: '1.25em',
    mb: '1.25em',
    li: {
      mt: '0.5em',
      mb: '0.5em',
    },
    listStyleType: 'disc',
    'ul, ol': {
      mt: '0.5em',
      mb: '0.5em',
    },
  },
  ol: {
    pl: '1.5em',
    mt: '1.25em',
    mb: '1.25em',
    li: {
      mt: '0.5em',
      mb: '0.5em',
    },
    'ul, ol': {
      mt: '0.5em',
      mb: '0.5em',
    },
  },
  header: {
    marginTop: ['8px', '16px'],
    borderBottom: '1px solid #E7E9EE',
    marginBottom: ['8px', '12px'],
    pb: ['12px', '16px'],
  },
  h2: {
    fontSize: '1.375em',
    lineHeight: '1.3em',
    fontWeight: '700',
    mt: ['1.5em', '2em'],
    mb: ['0.75em', '1em'],
    overflowWrap: 'anywhere',
    color: 'rgb(15, 23, 42)',
  },
  h3: {
    fontSize: '1.125em',
    fontWeight: '600',
    lineHeight: '1.6em',
    mt: '1.6em',
    mb: '0.6em',
    overflowWrap: 'anywhere',
  },
  h4: {
    fontSize: '1em',
    fontWeight: '600',
    lineHeight: '1.5em',
    mt: '1.5em',
    mb: '0.5em',
    color: 'rgb(15, 23, 42)',
    overflowWrap: 'anywhere',
  },
  strong: {
    fontWeight: '600',
    overflowWrap: 'break-word',
  },
}

const overviewBreadcrumbRow: SxStyleProp = {
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '8px',
  width: '100%',
  minWidth: 0,
}

const overviewTitle: SxStyleProp = {
  display: 'block',
  marginTop: ['16px', '16px', '24px'],
  marginBottom: 0,
  fontSize: ['28px', '28px', '30px'],
  lineHeight: ['36px', '36px', '38px'],
  fontWeight: '400',
  color: '#142032',
  overflowWrap: 'anywhere',
}

const overviewTextContainer: SxStyleProp = {
  width: '100%',
  minWidth: 0,
  maxWidth: '100%',
  pb: ['16px', '24px', '32px'],
  mb: ['8px', '24px', '48px'],
}

const overviewContentStyles: SxStyleProp = {
  '& > *:first-child': {
    mt: 0,
  },
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

const endpointFallbackStyles: SxStyleProp = {
  px: ['1em', '1.5em', '2em'],
  pt: '1em',
  pb: '0.5rem',
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

const apiReferenceStyles = {
  overviewInnerContainer,
  overviewArticleBox,
  overviewBreadcrumbRow,
  overviewTitle,
  overviewTextContainer,
  overviewContentStyles,
  endpointPathStyles,
  endpointLinkStyles,
  endpointFallbackStyles,
}

export default apiReferenceStyles
