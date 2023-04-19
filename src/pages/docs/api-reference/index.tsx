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
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/antifraud-provider-protocol',
  },
  {
    title: 'CMS API',
    description: 'Update your websites’ internet communication protocol',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/cms-api',
  },
  {
    title: 'Catalog API',
    description:
      'Manipulate your store’s sales channels, categories, brands, products, SKUs and specifications.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/catalog-api',
  },
  {
    title: 'Catalog API - Seller Portal',
    description:
      'create, edit and consult products and their variations, brands, and categories for a Seller Portal account',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/catalog-api-seller-portal',
  },
  {
    title: 'Checkout API',
    description: 'Access and manipulate items and data from a checkout cart.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/checkout-api',
  },
  {
    title: 'Customer Credit API',
    description:
      'Enable credit payments on your store and control invoices and credit limits.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/customer-credit-api',
  },
  {
    title: 'Gift Card API',
    description:
      'Retrieve and update gift cards from our native Gift Card System.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/giftcard-api',
  },
  {
    title: 'Gift Card Hub API',
    description:
      'Interact with all Gift Card Providers registered to a store from a single point.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/giftcard-hub-api',
  },
  {
    title: 'Gift Card Provider Protocol API',
    description: 'Integrate your Gift Card API into VTEX platform.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/giftcard-provider-protocol',
  },
  {
    title: 'VTEX Headless CMS API',
    description: 'No-code management system for storefront content.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/headless-cms-api',
  },
  {
    title: 'Intelligent Search API',
    description:
      'Assist your customers in their purchase journey, presenting results from search bar interactions.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/intelligent-search-api',
  },
  {
    title: 'License Manager API',
    description:
      'Manage users, roles, hosts, AppKeys and AppTokens from a VTEX store.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/license-manager-api',
  },
  {
    title: 'Logistics API',
    description:
      'Manage all store logistics data by accessing warehouses, docks, pick up points, inventory, carriers and shipping rates.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/logistics-api',
  },
  {
    title: 'Marketplace API',
    description:
      'Enables marketplaces and sellers hosted on VTEX to perform their collaborative operations.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/marketplace-apis',
  },
  {
    title: 'Master Data API',
    description:
      'Manage and retrieve all data entities, applications and records from the Master Data database.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/master-data-api-v2',
  },
  {
    title: 'Orders API',
    description: 'Receive, process, and manage every order through our APIs.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/orders-api',
  },
  {
    title: 'Payments Provider Protocol API',
    description:
      'Integrate your payment processing API into the VTEX platform,',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/payment-provider-protocol',
  },
  {
    title: 'Payments Gateway API',
    description: 'Get payment data and process your transactions.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/payments-gateway-api',
  },
  {
    title: 'Policies System API',
    description:
      'Create promotion alarms when selling products with undesired prices and promotions.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/policies-system-api',
  },
  {
    title: 'Pricing API',
    description:
      'Create, retrieve and edit prices for each SKU, sales channel or price table.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/pricing-api',
  },
  {
    title: 'Price Simulations API',
    description: 'Configure custom price selectors for B2B stores.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/price-simulations',
  },
  {
    title: 'Pricing Hub API',
    description:
      'Intermediary between VTEX and external pricing systems for B2B context.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/pricing-hub',
  },
  {
    title: 'Promotions & Taxes API',
    description:
      'Manage and retrieve all promotions, coupons and tax rules from a VTEX store.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/promotions-and-taxes-api',
  },
  {
    title: 'Reviews and Ratings API',
    description: 'Allow shoppers to submit reviews and ratings for products.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/reviews-and-ratings-api',
  },
  {
    title: 'Search API',
    description:
      'Search and sort products in the catalog using fulltext, category and brand search terms. Retrieve product data to custom searches and product shelves.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/search-api',
  },
  {
    title: 'Session Manager API',
    description:
      "Track relevant information about the client's current browsing session and integrate with several VTEX systems using a call.",
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/session-manager-api',
  },
  {
    title: 'SKU Bindings API',
    description: 'Manage SKU Bindings in your catalog.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/sku-bindings-api',
  },
  {
    title: 'Subscriptions API',
    description:
      "Manage store's subscription rules to generate recurrent revenue and reduce bounce rate and churn.",
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/subscriptions-api-v3',
  },
  {
    title: 'VTEX Do API',
    description:
      'Manage and retrieve notes or tasks related to orders from the VTEX DO task manager.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/vtex-do-api',
  },
  {
    title: 'VTEX Shipping Network API',
    description: 'Integrate your carrier with VTEX Shipping Network’s Hub.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/vtex-shipping-network-api',
  },
  {
    title: 'VTEX Tracking',
    description:
      'Manage all delivery solutions powered by VTEX Tracking service.',
    linkTitle: 'See more',
    linkTo: '/docs/api-reference/tracking',
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
