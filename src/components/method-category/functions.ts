import { SxStyleProp } from '@vtex/brand-ui'
import { MethodType } from 'utils/typings/unionTypes'

import styles from './styles'

export const methodsColors = {
  POST: {
    border: '1px solid #7CBBEA',
    color: '#2978B5',
    background: '#DEECF7',
  },
  GET: {
    border: '1px solid #83D187',
    color: '#38853C',
    background: '#DFF1E0',
  },
  PUT: {
    border: '1px solid #F5AE70',
    color: '#D56A00',
    background: '#FFEBD7',
  },
  DELETE: {
    border: '1px solid #F49494',
    color: '#CC3D3D',
    background: '#F8E3E3',
  },
  PATCH: {
    border: '1px solid #afa871',
    color: '#6C6314',
    background: '#e9e7da',
  },
}

export const categoryStyle = (
  method: MethodType,
  active: boolean,
  sx?: SxStyleProp
): SxStyleProp => {
  const categoryColors = methodsColors[method] || {
    border: '1px solid #F49494',
    color: '#CC3D3D',
    background: '#F8E3E3',
  }

  const categoryStyle: SxStyleProp = active
    ? {
        ...styles.container,
        ...categoryColors,
        ...sx,
        ':hover': {
          '.filter-close-button': {
            rect: {
              fill: categoryColors.color,
            },
            path: {
              stroke: '#DEECF7',
            },
          },
        },
      }
    : {
        ...styles.container,
        color: categoryColors.color,
        ...sx,
      }

  return categoryStyle
}

export const categoryText = (method: MethodType, origin: string): string => {
  const textPascalCase = method[0] + method.slice(1).toLowerCase()
  if (origin == 'filter') return textPascalCase
  return textPascalCase.slice(0, 2)
}

export const closeCategoryStyle = (method: MethodType) => {
  const categoryColors = methodsColors[method]
  const categoryStyle: SxStyleProp = {
    ...styles.closeIcon,
    rect: {
      fill: 'transparent',
    },
    path: {
      stroke: categoryColors.color,
    },
  }

  return categoryStyle
}
