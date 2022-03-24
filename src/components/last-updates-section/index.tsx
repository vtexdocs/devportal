import { Box, Flex, Text } from '@vtex/brand-ui'

import LastUpdatesCard, { CardProps } from '../last-updates-card'

import styles from './styles'

const updates: CardProps[] = [
  {
    action: {
      type: 'added',
      description:
        'Secure Proxy: An alternative option for card payment integrations',
      date: new Date('03/14/2022'),
    },
    updateType: 'release-notes',
  },
  {
    action: {
      type: 'fixed',
      description:
        'Secure Proxy: An alternative option for card payment integrations',
      date: new Date('03/11/2022'),
    },
    updateType: 'documentation-updates',
  },
]

const LastUpdatesSection = () => {
  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>Last Updates</Text>
      <Flex sx={styles.cardsContainer}>
        {updates.map((update) => (
          <LastUpdatesCard key={`${update.action.date}`} {...update} />
        ))}
      </Flex>
    </Box>
  )
}

export default LastUpdatesSection
