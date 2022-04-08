import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  top: '5rem',
  position: 'absolute',
  background: 'white',
  filter: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.1))',
  borderRadius: '0px 0px 8px 8px',
  border: '1px solid #E7E9EE',
}

const documentationContainer: SxStyleProp = {
  padding: '8px 24px',
}

const updatesContainer: SxStyleProp = {
  padding: '8px 24px',
  borderTop: '1px solid #E7E9EE',
  borderRadius: '0px 0px 8px 8px',
}

export default {
  container,
  documentationContainer,
  updatesContainer,
}
