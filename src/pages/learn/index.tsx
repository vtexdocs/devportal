import { Fragment, useContext } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import PageHeader from 'components/page-header'
import { getMessages } from 'utils/get-messages'
import styles from 'styles/documentation-landing-page'
import Head from 'next/head'
import { PreviewContext } from 'utils/contexts/preview'
import image from '../../../public/images/learning.png'
import WhatsNextCard from 'components/whats-next-card'
import { WhatsNextDataElement } from 'utils/typings/types'
import Link from 'next/link'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  branch: string
}

const courses: WhatsNextDataElement[] = [
  {
    linkTo: '/learn/course-basic-blocks-lang-en',
    imgSrc:
      'https://appliancetheme.vtexassets.com/assets/app/src/store_block_course_icon___96162ef277cedddeacc76e2fb3f04ec5.svg',
    title: 'Getting started with basic Store Framework blocks',
    description:
      'Learn how to create your storefront using the foundational blocks of the Store Framework.',
  },
  {
    linkTo: '/learn/course-layout-blocks-lang-en#/',
    imgSrc:
      'https://appliancetheme.vtexassets.com/assets/app/src/store_block_course_icon___96162ef277cedddeacc76e2fb3f04ec5.svg',
    title: 'Designing advanced layouts with composition blocks',
    description:
      'Unlock the power of layout composition to build sophisticated storefronts.',
  },
  {
    linkTo: '/learn/course-store-block-lang-en#/',
    imgSrc:
      'https://appliancetheme.vtexassets.com/assets/app/src/store_block_course_icon___96162ef277cedddeacc76e2fb3f04ec5.svg',
    title: 'Developing custom blocks in VTEX IO',
    description:
      'Create tailored components using React, TypeScript, and GraphQL.',
  },
  {
    linkTo: '/learn/course-content-workflow-lang-en#/',
    imgSrc:
      'https://appliancetheme.vtexassets.com/assets/app/src/content_workflow_course_icon___636dd275082a178841e4df1764fbf8e1.svg',
    title: 'Customizing stores with VTEX IO CLI and Site Editor',
    description:
      'Use the VTEX IO CLI and Site Editor to configure, manage, and publish your storefront.',
  },
  {
    linkTo: '/learn/course-styles-course-lang-en#/',
    imgSrc:
      'https://appliancetheme.vtexassets.com/assets/app/src/styles_course_icon___e66a5085f6323e5feb92e3aada493d39.svg',
    title: 'Styling your store for a unique brand experience',
    description:
      'Customize your storefront’s look and feel using CSS and visual identity best practices.',
  },
  {
    linkTo: '/learn/course-store-performance-lang-en#/',
    imgSrc:
      'https://appliancetheme.vtexassets.com/assets/app/src/performance___6e393531676510783779281dca92ade0.svg',
    title: 'Optimizing storefront performance',
    description:
      'Improve site speed and responsiveness for better user engagement.',
  },
  {
    linkTo: '/learn/course-service-course-lang-en#/',
    imgSrc:
      'https://appliancetheme.vtexassets.com/assets/app/src/service_course_icon___6283464c6cfe69d5eee47f04a65097f7.svg',
    title: 'Creating backend services in VTEX IO',
    description:
      'Discover how to create powerful backend services using VTEX IO. Learn to export routes, handle events, and integrate seamlessly with internal and third-party systems.',
  },
  {
    linkTo: '/learn/course-calling-commerce-apis-lang-en#/',
    imgSrc:
      'https://appliancetheme.vtexassets.com/assets/app/src/commerce___3be244818b3406676036a346daedc0cd.svg',
    title: 'Using VTEX Core Commerce APIs in your app',
    description: 'Integrate and call APIs efficiently within VTEX IO apps.',
  },
  {
    linkTo: '/learn/course-admin-lang-en#/',
    imgSrc:
      'https://appliancetheme.vtexassets.com/assets/app/src/teste___8467f5dba2a1d42e8176e0af56ae5612.svg',
    title: 'Extending VTEX Admin with custom apps',
    description:
      'Extend the VTEX Admin by developing custom apps and features.',
  },
]

const LearnPage: NextPage<Props> = ({ branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const messages = getMessages()
  return (
    <>
      <Head>
        <title>Learning Center</title>
        <meta
          property="og:title"
          content={messages['api_guides_page.subtitle']}
          key="title"
        />
        <meta name="docsearch:doctype" content="Guides" />
        <meta
          name="docsearch:doctitle"
          content={messages['api_guides_page.title']}
        />
      </Head>
      <Fragment>
        <PageHeader
          title="Learning Hub"
          description="Learn at your own pace with guided courses and practical resources."
          imageUrl={image}
          imageAlt={messages['api_reference_page.title']}
        />
        <Box sx={styles.contentContainer}>
          <Box className="styles_blockquote styles_blockquoteWarning">
            <Box sx={{ fontSize: 16 }}>
              This content was migrated from the{' '}
              <Link href="https://learn.vtex.com/">VTEX Learning Center</Link>{' '}
              and is no longer being actively maintained. For the most accurate
              and up-to-date information, please check the{' '}
              <Link href="https://developers.vtex.com/docs/app-development">
                official documentation
              </Link>
              .
            </Box>
          </Box>
          <Flex sx={styles.cardsContainer}>
            {courses.map((course, index) => (
              <WhatsNextCard key={index} {...course} />
            ))}
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
  const sectionSelected = 'Learning Center'

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

export default LearnPage
