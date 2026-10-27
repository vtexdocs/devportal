import { SxStyleProp } from '@vtex/brand-ui'
import { landingTokens } from '@vtexdocs/components'

const sectionContainer: SxStyleProp = {
  px: [...landingTokens.sectionPaddingX],
  py: [...landingTokens.sectionPaddingY],
  width: '100%',
  maxWidth: landingTokens.contentMaxWidth,
  mx: 'auto',
}

const title: SxStyleProp = {
  fontSize: [...landingTokens.type.sectionTitle],
  lineHeight: [...landingTokens.type.sectionTitleLine],
  fontWeight: '400',
  color: landingTokens.ink,
  textAlign: 'center',
  letterSpacing: '-0.02em',
  mb: ['24px', '32px', '40px'],
}

export default {
  sectionContainer,
  title,
}
