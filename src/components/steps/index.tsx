import { Box } from '@vtex/brand-ui'
import styles from './styles'
interface StepsProps {
  children: string
}
const Steps = ({ children }: StepsProps) => {
  return <Box sx={styles.steps}>{children}</Box>
}
export default Steps
