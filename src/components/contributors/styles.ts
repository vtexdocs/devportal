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
  fontSize: ['12px', '16px', '16px', '16px', '12px', '16px'],
  lineHeight: ['16px', '22px', '22px', '22px', '16px', '18px'],
  color: '#4A4A4A',
}

const count: SxStyleProp = {
  px: '8px',
  ml: '8px',
  width: '30px',
  height: '16px',
  borderRadius: '24px',
  backgroundColor: 'muted.4',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  textAlign: 'center',
  color: '#4A4A4A',
}

const photosContainer: (rows: number) => SxStyleProp = (rows) => ({
  mt: '16px',
  gap: '8px',
  gridTemplateColumns: [
    '1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr 1fr',
  ],
  overflow: 'hidden',
  width: [0, '256px', '256px', '256px', '152px', '192px'],
  maxHeight: `${32 * rows + 8 * (rows - 1)}px`,
  transition: 'max-height 0.3s ease-in-out',
})

const photo: SxStyleProp = {
  width: '32px',
  height: '32px',
  borderRadius: '100%',
  backgroundColor: 'gainsboro',
}

const collapseButton: SxStyleProp = {
  mt: '8px',
  height: '24px',
  fontWeight: '400',
  fontSize: ['12px', '12px', '12px', '12px', '12px', '16px'],
  lineHeight: ['16px', '16px', '16px', '16px', '16px', '18px'],
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
