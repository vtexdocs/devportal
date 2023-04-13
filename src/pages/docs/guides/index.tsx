import Image from 'next/image'
import { Fragment, useContext } from 'react'
import { Box, Text, Grid, Flex, Link } from '@vtex/brand-ui'
import Tooltip from 'components/tooltip'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import imgStyles from '../../../styles/core-services-styles'
import PageHeader from 'components/page-header'
import image from '../../../../public/images/api-guides.png'
import imageData from '../../../../public/images/data-orchestration.png'
import imagePlatform from '../../../../public/images/platform.png'
import styles from 'styles/documentation-landing-page'
import Head from 'next/head'
import { PreviewContext } from 'utils/contexts/preview'
import { useIntl } from 'react-intl'

const intl = useIntl()
interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  branch: string
}

const Image2 = () => (
  <Box>
    <Box sx={imgStyles.diagramBox}>
      <Text sx={imgStyles.diagramTitle}>Merchant channels</Text>
      <Flex sx={imgStyles.diagramFlexEnd}>
        <Box>
          <Text sx={imgStyles.diagramPinkCard}>CDN</Text>
          <Flex sx={imgStyles.diagramFlex}>
            <Text sx={imgStyles.diagramPink}>Web Store</Text>
            <Text sx={imgStyles.diagramPink}>PWA</Text>
            <Text sx={imgStyles.diagramPink}>Live Shopping</Text>
            <Text sx={imgStyles.diagramPink}>Conversational</Text>
            <Text sx={imgStyles.diagramPink}>Marketplace Out</Text>
            <Text sx={imgStyles.diagramPink}>Personal Shopper</Text>
          </Flex>
        </Box>
        <Box>
          <Flex sx={imgStyles.diagramFlex}>
            <Box sx={imgStyles.diagramGray}>Mobile App</Box>
            <Box sx={imgStyles.diagramGray}>IOT</Box>
          </Flex>
        </Box>
      </Flex>
    </Box>

    <Box sx={imgStyles.diagramSecondRow}>
      <Box sx={imgStyles.diagramBox}>
        <Text sx={imgStyles.diagramTitleServices}>VTEX Core services</Text>
        <Box sx={imgStyles.diagramBoxServicesContent}>
          <Box sx={imgStyles.diagramGrid}>
            <Tooltip label="Manipulate your store’s sales channels, categories, brands, products, SKUs and specifications.">
              <Link
                href="/docs/guides/catalog-overview"
                sx={imgStyles.diagramPinkCardLink}
              >
                Catalog
              </Link>
            </Tooltip>
            <Tooltip label="Access and manipulate items data of a checkout cart.">
              <Link
                href="/docs/guides/checkout-overview"
                sx={imgStyles.diagramPinkCardLink}
              >
                Checkout
              </Link>
            </Tooltip>
            <Tooltip label="Create and manage promotions and coupons to scale your sales.">
              <Link
                href="/docs/guides/promotions-overview"
                sx={imgStyles.diagramPinkCardLink}
              >
                Promotions
              </Link>
            </Tooltip>
            <Tooltip label="Create, read and edit prices for each SKU, sales channel or price table.">
              <Link
                href="/docs/guides/pricing-overview"
                sx={imgStyles.diagramPinkCardLink}
              >
                Pricing
              </Link>
            </Tooltip>
            <Tooltip label="Get payment data and process your transactions.">
              <Link
                href="/docs/guides/payments-overview"
                sx={imgStyles.diagramPinkCardLink}
              >
                Payment Hub
              </Link>
            </Tooltip>
            <Tooltip label="Search and sort products in the catalog using fulltext, category and brand search terms. Retrieve product data to create custom searches and product shelves.">
              <Link
                href="/docs/guides/search-overview"
                sx={imgStyles.diagramPinkCardLink}
              >
                Intelligent Search
              </Link>
            </Tooltip>
            <Tooltip label="Manage users, roles, hosts, AppKeys and AppTokens from a VTEX store.">
              <Link
                href="/docs/guides/account-management"
                sx={imgStyles.diagramPinkCardLink}
              >
                Account management
              </Link>
            </Tooltip>
            <Box sx={imgStyles.diagramPinkCard}>DaaS - Master Data</Box>
            <Box sx={imgStyles.diagramPinkCard}>OMS</Box>
            <Box sx={imgStyles.diagramPinkCard}>Subscriptions</Box>
            <Box sx={imgStyles.diagramPinkCard}>Ratings and reviews</Box>
            <Text sx={imgStyles.diagramPinkCard}>CMS</Text>
            <Text sx={imgStyles.diagramPinkCard}>Search</Text>
            <Text sx={imgStyles.diagramPinkCard}>Messages</Text>
            <Box sx={imgStyles.diagramPinkCard}>Logistics/ Inventory</Box>
            <Box sx={imgStyles.diagramPinkCard}>Customers</Box>
          </Box>
          <Box sx={imgStyles.diagramBox}>
            <Text sx={imgStyles.diagramTitleServices}>VTEX IO Apps (PaaS)</Text>
            <Box>
              <Text sx={imgStyles.diagramGray}>Custom Admin</Text>
              <Text sx={imgStyles.diagramGray}>Custom store component</Text>
              <Text sx={imgStyles.diagramGray}>
                Custom backend service (API)
              </Text>
              <Text sx={imgStyles.diagramPinkCard}>VTEX App</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={imgStyles.diagramBox}>
        <Text sx={imgStyles.diagramTitle}>3rd party optional</Text>
        <Box>
          <Text sx={imgStyles.diagramGray}>Search</Text>
          <Text sx={imgStyles.diagramGray}>Personalization</Text>
          <Text sx={imgStyles.diagramGray}>Ratings and Reviews</Text>
          <Text sx={imgStyles.diagramGray}>Loyalty</Text>
          <Text sx={imgStyles.diagramGray}>Analytics and Reporting</Text>
          <Text sx={imgStyles.diagramGray}>DXP</Text>
          <Text sx={imgStyles.diagramGray}>Customer Payments</Text>
          <Text sx={imgStyles.diagramGray}>ADA</Text>
        </Box>
      </Box>
    </Box>
    <Box sx={imgStyles.diagramMuted}>
      <Text sx={imgStyles.diagramTitleSingle}>Integration Layer</Text>
    </Box>
    <Box sx={imgStyles.diagramMuted}>
      <Text sx={imgStyles.diagramTitle}>Merchant back office</Text>
      <Grid sx={imgStyles.diagramGridHorizontal}>
        <Text sx={imgStyles.diagramGray}>ERP</Text>
        <Text sx={imgStyles.diagramGray}>OMS</Text>
        <Text sx={imgStyles.diagramGray}>WMS</Text>
        <Text sx={imgStyles.diagramGray}>PIM</Text>
        <Text sx={imgStyles.diagramGray}>CRM</Text>
        <Text sx={imgStyles.diagramGray}>Data Lake</Text>
      </Grid>
    </Box>
  </Box>
)

