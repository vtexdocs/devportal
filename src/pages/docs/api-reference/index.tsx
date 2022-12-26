import { Fragment } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'
import PageHeader from 'components/page-header'
import WhatsNextCard from 'components/whats-next-card'
import { getMessages } from 'utils/get-messages'

const whatsNextData: WhatsNextDataElement[] = [
  {
    title: 'Antrifraud Provider API',
    description:
      'Use the Antifraud Provider Protocol to integrate your antifraud service API into the VTEX platform.',
    link: {
      title: 'See more',
      to: 'api-reference/antifraud-provider-protocol',
    },
  },
  {
    title: 'Catalog API',
    description:
      'Manipulate your store’s sales channels, categories, brands, products, SKUs and specifications.',
    link: {
      title: 'See more',
      to: 'api-reference/catalog-api-overview',
    },
  },
  {
    title: 'Checkout API',
    description: 'Access and manipulate items data of a checkout cart.',
    link: {
      title: 'See more',
      to: 'api-reference/checkout-api-overview',
    },
  },
  {
    title: 'Customer Credit API',
    description:
      'Enable credit payments on your store and control invoices and credit limits.',
    link: {
      title: 'See more',
      to: 'api-reference/customer-credit-api-overview',
    },
  },
  {
    title: 'Gift Card API',
    description:
      'Retrieve and update gift cards from our native Gift Card System.',
    link: {
      title: 'See more',
      to: 'api-reference/giftcard-api-overview',
    },
  },
  {
    title: 'Gift Card Hub API',
    description:
      'Interact with all Gift Card Providers registered to a store from a single point.',
    link: {
      title: 'See more',
      to: 'api-reference/giftcard-api-overview',
    },
  },
  {
    title: 'License Manager API',
    description:
      'Manage users, roles, hosts, AppKeys and AppTokens from a VTEX store.',
    link: {
      title: 'See more',
      to: 'api-reference/license-manager-api-overview',
    },
  },
  {
    title: 'Logistics API',
    description:
      'Manage all store logistics data by accessing warehouses, docks, pick up points, carriers and shipping rates. Get or the inventory of each SKU.',
    link: {
      title: 'See more',
      to: 'api-reference/logistics-api-overview',
    },
  },
  {
    title: 'Marketplace API',
    description:
      'Enables marketplaces and sellers hosted on VTEX to perform their collaborative operations.',
    link: {
      title: 'See more',
      to: 'api-reference/marketplace-api-overview',
    },
  },
  {
    title: 'Master Data API',
    description:
      'Manage and retrieve all data entities, applications and records from Master Data database.',
    link: {
      title: 'See more',
      to: 'api-reference/master-data-api-v2-overview',
    },
  },
  {
    title: 'Orders API',
    description: 'Get payment data and process your transactions.',
    link: {
      title: 'See more',
      to: 'api-reference/orders-api-overview',
    },
  },
  {
    title: 'Payments Gateway API',
    description: 'Receive, process, and manage every order through our APIs.',
    link: {
      title: 'See more',
      to: 'api-reference/payments-gateway-api-overview',
    },
  },
  {
    title: 'Pricing API',
    description:
      'Create, read and edit prices for each SKU, sales channel or price table.',
    link: {
      title: 'See more',
      to: 'api-reference/pricing-api-overview',
    },
  },
  {
    title: 'Promotions API',
    description:
      'Manage and retrieve all promotions, coupons and tax rules from a VTEX store.',
    link: {
      title: 'See more',
      to: 'api-reference/rates-and-benefits-api-overview',
    },
  },
  {
    title: 'Search API',
    description:
      'Search and sort products in the catalog using fulltext, category and brand search terms. Retrieve product data to custom searches and product shelves.',
    link: {
      title: 'See more',
      to: 'api-reference/search-api-overview',
    },
  },
  {
    title: 'Session Manager API',
    description:
      "Track relevant information about the client's current browsing session and integrate with several VTEX systems using a call.",
    link: {
      title: 'See more',
      to: 'api-reference/session-manager-api-overview',
    },
  },
  {
    title: 'Subscriptions API',
    description:
      "Manage store's subscription rules to improve the revenue and reduce bounce rate and churn.",
    link: {
      title: 'See more',
      to: 'api-reference/subscriptions-api-v3-overview',
    },
  },
  {
    title: 'VTEX Do API',
    description: 'Manage and retrieve notes or tasks from VTEX Do.',
    link: {
      title: 'See more',
      to: 'api-reference/vtex-do-api-overview',
    },
  },
  {
    title: 'VTEX Tracking',
    description:
      'Manage all delivery solutions powered by VTEX Tracking service.',
    link: {
      title: 'See more',
      to: 'api-reference/vtex-tracking',
    },
  },
]

import image from '../../../../public/images/api-reference.png'

import styles from 'styles/api-reference'
import { WhatsNextDataElement } from 'utils/typings/types'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const APIReferencePage: NextPage<Props> = () => {
  const messages = getMessages()
  return (
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
            <WhatsNextCard {...whatsNext} />
          ))}
        </Flex>
      </Box>
    </Fragment>
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
