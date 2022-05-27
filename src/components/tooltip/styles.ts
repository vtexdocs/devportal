import { SxStyleProp } from '@vtex/brand-ui'

type Placement = 'top' | 'right' | 'bottom' | 'left'

const tooltipContainer: (
  placement: Placement,
  width: number,
  height: number,
  x: number,
  y: number
) => SxStyleProp = (placement, width, height, x, y) => {
  const position = {
    bottom: {
      left: `${x + width / 2}px`,
      top: `${y + height + 3}px`,
    },
    left: {
      left: `${x - 1}px`,
      top: `${y + height / 2}px`,
    },
    top: {
      left: `${x + width / 2}px`,
      top: `${y - 3}px`,
    },
    right: {
      left: `${x + width + 1}px`,
      top: `${y + height / 2}px`,
    },
  }

  const translation = {
    bottom: 'translateX(-50%)',
    left: 'translateX(-100%) translateY(-50%)',
    top: 'translateX(-50%) translateY(-100%)',
    right: 'translateY(-50%)',
  }

  const direction = {
    bottom: 'column',
    left: 'row-reverse',
    top: 'column-reverse',
    right: 'row',
  }

  return {
    zIndex: '100',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    ...position[placement],
    transform: translation[placement],
    flexDirection: direction[placement],
  }
}

const caret: (placement: Placement) => SxStyleProp = (placement) => {
  const rotation = {
    bottom: 0,
    left: 90,
    top: 180,
    right: 270,
  }

  const translation = {
    bottom: 1,
    left: 3,
    top: 1,
    right: 3,
  }

  return {
    width: '8px',
    height: '4px',
    minWidth: 'initial',
    minHeight: 'initial',
    transform: `rotate(${rotation[placement]}deg) translateY(${translation[placement]}px)`,
  }
}

const labelContainer: SxStyleProp = {
  padding: '4px 8px',
  borderRadius: '4px',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '130%',
}

export default { tooltipContainer, caret, labelContainer }
