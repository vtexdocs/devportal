import Image from 'next/image'
import Head from 'next/head'
import type { Page } from 'utils/typings/types'
import { Box, Flex, Text, Button, Link } from '@vtex/brand-ui'
import styles from 'styles/error-page'
import fourOhFourImage from '../../public/images/404-illustration.png'
import getNavigation from 'utils/getNavigation'
import { GetStaticProps } from 'next'
import { useContext } from 'react'
import { PreviewContext } from 'utils/contexts/preview'
import { getFeedbackURL } from 'utils/get-url'
import { useRouter } from 'next/router'

interface Props {
  branch: string
}

const FourOhFour: Page<Props> = ({ branch }) => {
  const router = useRouter()
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const currentPage = router.asPath.split('?')[0]
  const feedbackUrl = `${getFeedbackURL()}https://developers.vtex.com${currentPage}`

  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <Box sx={styles.mainContainer}>
        <Flex sx={styles.innerContainer}>
          <Box sx={styles.contentText}>
            <Text sx={styles.title}>
              The content you are looking for was not found or does not exist
              anymore
            </Text>
            <Text sx={styles.description}>
              Search above to find what you need or contact us to report an
              error.
            </Text>
            <Button sx={styles.button}>
              <Link sx={styles.buttonLink} href={feedbackUrl}>
                CONTACT US
              </Link>
            </Button>
          </Box>
          <Box sx={styles.content}>
            <Image
              alt="404 error"
              src={fourOhFourImage}
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

export default FourOhFour
