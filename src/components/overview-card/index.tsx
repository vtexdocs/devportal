import styles from './styles'
import { Flex, Box } from '@vtex/brand-ui'
import * as Icons from './icons'
import type { IconComponent } from 'utils/typings/types'

interface IconsI {
  name: string
  Icon: IconComponent
}

const IconsMap: IconsI[] = [
  {
    name: 'StorageUnit',
    Icon: Icons.StorageUnit,
  },
  {
    name: 'Board',
    Icon: Icons.Board,
  },
  {
    name: 'Integration',
    Icon: Icons.Integration,
  },
  {
    name: 'SearchList',
    Icon: Icons.SearchList,
  },
  {
    name: 'SearchDetails',
    Icon: Icons.SearchDetails,
  },
  {
    name: 'SwitchArrows',
    Icon: Icons.SwitchArrows,
  },
  {
    name: 'ChangeCart',
    Icon: Icons.ChangeCart,
  },
  {
    name: 'ToStore',
    Icon: Icons.ToStore,
  },
  {
    name: 'PaymentHand',
    Icon: Icons.PaymentHand,
  },
  {
    name: 'GlobeCart',
    Icon: Icons.GlobeCart,
  },
  {
    name: 'StoreCart',
    Icon: Icons.StoreCart,
  },
  {
    name: 'List',
    Icon: Icons.List,
  },
  {
    name: 'Blocks',
    Icon: Icons.Blocks,
  },
  {
    name: 'StoreData',
    Icon: Icons.StoreData,
  },
  {
    name: 'Cart',
    Icon: Icons.Cart,
  },
  {
    name: 'FileConfiguration',
    Icon: Icons.FileConfiguration,
  },
  {
    name: 'Platform',
    Icon: Icons.Platform,
  },
  {
    name: 'RestApis',
    Icon: Icons.RestApis,
  },
  {
    name: 'Catalog',
    Icon: Icons.Catalog,
  },
  {
    name: 'Orders',
    Icon: Icons.Orders,
  },
  {
    name: 'Checkout',
    Icon: Icons.Checkout,
  },
  {
    name: 'Payments',
    Icon: Icons.Payments,
  },
  {
    name: 'Promotions',
    Icon: Icons.Promotions,
  },
  {
    name: 'Pricing',
    Icon: Icons.Pricing,
  },
  {
    name: 'AccountManagement',
    Icon: Icons.AccountManagement,
  },
  {
    name: 'SearchStore',
    Icon: Icons.SearchStore,
  },
]

const getIcon = (name: string) => {
  return IconsMap.find((icon) => icon.name === name)?.Icon
}

//Interfaces
interface OverviewCardProps {
  icon: string
  children: string
}

const OverviewCard = ({ icon, children }: OverviewCardProps) => {
  const Icon = getIcon(icon)
  return (
    <Flex sx={styles.overviewCard}>
      {Icon && <Icon sx={styles.overviewIcon} />}
      <Box>{children}</Box>
    </Flex>
  )
}

export default OverviewCard
