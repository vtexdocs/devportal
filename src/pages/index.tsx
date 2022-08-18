import type { NextPage } from 'next'
import { Grid } from '@vtex/brand-ui'

import NewsletterSection from 'components/newsletter-section'
import DocumentationSection from 'components/documentation-section'
import LastUpdatesSection from 'components/last-updates-section'
import EducationSection from 'components/education-section'
import SubscribeNewsletterSection from 'components/subscribe-newsletter-section'

import Head from 'next/head'

import { Box } from '@vtex/brand-ui'
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
        <Box sx={styles.divider}>
          <hr />
        </Box>
        <SubscribeNewsletterSection containerType={'landing-page'} />
      </Grid>
    </>
  )
}

export default Home
