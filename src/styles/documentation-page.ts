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
  width: '100%',
  pt: '64px',
}

const articleBox: SxStyleProp = {
  width: ['100%', 'initial'],
  fontSize: '18px',
  lineHeight: '24px',
  a: {
    color: '#E31C58',
  },
  header: {
    borderBottom: '1px solid #E7E9EE',
    marginBottom: '24px',
  },
  h1: {
    fontSize: '2em',
    fontWeight: '400',
    lineHeight: 1.25,
  },
  h2: {
    fontSize: '22px',
    lineHeight: '32px',
    fontWeight: '400',
    pt: '8px',
    my: '16px',
  },
  h3: {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '24px',
  },
  strong: {
    fontWeight: '600',
  },
}

const contentContainer: SxStyleProp = {
  width: ['auto', '544px', '544px', '544px', '544px', '720px', '1400px'],
  mx: ['18px', 'initial'],
}

const documentationTitle: SxStyleProp = {
  marginTop: '16px',
  fontSize: ['20px', '28px'],
  lineHeight: ['30px', '38px'],
  fontWeight: '400',
}

const documentationExcerpt: SxStyleProp = {
  color: '#A1A8B3',
  padding: '8px 0 24px',
  fontSize: ['12px', '16px'],
  lineHeight: ['16px', '18px'],
  fontWeight: '400',
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
  width: [0, 0, 0, 0, '189px', '284px'],
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
