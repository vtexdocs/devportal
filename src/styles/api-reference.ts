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
  endpointPathStyles,
  endpointLinkStyles,
}

export default apiReferenceStyles
