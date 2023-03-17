import { Fragment, useContext } from 'react'
import { Box, Text, Flex, Link, IconCaret } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import PageHeader from 'components/page-header'
import { getMessages } from 'utils/get-messages'
import image from '../../../../public/images/vtex-io-apps.png'
import styles from 'styles/documentation-landing-page'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  branch: string
}
import { WhatsNextDataElement } from 'utils/typings/types'
import WhatsNextCard from 'components/whats-next-card'
import Head from 'next/head'
import { PreviewContext } from 'utils/contexts/preview'

interface ICategoryListing {
  category: IChildrenListing
}

interface IChildrenListing {
  name: string
  slug: string
  origin: string
  type: string
  children: {
    name: string
    slug: string
    origin: string
    type: string
    children: []
  }[]
}

const AppsListing = ({ category }: ICategoryListing) => {
  const whatsNextData: WhatsNextDataElement[] = []
  category.children?.slice(0, 6).map((item) =>
    whatsNextData.push({
      title: item.name,
      description: '',
      linkTitle: 'See more',
      linkTo: `/docs/guides/${item.slug}`,
    })
  )

  return (
    <>
      <Text sx={styles.contentTitle}>{category.name}</Text>
      <Flex sx={styles.cardsContainer}>
        {whatsNextData.map((whatsNext) => (
          <WhatsNextCard {...whatsNext} key={whatsNext.title} />
        ))}
      </Flex>
      <Link sx={styles.seeMoreLink} href={`/docs/guides/${category.slug}`}>
        See more
        <IconCaret
          className="caret"
          color="#A1A8B3"
          direction="right"
          size={24}
        />
      </Link>
      <Box sx={styles.divider}></Box>
    </>
  )
}

const VTEXIOAppsPage: NextPage<Props> = ({ sidebarfallback, branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const messages = getMessages()
  const docs = sidebarfallback.find(
    (item: { documentation: string }) => item.documentation === 'VTEX IO Apps'
  )

  return (
    <>
      <Head>
        <title>{messages['vtex_io_apps_page.title']}</title>
        <meta
          property="og:title"
          content={messages['vtex_io_apps_page.subtitle']}
          key="title"
        />
      </Head>
      <Fragment>
        <PageHeader
          title={messages['vtex_io_apps_page.title']}
          description={messages['vtex_io_apps_page.subtitle']}
          imageUrl={image}
          imageAlt={messages['vtex_io_apps_page.title']}
        />
        <Box sx={styles.contentContainer}>
          {docs.categories.map((category: IChildrenListing) =>
            category.children.length > 0 ? (
              <AppsListing category={category} />
            ) : (
              ''
            )
          )}
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
  const sectionSelected = 'VTEX IO Apps'
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

export default VTEXIOAppsPage
