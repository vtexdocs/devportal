import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

export const styleByLevelNormal = (level: number, icon: boolean) => {
  const ml = 8 + (icon ? level * 24 : (level - 1) * 24 + 12)
  const borderLeft = icon ? 'none' : '1px solid #E7E9EE'
  const normal: SxStyleProp = {
    marginLeft: `${ml}px`,
    borderLeft,
  }

  return normal
}

export const textStyle = (active: boolean, icon: boolean) => {
  const ml = icon ? '4px' : '16px'
  if (active) {
    const textStyleActive: SxStyleProp = {
      ...styles.elementActive,
      ml,
    }
    return textStyleActive
  }
  const textStyle: SxStyleProp = {
    ...styles.elementText,
    ml,
  }

  return textStyle
}
