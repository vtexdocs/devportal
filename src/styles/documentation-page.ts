import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  width: '100%',
  backgroundColor: 'white',
}

const mainContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
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
  ':not(overviewSectionContent) a': {
    color: '#E31C58',
  },
  ':not(overviewSectionContent) ul': {
    li: {
      mt: '0.5em',
      mb: '0.5em',
    },
  },
  ':not(overviewSectionContent) ol': {
    li: {
      mt: '0.5em',
      mb: '0.5em',
    },
  },
  ':not(overviewSectionContent) h1': {
    fontSize: '1.75em',
    fontWeight: '400',
    lineHeight: '2.375em',
  },
  ':not(overviewSectionContent) h2': {
    fontSize: '1.375em',
    lineHeight: '2em',
    fontWeight: '400',
    mt: '1.3em',
    mb: '0.875em',
  },
  ':not(overviewSectionContent) strong': {
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
  display: ['none', 'initial', 'initial', 'initial', 'none'],
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
  width: [0, 0, 0, 0, '184px', '184px', '284px'],
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
}
