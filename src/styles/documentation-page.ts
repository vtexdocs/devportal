import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  width: '100%',
  backgroundColor: 'white',
}

const mainContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
  mb: '40px',
}

const innerContainer: SxStyleProp = {
  justifyContent: 'center',
  pt: '64px',
  mx: 'auto',
  px: ['auto', '5em', '7em', '7em', '7em', '7em', '20em'],
}

const articleBox: SxStyleProp = {
  fontSize: '1em',
  lineHeight: '1.5em',
  width: '100%',
  a: {
    color: '#E31C58',
  },
  ul: {
    li: {
      mt: '0.5em',
      mb: '0.5em',
    },
  },
  ol: {
    li: {
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
    lineHeight: '2em',
    fontWeight: '400',
    mt: '1.3em',
    mb: '0.875em',
  },
  strong: {
    fontWeight: '600',
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
  p: {
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
  display: ['initial', 'initial', 'initial', 'initial', 'none'],
}

const bottomContributorsDivider: SxStyleProp = {
  mx: 'auto',
  my: '32px',
  height: '1px',
  width: '162px',
  backgroundColor: '#E7E9EE',
}

const rightContainer: SxStyleProp = {
  ml: ['38px', '38px', '48px', '48px', '58px', '68px', '200px'],
  display: [
    'none !important',
    'none !important',
    'none !important',
    'none !important',
    'initial !important',
  ],
  width: [0, 0, 0, 0, '220px', '220px', '284px'],
}

const releaseAction: SxStyleProp = {
  display: 'flex',
  gap: '10px',
  fontSize: '18px',
  mb: '8px',
}

const divider: SxStyleProp = {
  marginTop: '20px',
  borderBottom: '1px solid #E7E9EE',
}

const button: SxStyleProp = {
  padding: '8px 24px',
  background: '#111827',
  color: 'white',
  border: 0,
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: '12px',
  height: 'min-content',
  textTransform: 'none',
  minWidth: '100%',
}

export default {
  container,
  mainContainer,
  articleBox,
  contentContainer,
  documentationTitle,
  bottomContributorsContainer,
  bottomContributorsDivider,
  rightContainer,
  releaseAction,
  documentationExcerpt,
  innerContainer,
  divider,
  button,
}
