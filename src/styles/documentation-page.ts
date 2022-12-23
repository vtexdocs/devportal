import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  pt: '5rem',
  width: '100%',
  backgroundColor: 'white',
}

const mainContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
  pt: '32px',
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
  },
  h2: {
    fontSize: '22px',
    lineHeight: '32px',
    paddingTop: '16px',
    fontWeight: '400',
  },
  '.excerpt': {
    color: '#A1A8B3',
    fontSize: '18px',
    paddingBottom: '20px',
  },
  strong: {
    fontWeight: '600',
  },
}

const contentContainer: SxStyleProp = {
  width: ['auto', '544px', '544px', '544px', '720px', '720px'],
  mx: ['18px', 'initial'],
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
  ml: '82px',
  display: [
    'none !important',
    'none !important',
    'none !important',
    'none !important',
    'initial !important',
  ],
  width: [0, 0, 0, 0, '189px', '284px'],
}

export default {
  container,
  mainContainer,
  articleBox,
  contentContainer,
  bottomContributorsContainer,
  bottomContributorsDivider,
  rightContainer,
}
