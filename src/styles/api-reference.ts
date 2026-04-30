import type { SxStyleProp } from '@vtex/brand-ui'
import { isMethodType } from 'utils/typings/unionTypes'
import { methodsColors } from 'components/method-category/functions'

const overviewArticleStyles: SxStyleProp = {
  maxWidth: '960px',
  mx: 'auto',
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
  color: '#4A596B',
  '& p': {
    lineHeight: '1.5em',
    mb: '1rem',
  },
  '& ul, & ol': {
    mb: '1rem',
    pl: '1.5rem',
  },
  '& ul li, & ol li': {
    mt: '0.5em',
    mb: '0.5em',
  },
  '& h2': {
    fontSize: '1.375em',
    lineHeight: '2em',
    fontWeight: '400',
    mt: '1.3em',
    mb: '0.875em',
    color: '#142032',
  },
  '& h3': {
    fontSize: ['1.125rem', '1.25rem'],
    lineHeight: '1.75rem',
    fontWeight: '600',
    mt: '1.5rem',
    mb: '0.75rem',
    color: '#142032',
  },
  '& h4': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: '600',
    mt: '1.25rem',
    mb: '0.75rem',
    color: '#142032',
  },
  '& a': {
    color: '#E31C58',
    textDecoration: 'underline',
    textUnderlineOffset: '0.18em',
  },
  '& strong': {
    fontWeight: '600',
  },
  '& blockquote': {
    borderLeft: '4px solid #E7E9EE',
    color: '#4A596B',
    ml: 0,
    my: '1.5rem',
    pl: '1rem',
  },
  '& .overview-callout': {
    display: 'grid',
    gap: '20px',
    width: '100%',
    pl: 0,
    ml: 0,
    mt: '1rem',
    mb: '1.5rem',
    p: '20px',
    borderRadius: '4px',
    alignItems: 'center',
    gridTemplateColumns: '20px 1fr',
    gridTemplateRows: '1fr',
    wordBreak: 'break-word',
    border: '1px solid #CCCED8',
    '&::before': {
      display: 'inline-block',
      height: '20px',
      width: '20px',
      content: '""',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '20px 20px',
    },
  },
  '& .overview-callout p, & .overview-callout div': {
    m: 0,
    gridColumn: '2 / -1',
    gridRow: '1 / 1',
  },
  '& .overview-callout p + p': {
    mt: '0.75rem',
  },
  '& .overview-callout a': {
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  },
  '& .overview-callout > p:first-of-type strong:first-child': {
    display: 'block',
    color: '#142032',
    fontWeight: '600',
  },
  '& .overview-callout--info': {
    bg: '#F8F7FC',
    borderColor: '#CCCED8',
    '&::before': {
      backgroundImage:
        'url(https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/info.svg)',
    },
    '& code': {
      bg: '#ECEBF3',
    },
  },
  '& .overview-callout--warning': {
    bg: '#FFF2D4',
    borderColor: '#FFB100',
    '&::before': {
      backgroundImage:
        'url(https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/warning.svg)',
    },
    '& code': {
      bg: '#FFE5B5',
    },
  },
  '& .overview-callout--danger': {
    bg: '#FDEFEF',
    borderColor: '#DC5A41',
    '&::before': {
      backgroundImage:
        'url(https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/danger.svg)',
    },
  },
  '& .overview-callout--success': {
    bg: '#F3F8F3',
    borderColor: '#80BE80',
    '&::before': {
      backgroundImage:
        'url(https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/success.svg)',
    },
  },
  '& code': {
    fontFamily: 'mono',
    fontSize: '0.875rem',
    bg: '#F7F8FA',
    borderRadius: '4px',
    px: '0.25rem',
    py: '0.125rem',
  },
  '& pre': {
    bg: '#F7F8FA',
    border: '1px solid #E7E9EE',
    borderRadius: '4px',
    overflowX: 'auto',
    p: '1rem',
    mb: '1.5rem',
  },
  '& pre code': {
    bg: 'transparent',
    px: 0,
    py: 0,
  },
  '& table': {
    width: '100%',
    borderCollapse: 'collapse',
    mb: '1.5rem',
  },
  '& th, & td': {
    borderBottom: '1px solid #E7E9EE',
    px: '0.75rem',
    py: '0.625rem',
    textAlign: 'left',
    verticalAlign: 'top',
  },
}

const overviewTableWrapperStyles: SxStyleProp = {
  overflowX: 'auto',
  border: '1px solid #E7E9EE',
  borderRadius: '4px',
  bg: '#FFFFFF',
}

const overviewTableStyles: SxStyleProp = {
  width: '100%',
  minWidth: '640px',
  borderCollapse: 'collapse',
  '& th': {
    textAlign: 'left',
    padding: '0.875rem 1rem',
    borderBottom: '1px solid #E7E9EE',
    bg: '#F7F8FA',
    color: '#4A596B',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  '& td': {
    padding: '0.875rem 1rem',
    borderBottom: '1px solid #E7E9EE',
    verticalAlign: 'top',
    color: '#4A596B',
  },
  '& td:first-of-type': {
    wordBreak: 'break-word',
    whiteSpace: 'normal',
  },
  '& td:nth-of-type(2)': {
    whiteSpace: 'nowrap',
  },
  '& td:nth-of-type(3)': {
    wordBreak: 'break-word',
  },
  '& tbody tr:last-of-type td': {
    borderBottom: 'none',
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

const apiReferenceStyles = {
  overviewArticleStyles,
  overviewHeaderStyles,
  overviewContentStyles,
  overviewTableWrapperStyles,
  overviewTableStyles,
  endpointPathStyles,
  endpointLinkStyles,
}

export default apiReferenceStyles
