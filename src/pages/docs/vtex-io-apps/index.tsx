import { Fragment } from 'react'
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
}
import { WhatsNextDataElement } from 'utils/typings/types'
import WhatsNextCard from 'components/whats-next-card'

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
      link: {
        title: 'See more',
        to: `/docs/api-guides/${item.slug}`,
      },
    })
  )

  return (
    <>
      <Text sx={styles.contentTitle}>{category.name}</Text>
      <Flex sx={styles.cardsContainer}>
        {whatsNextData.map((whatsNext) => (
          <WhatsNextCard {...whatsNext} />
        ))}
      </Flex>
      <Link sx={styles.seeMoreLink} href={`/docs/api-guides/${category.slug}`}>
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

const VTEXIOAppsPage: NextPage<Props> = ({ sidebarfallback }) => {
  const messages = getMessages()
  const docs = sidebarfallback.find(
    (item: { documentation: string }) => item.documentation === 'VTEX IO Apps'
  )

  return (
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'VTEX IO Apps'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
    },
  }
}

export default VTEXIOAppsPage
