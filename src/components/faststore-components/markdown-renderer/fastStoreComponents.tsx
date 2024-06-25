import React, { ReactChildren, useState } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import styles from './fastStoreComponentsStyle'
import * as usageComponents from 'components/faststore-components'
import * as components from '@faststore/ui'
import { SearchProvider } from '@faststore/sdk'

interface TabsProps {
  items: string[]
  defaultIndex?: string | number
  children: ReactChildren[]
}

const Tabs = ({ items, defaultIndex = 0, children }: TabsProps) => {
  const [selectedItem, setSelectedItem] = useState(Number(defaultIndex))
  return (
    <Box>
      <Flex sx={styles.tabItemContainer}>
        {items.map((item, index) => {
          return (
            <Flex
              key={index}
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
      {React.Children.toArray(children)[selectedItem]}
    </Box>
  )
}

const Tab = ({ children }: { children: ReactChildren }) => <Box>{children}</Box>

export default {
  Tabs,
  Tab,
  ...usageComponents,
  ...components,
  SearchProvider,
}
