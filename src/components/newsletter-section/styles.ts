import { SxStyleProp } from '@vtex/brand-ui'

const section: SxStyleProp = {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',
  borderBottom: '1px solid #E7E9EE',
}

const container: SxStyleProp = {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: ['1fr', '1fr', 'minmax(300px, 42%) minmax(0, 1fr)'],
  alignItems: ['start', 'start', 'center'],
  columnGap: 0,
  rowGap: ['28px', '32px', '0px'],
  pt: ['40px', '48px', '48px'],
  pb: 0,
  minHeight: ['auto', 'auto', '420px', '480px'],
}

const titleContent: SxStyleProp = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: ['center', 'center', 'flex-start'],
  textAlign: ['center', 'center', 'left'],
  px: ['24px', '32px', '48px', '80px'],
  pr: ['24px', '32px', '40px', '48px'],
  py: ['0px', '0px', '56px'],
}

const newsletterTitle: SxStyleProp = {
  fontSize: ['28px', '36px', '40px', '48px'],
  lineHeight: ['36px', '44px', '48px', '56px'],
  fontWeight: '400',
  color: '#142032',
  letterSpacing: '-0.03em',
  maxWidth: ['320px', '420px', 'none'],
}

const newsletterTitleAccent: SxStyleProp = {
  color: '#2953E8',
}

const shortcuts: SxStyleProp = {
  mt: ['24px', '28px'],
  gap: '8px',
  flexWrap: 'wrap',
  justifyContent: ['center', 'center', 'flex-start'],
  a: {
    color: '#142032',
    ':hover': {
      color: '#E31C58',
    },
  },
}

const shortcut: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  px: ['12px', '16px'],
  py: ['8px', '10px'],
  borderRadius: '100px',
  border: '1px solid #E7E9EE',
  backgroundColor: '#FFFFFF',
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  color: 'inherit',
  transition: 'all 0.2s ease-out',
  ':hover': {
    borderColor: '#E31C58',
    backgroundColor: '#FEF4F6',
  },
}

const imageContainer: SxStyleProp = {
  position: 'relative',
  width: '100%',
  minWidth: 0,
  height: ['240px', '300px', '420px', '480px'],
  overflow: 'hidden',
  justifySelf: 'stretch',
  alignSelf: 'end',
}

export default {
  section,
  container,
  titleContent,
  newsletterTitle,
  newsletterTitleAccent,
  shortcuts,
  shortcut,
  imageContainer,
}
