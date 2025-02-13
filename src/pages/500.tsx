import Image from 'next/image'
import Head from 'next/head'
import type { Page } from 'utils/typings/types'
import { Box, Flex, Text, Button, Link } from '@vtex/brand-ui'
import styles from 'styles/error-page'
import fiveHundredImage from '../../public/images/500-illustration.png'
import { GetStaticProps } from 'next'
import getNavigation from 'utils/getNavigation'
import { useContext } from 'react'
import { PreviewContext } from 'utils/contexts/preview'
import { getFeedbackURL } from 'utils/get-url'
import { useRouter } from 'next/router'

interface Props {
  branch: string
}

const fiveHundredPage: Page<Props> = ({ branch }) => {
  const router = useRouter()
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const currentPage = router.asPath.split('?')[0]
  const feedbackUrl = `${getFeedbackURL()}https://developers.vtex.com${currentPage}&entry.358925425=Site+error`

  return (
    <>
      <Head>
        <title>500 - Internal Server Error</title>
      </Head>
      <Box sx={styles.mainContainer}>
        <Flex sx={styles.innerContainer}>
          <Box sx={styles.contentText}>
            <Text sx={styles.title}>500 - Internal server error</Text>
            <Text sx={styles.description}>
              Sorry, there was an error on this page. Please try again later or
              contact us if the problem persists.
            </Text>
            <Button sx={styles.button}>
              <Link sx={styles.buttonLink} href={feedbackUrl}>
                CONTACT US
              </Link>
            </Button>
          </Box>
          <Box sx={styles.content}>
            <Image
              alt="500 error"
              src={fiveHundredImage}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

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

export default fiveHundredPage
