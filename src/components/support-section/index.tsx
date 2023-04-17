import { Box, Flex, Text } from '@vtex/brand-ui'

import Image from 'next/image'
import landingProduct from '../../../public/images/Misc-Support-1.png'
import styles from './styles'
import WhatsNextCard from 'components/whats-next-card'
import { WhatsNextDataElement } from 'utils/typings/types'
import { FormattedMessage, useIntl } from 'react-intl'

const SupportSection = () => {
  const intl = useIntl()
  const whatsNextData: WhatsNextDataElement[] = [
    {
      title: intl.formatMessage({
        id: 'known_issues.title',
      }),
      description: intl.formatMessage({
        id: 'known_issues.description',
      }),
      linkTitle: 'See more',
      linkTo: '/known-issues',
    },
    {
      title: intl.formatMessage({
        id: 'support_plans.title',
      }),
      description: intl.formatMessage({
        id: 'support_plans.description',
      }),
      linkTitle: 'See more',
      linkTo: '/support-plans',
    },
    {
      title: intl.formatMessage({
        id: 'status.title',
      }),
      description: intl.formatMessage({
        id: 'status.description',
      }),
      linkTitle: 'See more',
      linkTo: 'https://status.vtex.com/',
    },
    {
      title: intl.formatMessage({
        id: 'health_check.title',
      }),
      description: intl.formatMessage({
        id: 'health_check.description',
      }),
      linkTitle: 'See more',
      linkTo: 'http://healthcheck.vtex.com/',
    },
  ]

  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        <FormattedMessage id="landing_page_support.title" />
      </Text>
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
