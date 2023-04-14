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
import { useContext } from 'react'
import { PreviewContext } from 'utils/contexts/preview'
import SupportSection from 'components/support-section'

interface Props {
  branch: string
}

const Home: Page<Props> = ({ branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)

  return (
    <>
      <Head>
        <title>VTEX Help Center</title>
        <meta property="og:title" content="VTEX Help Center" key="title" />
        <meta
          property="og:description"
          content="Build and extend your world of commerce with VTEX development platform and Core Commerce APIs."
          key="desc"
        />
        <meta
          property="og:image"
          content="https://cdn.jsdelivr.net/gh/vtexdocs/devportal@main/public/images/meta-image.png"
        />
      </Head>
      <Grid sx={styles.grid}>
        <NewsletterSection />
        <DocumentationSection />
        <LastUpdatesSection />
        <SupportSection />
        <EducationSection />
      </Grid>
    </>
  )
}

Home.hideSidebar = true

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}) => {
  const sidebarfallback = await getNavigation()
  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'
  return {
    props: {
      sidebarfallback,
      branch,
    },
  }
}

export default Home
