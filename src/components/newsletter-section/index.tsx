import { Box, Flex, Text } from '@vtex/brand-ui'

import Image from 'next/image'
import landingProduct from '../../../public/images/Diversity-2.png'
import styles from 'components/newsletter-section/styles'
import imgStyle from './styles.module.css'

import { FormattedMessage } from 'react-intl'
import { SearchInput } from '@vtexdocs/components'

const NewsletterSection = () => {
  return (
    <Box sx={styles.section}>
      <Box sx={styles.newsletter}>
        <Box sx={styles.newsletterContainer}>
          <Flex sx={styles.newsletterBackground}>
            <Flex sx={styles.newsletterBox}>
              <Text sx={styles.newsletterTitle}>
                <FormattedMessage id="landing_page_newsletter.title" />
              </Text>
              <Box sx={styles.searchContainer}>
                <SearchInput />
              </Box>
            </Flex>
          </Flex>
          <div className={imgStyle.wrapper}>
            <div className={imgStyle.imageGradient}></div>
            <Image
              src={landingProduct}
              alt=""
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default NewsletterSection