const ApiGuidesPage: NextPage<Props> = ({ branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({
            id: 'api_guides_page.title',
          })}
        </title>
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: 'api_guides_page.subtitle',
          })}
          key="title"
        />
      </Head>
      <Fragment>
        <PageHeader
          title={intl.formatMessage({
            id: 'api_guides_page.title',
          })}
          description={intl.formatMessage({
            id: 'api_guides_page.subtitle',
          })}
          imageUrl={image}
          imageAlt={intl.formatMessage({
            id: 'app_development_page.title',
          })}
        />
        <Box sx={styles.contentContainer}>
          <Text sx={styles.contentTitle}>Get started</Text>
          <Text sx={styles.contentDescription}>
            Our core commerce capabilities, provided by over 70 shared
            microservices, are available for flexible customization through our
            REST APIs. This enables our clients to integrate third-party
            solutions into a single platform for all experiences.{' '}
          </Text>
          <Image
            alt="Platform overview"
            src={imagePlatform}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <Text sx={styles.contentDescription}>
            Using our REST APIs with our serverless development platform (VTEX
            IO) and scalable data service (Master Data), you can expand the VTEX
            platform to address your unique business needs.
          </Text>
          <Box sx={styles.divider}></Box>
          <Text sx={styles.contentTitle}>Data orchestration</Text>
          <Text sx={styles.contentDescription}>
            Our platform orchestrates data through multiple channels and sources
            to remove barriers and enable more possibilities. E-commerce,
            Brick-and-mortar, Marketplace, B2B... You name it, we enable it.
            That is why we are a unified commerce platform for unified
            businesses.
          </Text>
          <Image
            alt="Data orchestration"
            src={imageData}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <Box sx={styles.divider}></Box>
          <Text sx={styles.contentTitle}>Core services</Text>
          <Text sx={styles.contentDescription}>
            Get to know our core microsservices and leverage your business with
            our Headless architecture. Our API Guides and Reference cover VTEX
            Core Services, as illustrated in the image below.
          </Text>
          <Image2 />
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
  const sectionSelected = 'Guides'

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

export default ApiGuidesPage
