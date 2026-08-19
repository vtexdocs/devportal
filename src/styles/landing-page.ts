import { SxStyleProp } from '@vtex/brand-ui'

const grid: SxStyleProp = {
  gridGap: '0px',
  background: '#ffffff',
  width: '100%',
  overflow: 'hidden',
}

const subscriptionList: SxStyleProp = {
  '& > div > *:first-child': {
    color: '#132032',
    fontSize: ['22px', '26px', '28px', '32px'],
    lineHeight: ['28px', '34px', '36px', '40px'],
    fontWeight: '400',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    width: '100%',
  },
}

export default {
  grid,
  subscriptionList,
}
