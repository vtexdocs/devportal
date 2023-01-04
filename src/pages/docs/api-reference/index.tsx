import { Fragment } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'
import PageHeader from 'components/page-header'
import WhatsNextCard from 'components/whats-next-card'
import { getMessages } from 'utils/get-messages'

import image from '../../../../public/images/api-reference.png'

import styles from 'styles/documentation-landing-page'

import { WhatsNextDataElement } from 'utils/typings/types'
import Head from 'next/head'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const whatsNextData: WhatsNextDataElement[] = [
  {
    title: 'Antifraud Provider API',
    description:
      'Use the Antifraud Provider Protocol to integrate your antifraud service API into the VTEX platform.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/antifraud-provider-protocol',
    },
  },
  {
    title: 'Catalog API',
    description:
      'Manipulate your store’s sales channels, categories, brands, products, SKUs and specifications.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/catalog-api',
    },
  },
  {
    title: 'Checkout API',
    description: 'Access and manipulate items and data from a checkout cart.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/checkout-api',
    },
  },
  {
    title: 'Customer Credit API',
    description:
      'Enable credit payments on your store and control invoices and credit limits.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/customer-credit-api',
    },
  },
  {
    title: 'Gift Card API',
    description:
      'Retrieve and update gift cards from our native Gift Card System.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/giftcard-api',
    },
  },
  {
    title: 'Gift Card Hub API',
    description:
      'Interact with all Gift Card Providers registered to a store from a single point.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/giftcard-hub-api',
    },
  },
  {
    title: 'License Manager API',
    description:
      'Manage users, roles, hosts, AppKeys and AppTokens from a VTEX store.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/license-manager-api',
    },
  },
  {
    title: 'Logistics API',
    description:
      'Manage all store logistics data by accessing warehouses, docks, pick up points, inventory, carriers and shipping rates.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/logistics-api',
    },
  },
  {
    title: 'Marketplace API',
    description:
      'Enables marketplaces and sellers hosted on VTEX to perform their collaborative operations.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/marketplace-apis',
    },
  },
  {
    title: 'Master Data API',
    description:
      'Manage and retrieve all data entities, applications and records from the Master Data database.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/master-data-api-v2',
    },
  },
  {
    title: 'Orders API',
    description: 'Receive, process, and manage every order through our APIs.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/orders-api',
    },
  },
  {
    title: 'Payments Gateway API',
    description: 'Get payment data and process your transactions.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/payments-gateway-api',
    },
  },
  {
    title: 'Pricing API',
    description:
      'Create, retrieve and edit prices for each SKU, sales channel or price table.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/pricing-api',
    },
  },
  {
    title: 'Promotions API',
    description:
      'Manage and retrieve all promotions, coupons and tax rules from a VTEX store.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/promotions-and-taxes-api',
    },
  },
  {
    title: 'Search API',
    description:
      'Search and sort products in the catalog using fulltext, category and brand search terms. Retrieve product data to custom searches and product shelves.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/search-api',
    },
  },
  {
    title: 'Session Manager API',
    description:
      "Track relevant information about the client's current browsing session and integrate with several VTEX systems using a call.",
    link: {
      title: 'See more',
      to: '/docs/api-reference/session-manager-api',
    },
  },
  {
    title: 'Subscriptions API',
    description:
      "Manage store's subscription rules to generate recurrent revenue and reduce bounce rate and churn.",
    link: {
      title: 'See more',
      to: '/docs/api-reference/subscriptions-api-v3',
    },
  },
  {
    title: 'VTEX DO API',
    description: 'Manage and retrieve notes or tasks related to orders from the VTEX DO task manager.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/vtex-do-api',
    },
  },
  {
    title: 'VTEX Tracking',
    description:
      'Manage all delivery solutions powered by VTEX Tracking service.',
    link: {
      title: 'See more',
      to: '/docs/api-reference/tracking',
    },
  },
]

const APIReferencePage: NextPage<Props> = () => {
  const messages = getMessages()
  return (
    <>
      <Head>
        <title>{messages['api_reference_page.title']}</title>
        <meta
          property="og:title"
          content={messages['api_reference_page.subtitle']}
          key="title"
        />
      </Head>
      <Fragment>
        <PageHeader
          title={messages['api_reference_page.title']}
          description={messages['api_reference_page.subtitle']}
          imageUrl={image}
          imageAlt={messages['api_reference_page.title']}
        />
        <Box sx={styles.contentContainer}>
          <Flex sx={styles.cardsContainer}>
            {whatsNextData.map((whatsNext) => (
              <WhatsNextCard {...whatsNext} key={whatsNext.title} />
            ))}
          </Flex>
        </Box>
      </Fragment>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'API Reference'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
    },
  }
}

export default APIReferencePage
