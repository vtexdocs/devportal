import { Box, Grid } from '@vtex/brand-ui'
import type { Page, UpdateElement } from 'utils/typings/types'

import NewsletterSection from 'components/newsletter-section'
import DocumentationSection from 'components/documentation-section'
import LastUpdatesSection from 'components/last-updates-section'
import EducationSection from 'components/education-section'
import { SubscriptionList } from '@vtexdocs/components'

import Head from 'next/head'
import styles from 'styles/landing-page'
import getNavigation from 'utils/getNavigation'
import { GetStaticProps } from 'next'
import { useContext } from 'react'
import { PreviewContext } from 'utils/contexts/preview'
import getReleasePaths from 'utils/getReleasePaths'
import getGithubFile from 'utils/getGithubFile'
import { serialize } from 'next-mdx-remote/serialize'

interface Props {
  branch: string
  releasesData: UpdateElement[]
}

const Home: Page<Props> = ({ branch, releasesData }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)

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
        <meta
          property="og:image"
          content="https://cdn.jsdelivr.net/gh/vtexdocs/devportal@main/public/images/meta-image.png"
        />
      </Head>
      <Grid sx={styles.grid}>
        <NewsletterSection />
        <DocumentationSection />
        <LastUpdatesSection releasesData={releasesData} />
        <EducationSection />
        <Box sx={styles.subscriptionList}>
          <SubscriptionList />
        </Box>
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
  const releasePaths = await getReleasePaths()
  const latestReleaseSlugs = Object.keys(releasePaths)
    .filter((slug) => slug.startsWith('20'))
    .sort((a, b) => b.localeCompare(a))
    .slice(0, 3)

  const releasesData = await Promise.all(
    latestReleaseSlugs.map(async (slug) => {
      const releaseContent = await getGithubFile(
        'vtexdocs',
        'dev-portal-content',
        'main',
        releasePaths[slug]
      )
      const serialized = await serialize(releaseContent, {
        parseFrontmatter: true,
      })

      return {
        ...serialized.frontmatter,
        slug: serialized.frontmatter?.slug || slug,
      }
    })
  )

  return {
    props: {
      sidebarfallback,
      branch,
      releasesData,
    },
  }
}

export default Home
