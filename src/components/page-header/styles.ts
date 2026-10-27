import type { SxStyleProp } from '@vtex/brand-ui'

const welcomeHeader: SxStyleProp = {
  pt: ['initial', '100px'],
  position: ['initial', 'absolute'],
  mb: ['32px', 'initial'],
  zIndex: '1000',
  width: ['320px', 'calc(100% - 48px)'],
  maxWidth: ['320px', '345px', '345px', '345px', '345px', '720px'],
}

const welcomeSubtitle: SxStyleProp = {
  textAlign: ['center', 'initial'],
  fontSize: ['16px', '18px'],
  fontWeight: '400',
  color: '#A1A8B3',
  lineHeight: ['22px', '24px'],
}

const welcomeOuterContainer: SxStyleProp = {
  overflow: 'hidden',
}

// Mirrors `contentContainer` in styles/documentation-landing-page so the title
// stays aligned with the body text and nothing is clipped when the main area shrinks.
const welcomeInnerContainer: SxStyleProp = {
  flexDirection: ['column-reverse', 'row'],
  position: ['initial', 'relative'],
  mx: 'auto',
  px: [0, '24px'],
  maxWidth: ['none', '544px', '544px', '544px', '720px', '720px', '1400px'],
  boxSizing: 'content-box',
  justifyContent: 'space-between',
  alignItems: ['center', 'initial'],
}

const welcomeText: SxStyleProp = {
  boxSizing: 'initial',
  textAlign: ['center', 'initial'],
  fontSize: ['22px', '28px'],
  fontWeight: '400',
  lineHeight: ['30px', '38px'],
  paddingBottom: '8px',
  color: '#142032',
}

// On desktop the art bleeds past the column and is clipped by
// `welcomeOuterContainer` at the edge of the main area instead.
const welcomeImageOuterContainer: SxStyleProp = {
  width: '100%',
  minWidth: 0,
  overflow: ['hidden', 'visible'],
}

const welcomeImageInnerContainer: SxStyleProp = {
  position: 'relative',
  mx: ['auto', 'initial'],
  right: [
    'initial',
    '-308px',
    '-308px',
    '-308px',
    '-490px',
    '-621px',
    '-863px',
  ],
  top: ['-92px', '-122px'],
  width: ['500px', '592px'],
  height: ['128px', '250px'],
}

const welcomeImageGradient: SxStyleProp = {
  zIndex: 1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: ['92px', '122px'],
  background: [
    'linear-gradient(180deg, rgba(255, 255, 255, 0) -3.42%, #FFFFFF 103.17%)',
    'linear-gradient(47.76deg, #FFFFFF -41.03%, rgba(255, 255, 255, 0) 28.93%)',
  ],
}

const divider: () => SxStyleProp = () => ({
  margin: 0,
  padding: 0,
  borderWidth: 0,
  borderBottom: '1px solid #E7E9EE',
  transition: 'width 0.3s ease-in-out',
  width: '100%',
})

export default {
  welcomeHeader,
  welcomeSubtitle,
  welcomeOuterContainer,
  welcomeInnerContainer,
  welcomeText,
  welcomeImageOuterContainer,
  welcomeImageInnerContainer,
  welcomeImageGradient,
  divider,
}
