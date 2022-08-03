import { Flex, Text, SxStyleProp } from '@vtex/brand-ui'
import { categoryStyle, categoryText, closeCategoryStyle } from './functions'
import { MethodType } from 'utils/typings/unionTypes'
import styles from './styles'
import CloseFilterIcon from 'components/icons/close-filter-icon'

export interface MethodCategoryProps {
  method: MethodType
  active: boolean
  origin: 'sidebar' | 'search' | 'filter'
  sx?: SxStyleProp
}

const MethodCategory = ({
  method,
  active,
  origin,
  sx,
}: MethodCategoryProps) => {
  return (
    <Flex sx={categoryStyle(method, active, sx)}>
      <Text sx={styles.text}>{categoryText(method, origin)}</Text>
      {origin === 'filter' && active && (
        <CloseFilterIcon
          className="filter-close-button"
          sx={closeCategoryStyle(method)}
        />
      )}
    </Flex>
  )
}

export default MethodCategory
