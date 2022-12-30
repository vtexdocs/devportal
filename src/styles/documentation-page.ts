import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  pt: '5rem',
  width: '100%',
  backgroundColor: 'white',
}

const mainContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
}

const innerContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
  pt: '64px',
}

const articleBox: SxStyleProp = {
  width: ['100%', 'initial'],
  lineHeight: '22px',
  a: {
    color: '#E31C58',
  },
  header: {
    borderBottom: '1px solid #E7E9EE',
    marginBottom: '24px',
  },
  h1: {
    fontSize: '32px',
    fontWeight: '400',
    lineHeight: '40px',
  },
  h2: {
    fontSize: '22px',
    lineHeight: '32px',
    paddingTop: '16px',
    fontWeight: '400',
  },
  strong: {
    fontWeight: '600',
  },
}

const contentContainer: SxStyleProp = {
  width: ['auto', '544px', '544px', '544px', '544px', '720px', '1080px'],
  mx: ['18px', 'initial'],
}

const documentationTitle: SxStyleProp = {
  fontSize: ['32px', '32px', '32px', '32px', '32px', '32px', '48px'],
  lineHeight: ['38px', '38px', '38px', '38px', '38px', '38px', '54px'],
}

const documentationExcerpt: SxStyleProp = {
  color: '#A1A8B3',
  fontSize: '18px',
  fontWeight: '400',
  padding: '8px 0 24px',
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
  ml: ['64px', '64px', '64px', '64px', '64px', '64px', '200px'],
  display: [
    'none !important',
    'none !important',
    'none !important',
    'none !important',
    'initial !important',
  ],
  width: [0, 0, 0, 0, '189px', '284px', '402px'],
}

const releaseAction: SxStyleProp = {
  display: 'flex',
  gap: '10px',
  fontSize: '18px',
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
