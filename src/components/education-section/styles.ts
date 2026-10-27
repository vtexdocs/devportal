import { SxStyleProp } from '@vtex/brand-ui'
import { landingTokens } from '@vtexdocs/components'

const container: SxStyleProp = {
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

const channelsContainer: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: [
    '1fr',
    '1fr',
    '1fr',
    `repeat(${landingTokens.cardsPerRow}, minmax(0, 1fr))`,
  ],
  gap: [...landingTokens.cardGap],
  width: '100%',
  alignItems: 'stretch',
}

export default {
  container,
  title,
  channelsContainer,
}
