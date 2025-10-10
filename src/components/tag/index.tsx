import { SxStyleProp, Text } from '@vtex/brand-ui'

import styles from './styles'

const Tag = ({
  sx = {},
  children,
  color = 'Default',
  onClick,
}: {
  sx?: SxStyleProp
  children: React.ReactNode
  color?: 'Default' | 'Selected' | 'New' | 'Gray'
  onClick?: () => void
}) => {
  return (
    <Text
      sx={{ ...styles.tag, ...sx, ...styles.statusColors[color] }}
      onClick={onClick}
    >
      {children}
    </Text>
  )
}

export default Tag
