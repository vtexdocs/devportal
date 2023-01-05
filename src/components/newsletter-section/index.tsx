import { Box, Flex, Text } from '@vtex/brand-ui'

import Image from 'next/image'
import landingProduct from '../../../public/images/landing-product.png'
import styles from 'components/newsletter-section/styles'
import imgStyle from './styles.module.css'

import { getMessages } from 'utils/get-messages'

const NewsletterSection = () => {
  const messages = getMessages()

  return (
    <Box sx={styles.section}>
      <Box sx={styles.newsletter}>
        <Box sx={styles.newsletterContainer}>
          <Flex sx={styles.newsletterBackground}>
            <Flex sx={styles.newsletterBox}>
              <Text sx={styles.newsletterTitle}>
                {messages['landing_page_newsletter.title']}
              </Text>
              {/* <Text sx={styles.newsletterDescription}>
                {messages['landing_page_newsletter.description']}
              </Text>
              <Flex sx={styles.newsletterInputContainer}>
                <Box sx={styles.newsletterInputBox}>
                  <Input
                    sx={styles.newsletterInput}
                    id="newsletter-mail"
                    label="E-mail"
                    type={'email'}
                  ></Input>
                  <Text sx={styles.policyText}>
                    {messages['landing_page_newsletter.policyText']}
                    <Link sx={styles.policyLink}>
                      {messages['landing_page_newsletter.policyLink']}
                    </Link>
                  </Text>
                </Box>
                <Button sx={styles.newsletterButton} variant="primary">
                  {messages['landing_page_newsletter.Button']}
                </Button>
              </Flex> */}
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
