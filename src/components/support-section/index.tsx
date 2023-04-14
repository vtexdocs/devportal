import { Box, Flex, Text } from '@vtex/brand-ui'

import Image from 'next/image'
import landingProduct from '../../../public/images/Misc-Support-1.png'
import styles from './styles'
import WhatsNextCard from 'components/whats-next-card'
import { WhatsNextDataElement } from 'utils/typings/types'

import { getMessages } from 'utils/get-messages'

const SupportSection = () => {
  const messages = getMessages()

  const whatsNextData: WhatsNextDataElement[] = [
    {
      title: 'Known issues',
      description: 'Find all the identified issues and their solutions.',
      linkTitle: 'See more',
      linkTo: '/known-issues',
    },
    {
      title: 'Support plans',
      description:
        'See details of support plans available for each commercial plan.',
      linkTitle: 'See more',
      linkTo: '/support-plans',
    },
    {
      title: 'Status',
      description: 'See the platform history log.',
      linkTitle: 'See more',
      linkTo: 'https://status.vtex.com/',
    },
    {
      title: 'Health check',
      description: 'Check detailed real-time status.',
      linkTitle: 'See more',
      linkTo: 'http://healthcheck.vtex.com/',
    },
  ]

  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>{messages['landing_page_support.title']}</Text>
      <Flex sx={styles.innerContainer}>
        <Flex sx={styles.contentCards}>
          {whatsNextData.map((whatsNext) => (
            <WhatsNextCard {...whatsNext} key={whatsNext.title} />
          ))}
        </Flex>
        <Box sx={styles.contentImage}>
          <Image
            src={landingProduct}
            alt=""
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default SupportSection
