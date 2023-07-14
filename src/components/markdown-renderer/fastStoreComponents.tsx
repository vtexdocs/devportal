import { ReactChildren, useState } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import styles from './fastStoreComponentsStyle'
import {
  Badge,
  DiscountBadge,
  Button,
  IconButton,
  BuyButton,
  LinkButton,
  Icon,
  Price,
  Slider,
  PriceRange,
  Checkbox,
  CheckboxField,
  Input,
  InputField,
  Label,
  Link,
  List,
  Loader,
  Overlay,
  Radio,
  RadioField,
  Select,
  SelectField,
  Skeleton,
  SROnly,
  Navbar,
  UIProvider,
  RegionBar,
  RegionModal,
  SearchProducts,
  SearchProductItem,
  SearchProductItemImage,
  SearchProductItemContent,
  SearchAutoComplete,
  SearchAutoCompleteTerm,
  SearchHistory,
  SearchHistoryTerm,
  SearchTop,
  SearchTopTerm,
  SearchInputField,
} from '@faststore/ui'
import {
  OverviewSection,
  SectionItem,
  SectionList,
  TokenDivider,
  TokenRow,
  TokenTable,
  ButtonLoading,
  PriceRangeUsage,
  NavbarUsage,
  NavbarLinksUsage,
  NavbarSliderUsage,
  SearchDropdownUsage,
  SearchInputUsage,
} from 'components/faststore-components'

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

const Steps = ({ children }: { children: ReactChildren }) => (
  <Box>{children}</Box>
)

export default {
  Tabs,
  Tab,
  Steps,
  Badge,
  DiscountBadge,
  OverviewSection,
  SectionItem,
  SectionList,
  TokenTable,
  TokenRow,
  TokenDivider,
  Button,
  ButtonLoading,
  BuyButton,
  Icon,
  IconButton,
  LinkButton,
  Price,
  Slider,
  PriceRange,
  PriceRangeUsage,
  Checkbox,
  CheckboxField,
  Input,
  InputField,
  Label,
  Link,
  List,
  Loader,
  Overlay,
  Radio,
  RadioField,
  Select,
  SelectField,
  Skeleton,
  SROnly,
  Navbar,
  UIProvider,
  NavbarUsage,
  NavbarLinksUsage,
  NavbarSliderUsage,
  RegionBar,
  RegionModal,
  SearchProducts,
  SearchProductItem,
  SearchProductItemImage,
  SearchProductItemContent,
  SearchAutoComplete,
  SearchAutoCompleteTerm,
  SearchHistory,
  SearchHistoryTerm,
  SearchTop,
  SearchTopTerm,
  SearchDropdownUsage,
  SearchInputUsage,
  SearchInputField,
}
