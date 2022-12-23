import styles from './styles'
import type { ReactElement } from 'react'
import { Box } from '@vtex/brand-ui'
interface Props {
  children: ReactElement[]
}

const Layout = ({ children }: Props) => {
  return <Box sx={styles.container}>{children}</Box>
}

export default Layout
