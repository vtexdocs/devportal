import { ReactChildren, useState } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import styles from './fastStoreComponentsStyle'

interface TabsProps {
  items: string[]
  defaultIndex: number
  children: ReactChildren[]
}

const Tabs = ({ items, defaultIndex, children }: TabsProps) => {
  const [selectedItem, setSelectedItem] = useState(Number(defaultIndex))
  return (
    <Box>
      <Flex sx={styles.tabItemContainer}>
        {items.map((item, index) => {
          return (
            <Flex
              sx={
                selectedItem === index ? styles.tabItemActive : styles.tabItem
              }
              onClick={() => setSelectedItem(index)}
            >
              {item}
            </Flex>
          )
        })}
      </Flex>
      {children[selectedItem]}
    </Box>
  )
}

const Tab = ({ children }: { children: ReactChildren }) => <Box>{children}</Box>

export default { Tabs, Tab }
