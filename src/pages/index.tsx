import type { NextPage } from 'next'
import { Grid } from '@vtex/brand-ui'

import Header from 'components/header'
import NewsletterSection from 'components/newsletter-section'
import DocumentationSection from 'components/documentation-section'
import LastUpdatesSection from 'components/last-updates-section'
import EducationSection from 'components/education-section'
import Footer from 'components/footer'

import styles from 'styles/landing-page'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Grid sx={styles.grid}>
        <NewsletterSection />
        <DocumentationSection />
        <LastUpdatesSection />
        <EducationSection />
      </Grid>
      <Footer />
    </>
  )
}

export default Home
