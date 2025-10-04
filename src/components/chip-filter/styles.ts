import { SxStyleProp } from '@vtex/brand-ui'
import { ActionType } from 'components/last-updates-card/functions'

const chipButtonWrapper: SxStyleProp = {
  display: 'flex',
  userSelect: 'none',
  width: '100%',
}

const chipsContainer: SxStyleProp = {
  margin: '12px 0px 32px 0px',
  padding: '0 16px',
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  overflow: 'scroll',
  scrollBehavior: 'smooth',
  display: 'flex',
  alignItems: 'center',
}

const optionsContainer: SxStyleProp = {
  display: 'flex',
  gap: '8px',
}

const chip: SxStyleProp = {
  fontSize: '12px',
  height: '24px',
  textWrap: 'nowrap',
  padding: '3px 7px',
  borderRadius: '24px',
  textTransform: 'none',
  ':hover': {
    textDecoration: 'none',
  },
}

const activeChip: SxStyleProp = {
  ...chip,
  backgroundColor: 'rgb(218, 218, 218)',
  border: '1px solid rgb(160, 160, 160)',
}

const inactiveChip: SxStyleProp = {
  ...chip,
  backgroundColor: '#f4f4f4',
  border: '1px solid #dddddd',
}

const arrowButton: SxStyleProp = {
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '50%',
  fontWeight: '600',
  fontSize: '16px',
  padding: '0 8px',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
}

const rightArrowBlur: SxStyleProp = {
  maxWidth: '40px',
  minWidth: '20px',
  width: '5vw',
  background:
    'linear-gradient(to left, rgba(255,255,255,80%) 30%, rgba(255, 255, 255, 1%))',
}

const leftArrowBlur: SxStyleProp = {
  maxWidth: '40px',
  minWidth: '20px',
  width: '5vw',
  background:
    'linear-gradient(to right, rgba(255,255,255,80%) 30%, rgba(255, 255, 255, 1%))',
}

const leftArrowContainer: SxStyleProp = {
  position: 'relative',
  display: 'flex',
  flexShrink: '0',
  left: 'clamp(20px, 2.5vw, 30px)',
  zIndex: '2000',
}

const rightArrowContainer: SxStyleProp = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row-reverse',
  flexShrink: '0',
  right: 'clamp(20px, 2.5vw, 30px)',
  zIndex: '2000',
}

const articlesAmount: SxStyleProp = {
  backgroundColor: '#fff',
  padding: '2px 8px',
  margin: '0 2px 0 8px',
  borderRadius: '8px',
  fontSize: '0.8rem',
}

// Estilos personalizados para cada categoria
const getCategoryStyles = (
  category: ActionType,
  isActive: boolean
): SxStyleProp => {
  const categoryColors = {
    added: {
      active: {
        color: '#3A6E32',
        backgroundColor: '#DFF5DB',
        border: '1px solid #9FCDB4',
      },
      inactive: {
        ...inactiveChip,
        color: '#3A6E32',
      },
    },
    deprecated: {
      active: {
        color: '#979797',
        backgroundColor: '#E9E9E9',
        border: '1px solid #979797',
      },
      inactive: {
        ...inactiveChip,
        color: '#979797',
      },
    },
    fixed: {
      active: {
        backgroundColor: '#DEE8FE',
        color: '#2953B2',
        border: '1px solid #2953B2',
      },
      inactive: {
        ...inactiveChip,
        color: '#2953B2',
      },
    },
    improved: {
      active: {
        backgroundColor: '#FFF3DA',
        color: '#F5781E',
        border: '1px solid #FAB42B',
      },
      inactive: {
        ...inactiveChip,
        color: '#F5781E',
      },
    },
    removed: {
      active: {
        backgroundColor: '#FFDFDB',
        color: '#F83D24',
        border: '1px solid #F83D24',
      },
      inactive: {
        ...inactiveChip,
        color: '#F83D24',
      },
    },
    info: {
      active: {
        backgroundColor: '#E0F2F1',
        color: '#3A6E32',
        border: '1px solid #3A6E32',
      },
      inactive: {
        ...inactiveChip,
        color: '#3A6E32',
      },
    },
  }

  type CategoryColorKey = keyof typeof categoryColors
  const effectiveCategory: CategoryColorKey =
    category in categoryColors ? (category as CategoryColorKey) : 'info'

  const categoryStyle = categoryColors[effectiveCategory]
  const style = isActive ? categoryStyle.active : categoryStyle.inactive

  return {
    ...chip,
    ...style,
  }
}

export default {
  leftArrowBlur,
  rightArrowBlur,
  inactiveChip,
  activeChip,
  arrowButton,
  chipsContainer,
  optionsContainer,
  chipButtonWrapper,
  leftArrowContainer,
  rightArrowContainer,
  articlesAmount,
  getCategoryStyles,
}
