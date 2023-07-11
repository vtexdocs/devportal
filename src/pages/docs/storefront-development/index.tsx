import Link from 'next/link'
import { Fragment, useContext } from 'react'
import { Box, Flex, Text, IconCaret } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import PageHeader from 'components/page-header'
import { getMessages } from 'utils/get-messages'
import image from '../../../../public/images/storefront-development.png'
import styles from 'styles/documentation-landing-page'
import WhatsNextCard from 'components/whats-next-card'
import { WhatsNextDataElement } from 'utils/typings/types'
import Head from 'next/head'
import { PreviewContext } from 'utils/contexts/preview'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  branch: string
}

const getStartedData: WhatsNextDataElement[] = [
  {
    title: 'Get started',
    description:
      'Set up your development environment and start creating unique storefronts.',
    linkTitle: 'See more',
    linkTo: '/docs/guides/getting-started-3',
  },
  {
    title: 'Explore our pre-built components',
    description:
      'Use our pre-built and reusable components to quickly compose your storefront.',
    linkTitle: 'See more',
    linkTo: '/docs/vtex-io-apps',
  },
  {
    title: 'Create store templates',
    description:
      'Configure block templates to create PLPs, PDPs and landing pages.',
    linkTitle: 'See more',
    linkTo:
      '/docs/guides/vtex-io-documentation-building-a-carousel-using-slider-layout',
  },
  {
    title: 'Style your storefront',
    description:
      'Style your storefront blocks and express your brand identity.',
    linkTitle: 'See more',
    linkTo: '/docs/guides/vtex-io-documentation-customizing-your-stores-icons',
  },
  {
    title: "Set up your store's pages",
    description:
      "Manage URL redirects and set up your store's routes and pages.",
    linkTitle: 'See more',
    linkTo:
      '/docs/guides/vtex-io-documentation-associating-a-custom-page-to-a-content-type',
  },
  {
    title: 'Go live with your store',
    description:
      'Deploy your storefront and make it publicly available to shoppers.',
    linkTitle: 'See more',
    linkTo: '/docs/guides/vtex-io-documentation-go-live',
  },
]

const goBeyondData: WhatsNextDataElement[] = [
  {
    title: 'A/B testing',
    description: "Optimize your store's conversion rates by running A/B tests.",
    linkTitle: 'See more',
    linkTo: '/docs/guides/vtex-io-documentation-running-native-ab-testing',
  },
  {
    title: 'SEO',
    description: "Take action on enhancing your store's SEO.",
    linkTitle: 'See more',
    linkTo: '/docs/guides/google-tag-manager',
  },
  {
    title: 'Performance',
    description: "Solve real-world issues and boost your store's performance.",
    linkTitle: 'See more',
    linkTo:
      '/docs/guides/vtex-io-documentation-deactivating-the-vtex-io-native-service-worker',
  },
  {
    title: 'Internationalization',
    description: 'Achieve more customers by making your store multi-language.',
    linkTitle: 'See more',
    linkTo: '/docs/guides/vtex-io-multi-language-stores',
  },
  {
    title: 'Cross-border stores',
    description:
      'Go global with multi-currency, multi-language tools and reusable components.',
    linkTitle: 'See more',
    linkTo: '/docs/guides/vtex-io-cross-border-stores',
  },
  {
    title: 'B2B stores',
    description: 'Learn how to implement a B2B store with the Store Framework.',
    linkTitle: 'See more',
    linkTo: '/docs/guides/b2b-setup',
  },
]
const StorefrontDevelopmentPage: NextPage<Props> = ({ branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const messages = getMessages()
  return (
    <>
      <Head>
        <title>{messages['storefront_development_page.title']}</title>
        <meta
          property="og:title"
          content={messages['storefront_development_page.subtitle']}
          key="title"
        />
        <meta
          name="docsearch:doctitle"
          content={messages['storefront_development_page.title']}
        />
        <meta name="docsearch:doctype" content="Storefront Development" />
      </Head>
      <Fragment>
        <PageHeader
          title={messages['storefront_development_page.title']}
          description={messages['storefront_development_page.subtitle']}
          imageUrl={image}
          imageAlt={messages['storefront_development_page.title']}
        />
        <Box sx={styles.contentContainer}>
          <Text sx={styles.contentTitle}>Get started with Store Framework</Text>
          <Flex sx={styles.cardsContainer}>
            {getStartedData.map((whatsNext) => (
              <WhatsNextCard {...whatsNext} key={whatsNext.title} />
            ))}
          </Flex>
          <Box sx={styles.divider}></Box>
          <Text sx={styles.contentTitle}>Go beyond with Store Framework</Text>
          <Flex sx={styles.cardsContainer}>
            {goBeyondData.map((whatsNext) => (
              <WhatsNextCard {...whatsNext} key={whatsNext.title} />
            ))}
          </Flex>
          <Link
            href="/docs/guides/vtex-io-documentation-migrating-storefront-from-legacy-to-io"
            legacyBehavior
          >
            <Box sx={styles.boxTip}>
              <Text sx={styles.boxTitle}>Legacy CMS Portal</Text>
              <Text>
                If your store runs with the Legacy CMS Portal, we strongly
                recommend migrating it to Store Framework.
              </Text>
              <Flex sx={styles.linkContainer}>
                <Text sx={styles.link} className="link">
                  Learn more
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
  const sectionSelected = 'Storefront Development'

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

export default StorefrontDevelopmentPage
