import type { NextPage } from 'next'
import { Box, Button, Flex, Grid, Input, Text } from '@vtex/brand-ui'

import Header from '../components/header'

import LandingProduct from 'public/images/landingProduct'

import styles from 'styles/landing-page'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Grid sx={styles.grid}>
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
                ></Input>
                <Button variant="primary">Subscribe</Button>
              </Flex>
            </Flex>
          </Flex>
          <LandingProduct sx={styles.image} />
        </Box>
        <h2>Ola</h2>
      </Grid>
    </>
  )
}

export default Home
