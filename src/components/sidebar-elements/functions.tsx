import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

export const styleByLevelNormal = (level: number, icon: boolean) => {
  const pl = 8 + (icon ? level * 4 : (level - 1) * 20 + 14)
  const borderLeft = icon ? 'none' : level >= 2 ? '1px solid #E7E9EE' : ''
  const normal: SxStyleProp = {
    ...styles.elementContainer,
    paddingLeft: `${pl}px`,
    a: {
      borderLeft,
    },
  }

  return normal
}

export const textStyle = (active: boolean, icon: boolean) => {
  const paddingLeft = icon ? '4px' : '16px'
  if (active) {
    const textStyleActive: SxStyleProp = {
      ...styles.elementActive,
      paddingLeft,
    }
    return textStyleActive
  }
  const textStyle: SxStyleProp = {
    ...styles.elementText,
    paddingLeft,
  }

  return textStyle
}
