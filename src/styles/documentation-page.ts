import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  width: '100%',
  backgroundColor: 'white',
  maxWidth: '2024px',
  mx: 'auto',
}

const mainContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
}

const innerContainer: SxStyleProp = {
  justifyContent: 'center',
  pt: '64px',
  mx: 'auto',
  px: ['auto', '5em', '6em', '6em', '6em', '6em', '20em'],
  pb: '72px',
}

const articleBox: SxStyleProp = {
  fontSize: '1em',
  lineHeight: '1.75em',
  width: ['100%'],
  color: 'rgb(51, 65, 85)',
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
  h1: {
    fontSize: '1.75em',
    fontWeight: '400',
    lineHeight: '2.375em',
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
  h5: {
    fontSize: '0.9375em',
    fontWeight: '600',
    lineHeight: '1.5em',
    mt: '1.25em',
    mb: '0.5em',
    color: 'rgb(71, 85, 105)',
    overflowWrap: 'anywhere',
  },
  h6: {
    fontSize: '0.9375em',
    fontWeight: '600',
    lineHeight: '1.5em',
    mt: '1.25em',
    mb: '0.5em',
    color: 'rgb(100, 116, 139)',
    overflowWrap: 'anywhere',
  },
  strong: {
    fontWeight: '600',
    overflowWrap: 'break-word',
  },
  hr: {
    border: '0.5px solid #E7E9EE',
    my: ['2em', '3em'],
  },
}

const contentContainer: SxStyleProp = {
  width: '100%',
  px: ['1.125em', 'initial'],
}

const documentationTitle: SxStyleProp = {
  marginTop: '16px',
  fontSize: ['20px', '28px'],
  lineHeight: ['30px', '38px'],
  fontWeight: '400',
  marginBottom: '14px',
  '*': {
    margin: '0px',
  },
}

const documentationExcerpt: SxStyleProp = {
  color: '#A1A8B3',
  borderBottom: '1px solid #E7E9EE',
  marginBottom: '24px',
  lineHeight: '1.5em',
  fontWeight: '400',
  code: {
    fontSize: '0.8rem',
    backgroundColor: '#f7f8fa',
    padding: '2px 4px',
    borderRadius: '4px',
  },
}

const bottomContributorsContainer: SxStyleProp = {
  display: ['flex', 'flex', 'flex', 'flex', 'none'],
  flexDirection: 'column',
  alignItems: 'center',
  px: ['1.125em', 'initial'],
}

const bottomContributors: SxStyleProp = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > div': {
    alignItems: 'center !important',
    width: 'auto !important',
  },
  '[data-cy="contributors-container"]': {
    display: 'flex !important',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 'auto !important',
    maxWidth: '232px',
  },
}

const bottomContributorsDivider: SxStyleProp = {
  mx: 'auto',
  my: '32px',
  height: '1px',
  width: '162px',
  backgroundColor: '#E7E9EE',
}

const rightContainer: SxStyleProp = {
  ml: ['38px', '38px', '48px', '48px', '68px', '68px', '200px'],
  display: [
    'none !important',
    'none !important',
    'none !important',
    'none !important',
    'initial !important',
  ],
  width: [0, 0, 0, 0, '240px', '240px', '284px'],
}

const releaseAction: SxStyleProp = {
  display: 'flex',
  gap: '10px',
  fontSize: '18px',
  mb: '8px',
}

const divider: SxStyleProp = {
  borderTop: '1px solid #E7E9EE',
  pt: 4,
  mt: 4,
}

const button: SxStyleProp = {
  mt: '8px',
  px: 3,
  minHeight: 36,
  background: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: 12,
  height: 'min-content',
  textTransform: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 3,
  width: '100%',
  color: 'muted.0',
  border: '1px solid #E7E9EE',
  '&:hover': { backgroundColor: '#F8F7FC', color: '#000711' },
}

const editContainer: SxStyleProp = {
  mb: 3,
  alignItems: 'center',
  gap: 2,
  fontSize: 12,
  ':hover': {
    color: '#000711 !important',
  },
  color: '#4A596B !important',
  display: 'flex',
}

export default {
  container,
  mainContainer,
  articleBox,
  contentContainer,
  documentationTitle,
  bottomContributorsContainer,
  bottomContributors,
  bottomContributorsDivider,
  rightContainer,
  releaseAction,
  documentationExcerpt,
  innerContainer,
  divider,
  button,
  editContainer,
}
