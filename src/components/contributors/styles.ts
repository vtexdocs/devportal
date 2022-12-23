import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  mb: '32px',
  flexDirection: 'column',
  alignItems: ['initial', 'center', 'center', 'center', 'initial'],
}

const titleContainer: SxStyleProp = {
  alignItems: 'center',
}

const title: SxStyleProp = {
  fontWeight: '400',
  fontSize: ['12px', '16px', '16px', '16px', '12px', '16px', '22px'],
  lineHeight: ['16px', '22px', '22px', '22px', '16px', '18px', '22px'],
  color: '#4A4A4A',
}

const count: SxStyleProp = {
  px: '8px',
  ml: '8px',
  width: '30px',
  height: '16px',
  borderRadius: '24px',
  backgroundColor: 'muted.4',
  fontSize: ['12px', '12px', '12px', '12px', '12px', '12px', '22px'],
  fontWeight: '400',
  lineHeight: '16px',
  textAlign: 'center',
  color: '#4A4A4A',
}

const photosContainer: (rows: number) => SxStyleProp = (rows) => {
  const maxHeight = (photoSize: number, gap: number) =>
    `${photoSize * rows + gap * (rows - 1)}px`
  const defaultMaxHeight = maxHeight(32, 8)

  return {
    mt: ['16px', '16px', '16px', '16px', '16px', '16px', '24px'],
    gap: ['8px', '8px', '8px', '8px', '8px', '8px', '12px'],
    gridTemplateColumns: [
      '1fr 1fr 1fr 1fr',
      '1fr 1fr 1fr 1fr 1fr 1fr',
      '1fr 1fr 1fr 1fr 1fr 1fr',
      '1fr 1fr 1fr 1fr 1fr 1fr',
      '1fr 1fr 1fr 1fr',
      '1fr 1fr 1fr 1fr 1fr',
    ],
    overflow: 'hidden',
    width: [
      0,
      'min-content',
      'min-content',
      'min-content',
      '152px',
      '192px',
      '288px',
    ],
    maxHeight: [
      defaultMaxHeight,
      defaultMaxHeight,
      defaultMaxHeight,
      defaultMaxHeight,
      defaultMaxHeight,
      defaultMaxHeight,
      maxHeight(48, 12),
    ],
    transition: 'max-height 0.3s ease-in-out',
  }
}

const photo: SxStyleProp = {
  width: ['32px', '32px', '32px', '32px', '32px', '32px', '48px'],
  height: ['32px', '32px', '32px', '32px', '32px', '32px', '48px'],
  img: {
    width: ['32px', '32px', '32px', '32px', '32px', '32px', '48px'],
    height: ['32px', '32px', '32px', '32px', '32px', '32px', '48px'],
    borderRadius: '100%',
  },
}

const collapseButton: SxStyleProp = {
  mt: ['8px', '8px', '8px', '8px', '8px', '8px', '16px'],
  height: '24px',
  fontWeight: '400',
  fontSize: ['12px', '12px', '12px', '12px', '12px', '12px', '22px'],
  lineHeight: ['16px', '16px', '16px', '16px', '16px', '16px', '22px'],
  color: 'muted.0',
  cursor: 'pointer',
  alignItems: 'center',

  ':active': {
    color: '#0C1522',
  },

  ':hover': {
    color: '#000711',
  },
}

export default {
  container,
  titleContainer,
  title,
  count,
  photosContainer,
  photo,
  collapseButton,
}
