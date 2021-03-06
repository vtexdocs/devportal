import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  pt: '5rem',
  width: '100%',
  backgroundColor: 'white',
}

const mainContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
  pt: '64px',
}

const articleBox: SxStyleProp = {
  width: ['100%', 'initial'],
}

const contentContainer: SxStyleProp = {
  width: ['auto', '544px', '544px', '544px', '544px', '720px'],
  mx: ['18px', 'initial'],
}

const rightContainer: SxStyleProp = {
  ml: '64px',
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
  rightContainer,
}
