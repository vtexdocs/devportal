import { SxStyleProp } from '@vtex/brand-ui'
import { MethodType } from 'utils/typings/unionTypes'
import styles from './styles'

export const methodStyle = (httpMethod: MethodType) => {
  let color = ''
  if (httpMethod === 'POST') {
    color = '#2978B5'
  } else if (httpMethod === 'GET') {
    color = '#38853C'
  } else if (httpMethod === 'DELETE') {
    color = '#D56A00'
  } else if (httpMethod === 'PUT') {
    color = '#CC3D3D'
  } else {
    color = '#4A596B'
  }
  const style: SxStyleProp = {
    ...styles.httpMethod,
    color,
  }

  return style
}
