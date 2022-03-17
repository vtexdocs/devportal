import type { NextPage } from 'next'
import { Grid } from '@vtex/brand-ui'

import Header from 'components/header'
import NewsletterSection from 'components/newsletter'
import Footer from 'components/footer'

import styles from 'styles/landing-page'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Grid sx={styles.grid}>
        <NewsletterSection />
      </Grid>
      <Footer />
    </>
  )
}

export default Home
