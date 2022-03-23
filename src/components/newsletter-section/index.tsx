import { Box, Button, Flex, Input, Link, Text } from '@vtex/brand-ui'

import Image from 'next/image'
import landingProduct from 'public/images/landing-product.png'
import styles2 from 'components/newsletter-section/style'
import styles from './index.module.css'

const NewsletterSection = () => {
  return (
    <Box sx={styles2.newsletterContainer}>
      <Flex sx={styles2.newsletterBackground}>
        <Flex sx={styles2.newsletterBox}>
          <Text sx={styles2.newsletterTitle}>
            Build first-class commerce experiences with VTEX.
          </Text>
          <Text sx={styles2.newsletterDescription}>
            Subscribe to our developer newsletter and stay on top of the
            practices and technologies that are transforming commerce.
          </Text>
          <Flex sx={styles2.newsletterInputBox}>
            <Input
              sx={styles2.newsletterInput}
              id="newsletter-mail"
              label="E-mail"
              type={'email'}
            ></Input>
            <Button variant="primary">Subscribe</Button>
          </Flex>
          <Text sx={styles2.policyText}>
            Read our <Link sx={styles2.policyLink}>privacy policy</Link>
          </Text>
        </Flex>
      </Flex>
      <div className={styles.wrapper}>
        <Image src={landingProduct} />
      </div>
    </Box>
  )
}

export default NewsletterSection
