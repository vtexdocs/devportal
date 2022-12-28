import Image from 'next/image'
import { Fragment } from 'react'
import { Box, Text, Grid, Flex } from '@vtex/brand-ui'
import Tooltip from 'components/tooltip'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import imgStyles from './styles.module.css'
import PageHeader from 'components/page-header'
import { getMessages } from 'utils/get-messages'
import image from '../../../../public/images/api-guides.png'
import imageData from '../../../../public/images/data-orchestration.png'
import imagePlatform from '../../../../public/images/platform.png'
import styles from 'styles/documentation-landing-page'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const Image2 = () => (
  <div className={imgStyles.diagram}>
    <div className={imgStyles.diagramBox}>
      <h2 className={imgStyles.diagramTitle}>Merchant channels</h2>
      <Grid columns={[2, null]}>
        <Box>
          <Tooltip label="Label">
            <p
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              CDN
            </p>
          </Tooltip>
          <div className={imgStyles.diagramFlex}>
            <div
              className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}
            >
              Web Store
            </div>
            <div
              className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}
            >
              PWA
            </div>
            <div
              className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}
            >
              Live Shopping
            </div>
            <div
              className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}
            >
              Conversational
            </div>
            <div
              className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}
            >
              Marketplace Out
            </div>
            <div
              className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}
            >
              Personal Shopper
            </div>
          </div>
        </Box>
        <Box>
          <Flex>
            <div
              className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}
            >
              Mobile App
            </div>
            <div
              className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}
            >
              IOT
            </div>
          </Flex>
        </Box>
      </Grid>
    </div>

    <div className={imgStyles.diagramSecondRow}>
      <div
        className={imgStyles.diagramBox + ' ' + imgStyles.diagramBoxServices}
      >
        <h2 className={imgStyles.diagramTitle}>VTEX Core services</h2>
        <div className={imgStyles.diagramBoxServicesContent}>
          <div className={imgStyles.diagramGrid}>
            <Tooltip label="Manipulate your store’s sales channels, categories, brands, products, SKUs and specifications.">
              <div
                className={
                  imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
                }
              >
                Catalog
              </div>
            </Tooltip>
            <Tooltip label="Access and manipulate items data of a checkout cart.">
              <div
                className={
                  imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
                }
              >
                Checkout
              </div>
            </Tooltip>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              DaaS - Master Data
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              OMS
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Subscriptions
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Ratings and reviews
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Promotions
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              CMS
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Search
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Messages
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Authentication
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Pricing
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Payment Hub
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Logistics/ Inventory
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Customers
            </div>
          </div>
          <div className={imgStyles.diagramBox}>
            <h2 className={imgStyles.diagramTitle}>VTEX IO Apps (PaaS)</h2>
            <div className={imgStyles.diagramGridVertical}>
              <div
                className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}
              >
                Custom Admin
              </div>
              <div
                className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}
              >
                Custom store component
              </div>
              <div
                className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}
              >
                Custom backend service (API)
              </div>
              <div
                className={
                  imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
                }
              >
                VTEX App
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={imgStyles.diagramBox}>
        <h2 className={imgStyles.diagramTitle}>3rd party optional</h2>
        <div className={imgStyles.diagramGridTwoColumns}>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            Search
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            Personalization
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            Ratings and Reviews
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            Loyalty
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            Analytics and Reporting
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            DXP
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            Customer Payments
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            ADA
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            Conversational XP
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            User Rights
          </div>
        </div>
      </div>
    </div>
    <div className={imgStyles.diagramBox + ' ' + imgStyles.diagramMuted}>
      <h2 className={imgStyles.diagramTitle}>Integration Layer</h2>
    </div>
    <div className={imgStyles.diagramBox + ' ' + imgStyles.diagramMuted}>
      <h2 className={imgStyles.diagramTitle}>Merchant back office</h2>
      <div className={imgStyles.diagramGridHorizontal}>
        <p className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
          ERP
        </p>
        <p className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
          OMS
        </p>
        <p className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
          WMS
        </p>
        <p className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
          PIM
        </p>
        <p className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
          CRM
        </p>
        <p className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
          Data Lake
        </p>
      </div>
    </div>
  </div>
)

const ApiGuidesPage: NextPage<Props> = () => {
  const messages = getMessages()
  return (
    <Fragment>
      <PageHeader
        title={messages['api_guides_page.title']}
        description={messages['api_guides_page.subtitle']}
        imageUrl={image}
        imageAlt={messages['app_development_page.title']}
      />
      <Box sx={styles.contentContainer}>
        <Text sx={styles.contentTitle}>Get started</Text>
        <Text sx={styles.contentDescription}>
          Our core commerce capabilities, provided by over 70 shared
          microservices, are available for flexible customization through our
          REST APIs. This enables our clients to integrate third-party solutions
          into a single platform for all experiences.{' '}
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
          Using our REST APIs with our serverless development platform (VTEX IO)
          and scalable data service (Master Data), you can expand the VTEX
          platform to address your unique business needs.
        </Text>
        <Box sx={styles.divider}></Box>
        <Text sx={styles.contentTitle}>Data orchestration</Text>
        <Text sx={styles.contentDescription}>
          Our platform orchestrates data through multiple channels and sources
          to remove barriers and enable more possibilities. E-commerce,
          Brick-and-mortar, Marketplace, B2B... You name it, we enable it. That
          is why we are a unified commerce platform for unified businesses.
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'API Guides'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
    },
  }
}

export default ApiGuidesPage
