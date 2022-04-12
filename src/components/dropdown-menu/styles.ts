import { SxStyleProp } from '@vtex/brand-ui'

const outerContainer: SxStyleProp = {
  top: '5rem',
  position: 'absolute',
  filter: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.1))',
  borderRadius: '0px 0px 8px 8px',
  border: '1px solid #E7E9EE',
  background: 'white',
  padding: '8px',
  maxHeight: 'calc(100vh - 5rem)',
}

const innerContainer: SxStyleProp = {
  overflowY: 'scroll',
  maxHeight: 'calc(100vh - 5rem - 16px)',
  scrollbarWidth: 'thin',
  scrollbarColor: '#CCCED8 white',

  '::-webkit-scrollbar': {
    width: '5px',
  },

  '::-webkit-scrollbar-track': {
    borderRadius: '100px',
  },

  '::-webkit-scrollbar-thumb': {
    background: '#CCCED8',
    borderRadius: '100px',
    height: '30px',
  },
}

const documentationContainer: SxStyleProp = {
  px: '16px',
  paddingBottom: '8px',
}

const divisor: SxStyleProp = {
  height: '1px',
  width: '100%',
  background: '#E7E9EE',
}

const updatesContainer: SxStyleProp = {
  px: '16px',
  paddingTop: '8px',
  borderRadius: '0px 0px 8px 8px',
}

export default {
  divisor,
  documentationContainer,
  innerContainer,
  outerContainer,
  updatesContainer,
}
