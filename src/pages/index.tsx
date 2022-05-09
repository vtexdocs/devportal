import type { NextPage } from 'next'
import { Grid } from '@vtex/brand-ui'

import NewsletterSection from 'components/newsletter-section'
import DocumentationSection from 'components/documentation-section'
import LastUpdatesSection from 'components/last-updates-section'
import EducationSection from 'components/education-section'

import Head from 'next/head'
import styles from 'styles/landing-page'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VTEX Developers</title>
      </Head>
      <Grid sx={styles.grid}>
        <NewsletterSection />
        <DocumentationSection />
        <LastUpdatesSection />
        <EducationSection />
      </Grid>
    </>
  )
}

export default Home
