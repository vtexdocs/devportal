import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  pt: '5rem',
  width: '100%',
  backgroundColor: 'white',
}

const mainContainer: SxStyleProp = {
  width: '100%',
}

const welcomeOuterContainer: SxStyleProp = {
  overflow: 'hidden',
}

const welcomeInnerContainer: SxStyleProp = {
  flexDirection: ['column-reverse', 'row'],
  position: ['initial', 'relative'],
  left: [
    'initial',
    'calc(50% - 1194px / 2 + 325px)',
    'calc(50% - 1194px / 2 + 325px)',
    'calc(50% - 1194px / 2 + 325px)',
    'calc(50% - 1280px / 2 + 280px)',
    'calc(50% - 1213px / 2 + 247px)',
  ],
  justifyContent: 'space-between',
  alignItems: ['center', 'initial'],
}

const welcomeHeader: SxStyleProp = {
  pt: ['initial', '115px'],
  position: ['initial', 'absolute'],
  mb: ['32px', 'initial'],
  zIndex: '1000',
  maxWidth: ['380px', 'initial'],
  width: ['380px', '380px', '380px', '380px', '380px', '380px'],
}

const welcomeText: SxStyleProp = {
  boxSizing: 'initial',
  textAlign: ['left', 'initial'],
  fontSize: ['20px', '28px'],
  fontWeight: '400',
  color: '#4A4A4A',
  lineHeight: ['30px', '38px'],
  paddingBottom: '8px',
}
const welcomeSubtitle: SxStyleProp = {
  textAlign: ['left', 'initial'],
  fontSize: ['16px', '18px'],
  fontWeight: '400',
  color: '#A1A8B3',
  lineHeight: ['22px', '24px'],
}

const welcomeImageOuterContainer: SxStyleProp = {
  width: '100%',
  overflow: 'hidden',
}

const welcomeImageInnerContainer: SxStyleProp = {
  position: 'relative',
  mx: ['auto', 'initial'],
  left: ['initial', '308px', '308px', '308px', '339px', '621px', '863px'],
  top: ['-92px', '-122px'],
  width: ['360px', '592px'],
  height: ['200px', '222px'],
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

const divider: (sidebarSectionHidden: boolean) => SxStyleProp = (
  sidebarSectionHidden
) => ({
  margin: 0,
  padding: 0,
  float: 'right',
  borderWidth: 0,
  borderBottom: '1px solid #E7E9EE',
  transition: 'width 0.3s ease-in-out',
  width: [
    0,
    '100%',
    '100%',
    `calc(100vw - 72px - ${sidebarSectionHidden ? 24 : 300}px)`,
  ],
})

const contentContainer: SxStyleProp = {
  mx: 'auto',
  mt: ['16px', '32px'],
  mb: ['32px', '64px'],
  px: ['18px', 'initial'],
  maxWidth: ['324px', 'initial'],
  width: ['auto', '544px', '544px', '544px', '720px'],
  boxSizing: 'initial',
}

const subtitle: SxStyleProp = {
  mb: ['16px', '8px'],
  textAlign: ['center', 'initial'],
  fontSize: ['16px', '18px'],
  lineHeight: ['22px', '24px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const cardsContainer: SxStyleProp = {
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}

const resourcesSectionContainer: SxStyleProp = {
  mt: '24px',
}

const resourcesSectionTitle: SxStyleProp = {
  fontSize: ['18px', '22px'],
  lineHeight: ['30px', '32px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const resourceContainer: SxStyleProp = {
  mt: '24px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
}

const resourceTitle: SxStyleProp = {
  color: '#E31C58',
}

const resourceDescription: SxStyleProp = {
  mt: '8px',
  color: '#4A4A4A',
}

export default {
  container,
  mainContainer,
  welcomeOuterContainer,
  welcomeInnerContainer,
  welcomeHeader,
  welcomeText,
  welcomeSubtitle,
  welcomeImageOuterContainer,
  welcomeImageInnerContainer,
  welcomeImageGradient,
  divider,
  contentContainer,
  subtitle,
  cardsContainer,
  resourcesSectionContainer,
  resourcesSectionTitle,
  resourceContainer,
  resourceTitle,
  resourceDescription,
}
