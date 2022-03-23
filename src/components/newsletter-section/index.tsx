import { Box, Button, Flex, Input, Link, Text } from '@vtex/brand-ui'

import Image from 'next/image'
import landingProduct from 'public/images/landing-product.png'
import styles from 'components/newsletter-section/style'
import imgStyle from './index.module.css'

const NewsletterSection = () => {
  return (
    <Box sx={styles.newsletterContainer}>
      <Flex sx={styles.newsletterBackground}>
        <Flex sx={styles.newsletterBox}>
          <Text sx={styles.newsletterTitle}>
            Build first-class commerce experiences with VTEX.
          </Text>
          <Text sx={styles.newsletterDescription}>
            Subscribe to our developer newsletter and stay on top of the
            practices and technologies that are transforming commerce.
          </Text>
          <Flex sx={styles.newsletterInputBox}>
            <Input
              sx={styles.newsletterInput}
              id="newsletter-mail"
              label="E-mail"
              type={'email'}
            ></Input>
            <Button variant="primary">Subscribe</Button>
          </Flex>
          <Text sx={styles.policyText}>
            Read our <Link sx={styles.policyLink}>privacy policy</Link>
          </Text>
        </Flex>
      </Flex>
      <div className={imgStyle.wrapper}>
        <Image src={landingProduct} />
      </div>
    </Box>
  )
}

export default NewsletterSection
