import { useEffect, useRef, useState } from 'react'
import { Box, Flex, TooltipProps } from '@vtex/brand-ui'

import CaretIcon from 'components/icons/caret'

import styles from './styles'

type Props = Pick<TooltipProps, 'children' | 'label' | 'placement'>

const Tooltip = ({ children, label, placement }: Props) => {
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
      {visible && (
        <Flex
          sx={styles.tooltipContainer(
            placement || 'top',
            boxWidth,
            boxHeight,
            boxOffsetLeft,
            boxOffsetTop
          )}
        >
          <CaretIcon sx={styles.caret(placement || 'top')} />
          <Box sx={styles.labelContainer}>{label}</Box>
        </Flex>
      )}
    </Box>
  )
}

export default Tooltip
