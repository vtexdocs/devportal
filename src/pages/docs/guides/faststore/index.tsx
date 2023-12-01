import Image from 'next/image'
import { Fragment, useContext } from 'react'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import { PreviewContext } from 'utils/contexts/preview'
import { getMessages } from 'utils/get-messages'
import image from '../../../../public/images/faststore.webp'
import rocketImage from '../../../../public/images/rocket.webp'
import codeImage from '../../../../public/images/code.webp'
import graphImage from '../../../../public/images/graph.webp'
import dataImage from '../../../../public/images/faststore-data.webp'
import manageImage from '../../../../public/images/faststore-manage.webp'
import styles from 'styles/documentation-landing-page'
import Head from 'next/head'
import PageHeader from 'components/page-header'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'
import Link from 'next/link'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  branch: string
}

const FastStorePage: NextPage<Props> = ({ branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const messages = getMessages()
  return (
    <>
      <Head>
        <title>{messages['faststore_page.title']}</title>
        <meta
          property="og:title"
          content={messages['faststore_page.subtitle']}
          key="title"
        />
        <meta name="docsearch:doctype" content="Guides" />
        <meta
          name="docsearch:doctitle"
          content={messages['faststore_page.title']}
        />
      </Head>
      <Fragment>
        <PageHeader
          title={messages['faststore_page.title']}
          description={messages['faststore_page.subtitle']}
          imageUrl={image}
          imageAlt={messages['faststore_page.title']}
        />
        <Box sx={styles.contentContainer}>
          <Link href="https://starter.vtex.app/" legacyBehavior>
            <Box sx={styles.boxTip}>
              <Text sx={styles.boxTitle}>Live Demo</Text>
              <Text>
                In the ecommerce world, speed matters. That's why we've built
                FastStore: an open-source toolkit to create blazing-fast
                storefronts that convert.
              </Text>
              <Flex sx={styles.linkContainer}>
                <Text sx={styles.link} className="link">
                  View Live Demo
                </Text>
                <IconCaret
                  className="caret"
                  color="#A1A8B3"
                  direction="right"
                  size={16}
                />
              </Flex>
            </Box>
          </Link>
          <Box sx={styles.divider}></Box>
          <Flex sx={styles.grid}>
            <Box sx={styles.gridElement}>
              <Image
                src={rocketImage}
                alt={''}
                style={{
                  maxWidth: '40px',
                  height: 'auto',
                }}
              />
              <Text sx={styles.gridTitle}>
                Start fast with Starters optimized for performance
              </Text>
              <Text sx={styles.gridContent}>
                Quickly get your next FastStore website up and running with
                Starters optimized for performance.
              </Text>
            </Box>
            <Box sx={styles.gridElement}>
              <Image
                src={codeImage}
                alt={''}
                style={{
                  maxWidth: '40px',
                  height: 'auto',
                }}
              />
              <Text sx={styles.gridTitle}>
                Build fast with familiar technologies
              </Text>
              <Text sx={styles.gridContent}>
                Use your preferred tech stack and explore your creativity to
                build unique digital commerce storefronts.
              </Text>
            </Box>
            <Box sx={styles.gridElement}>
              <Image
                src={graphImage}
                alt={''}
                style={{
                  maxWidth: '40px',
                  height: 'auto',
                }}
              />
              <Text sx={styles.gridTitle}>
                Stay fast with Jamstack and Git workflows
              </Text>
              <Text sx={styles.gridContent}>
                Leverage the power of Jamstack to make data-driven decisions
                around performance and code quality.
              </Text>
            </Box>
          </Flex>
          <Box sx={styles.divider}></Box>
          <Text sx={styles.contentTitle}>Ecommerce-focused UI components</Text>
          <Link href="/docs/faststore/components-index" legacyBehavior>
            <Box sx={styles.boxTip}>
              <Text>
                Use FastStore components to create modern storefronts that
                perform great everywhere.
              </Text>
              <Flex sx={styles.linkContainer}>
                <Text sx={styles.link} className="link">
                  Explore our components
                </Text>
                <IconCaret
                  className="caret"
                  color="#A1A8B3"
                  direction="right"
                  size={16}
                />
              </Flex>
            </Box>
          </Link>
          <Box sx={styles.divider}></Box>
          <Flex sx={styles.grid}>
            <Flex sx={styles.gridElement}>
              <Image
                alt="Data overview"
                src={dataImage}
                style={{
                  alignSelf: 'center',
                }}
              />
            </Flex>
            <Box sx={styles.gridElement}>
              <Text sx={styles.contentTitle}>
                Flexible and extensible GraphQL schemas
              </Text>
              <Text sx={styles.subtitle}>
                Deliver seamless experiences everywhere
              </Text>
              <Text sx={styles.contentDescription}>
                A Backend For Frontend (BFF) layer for you to perform operations
                more effectively at the server and overcome shortcomings from
                REST APIs.
              </Text>
              <Text sx={styles.subtitle}>Orchestrate your data</Text>
              <Text sx={styles.contentDescription}>
                Use our GraphQL data layer to connect to your ecommerce provider
                and extend it to fetch data from external services.
              </Text>
            </Box>
          </Flex>
          <Box sx={styles.divider}></Box>
          <Flex>
            <Box>
              <Text sx={styles.contentTitle}>
                Easily manage all meaningful states of your store
              </Text>
              <Text sx={styles.contentTitle}>
                Improve your sales with Google Analytics 4
              </Text>
              <Text sx={styles.contentDescription}>
                Use our hooks and utils to quickly integrate your website with
                Google Analytics 4 and make data-driven decisions.
              </Text>
              <Text sx={styles.contentTitle}>
                Handle side effects to deliver better experiences
              </Text>
              <Text sx={styles.contentDescription}>
                Refer to our SDKs to build tailor-made solutions and deliver a
                better UX for your shoppers..
              </Text>
            </Box>
            <Flex>
              <Image
                alt="Manage states"
                src={manageImage}
                style={{
                  alignSelf: 'center',
                }}
              />
            </Flex>
          </Flex>
        </Box>
      </Fragment>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}) => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'FastStore'

  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
      branch,
    },
  }
}

export default FastStorePage
