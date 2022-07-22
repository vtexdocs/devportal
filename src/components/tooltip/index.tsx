import { useEffect, useRef, useState } from 'react'
import { Box, Flex, TooltipProps, SxStyleProp } from '@vtex/brand-ui'

import CaretIcon from 'components/icons/caret'

import styles from './styles'
interface Props extends Pick<TooltipProps, 'children' | 'label' | 'placement'> {
  sx?: SxStyleProp
  isCard?: boolean
}

const Tooltip = ({ children, label, placement, sx, isCard }: Props) => {
  const box = useRef<HTMLDivElement>()
  const [boxWidth, setBoxWidth] = useState(0)
  const [boxHeight, setBoxHeight] = useState(0)
  const [boxOffsetLeft, setBoxOffsetLeft] = useState(0)
  const [boxOffsetTop, setBoxOffsetTop] = useState(0)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (box.current) {
      setBoxWidth(box.current.clientWidth)
      setBoxHeight(box.current.clientHeight)
    }
  }, [box.current, box.current?.clientWidth, box.current?.clientHeight])
  useEffect(() => {
    if (box.current) {
      setBoxOffsetLeft(box.current.offsetLeft)
      setBoxOffsetTop(box.current.offsetTop)
    }
  }, [box.current, box.current?.offsetLeft, box.current?.offsetTop])

  return (
    <Box>
      <Box
        ref={box}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </Box>
      {visible && (isCard ?? true) && (
        <Flex
          sx={styles.tooltipContainer(
            sx,
            placement || 'top',
            boxWidth,
            boxHeight,
            boxOffsetLeft,
            boxOffsetTop
          )}
        >
          <CaretIcon sx={styles.caret(placement || 'top')} />
          <Box sx={styles.labelStyle(isCard ?? false)}>{label}</Box>
        </Flex>
      )}
    </Box>
  )
}

export default Tooltip
