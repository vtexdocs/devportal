import { SxStyleProp } from '@vtex/brand-ui'

const footerLeftLinks: SxStyleProp = {
  ml: ['0px', '32px'],
  mb: ['24px', '0px'],
  textAlign: 'left',
}

const footerRightLinks: SxStyleProp = {
  ...footerLeftLinks,
  textAlign: 'right',
}

const footerLinks: SxStyleProp = {
  '& > footer': {
    px: ['0px', '32px'],
    '& > div': {
      flexDirection: ['column', 'row'],
      alignItems: ['flex-start', 'center'],
      px: ['32px', '0px'],
      py: ['32px'],
      width: ['100vw', '100%'],
      '& > :last-child': {
        mt: ['32px', '0px'],
        display: ['grid', 'flex'],
        justifyItems: ['stretch', 'initial'],
        justifyContent: ['space-between', 'flex-end'],
      },
    },
  },
}

export default {
  footerLinks,
  footerLeftLinks,
  footerRightLinks,
}
