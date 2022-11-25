import styles from './styles.module.css'
import type { ReactElement } from 'react'
interface Props {
  children: ReactElement[]
}

const Layout = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>
}

export default Layout
