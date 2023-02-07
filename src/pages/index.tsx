import { Grid } from '@vtex/brand-ui'
import type { Page } from 'utils/typings/types'

import NewsletterSection from 'components/newsletter-section'
import DocumentationSection from 'components/documentation-section'
import LastUpdatesSection from 'components/last-updates-section'
import EducationSection from 'components/education-section'

import Head from 'next/head'
import styles from 'styles/landing-page'
import getNavigation from 'utils/getNavigation'
import { GetStaticProps } from 'next'

const Home: Page = () => {
  return (
    <>
      <Head>
        <title>VTEX Developers</title>
        <meta property="og:title" content="VTEX Developers" key="title" />
        <meta
          property="og:description"
          content="Build and extend your world of commerce with VTEX development platform and Core Commerce APIs."
          key="desc"
        />
        <meta property="og:image" content="images/meta-image.png" />
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

Home.hideSidebar = true

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()

  return {
    props: {
      sidebarfallback,
    },
  }
}

export default Home
