import { Fragment } from 'react'
import { Box } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import imgStyles from './styles.module.css'
import PageHeader from 'components/page-header'
import { getMessages } from 'utils/get-messages'
import image from '../../../../public/images/api-guides.png'
import styles from 'styles/documentation-landing-page'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const Image2 = () => (
  <div className={imgStyles.diagram}>
    <div className={imgStyles.diagramBox}>
      <h2 className={imgStyles.diagramTitle}>Merchant channels</h2>
      <p className={imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard}>
        CDN
      </p>
      <div className={imgStyles.diagramFlex}>
        <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}>
          Web Store
        </div>
        <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}>
          PWA
        </div>
        <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}>
          Live Shopping
        </div>
        <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}>
          Conversational
        </div>
        <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}>
          Marketplace Out
        </div>
        <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramPink}>
          Personal Shopper
        </div>
        <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
          Mobile App
        </div>
        <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
          IOT
        </div>
      </div>
    </div>
    <div className={imgStyles.diagramSecondRow}>
      <div
        className={imgStyles.diagramBox + ' ' + imgStyles.diagramBoxServices}
      >
        <h2 className={imgStyles.diagramTitle}>VTEX Core services</h2>
        <div className={imgStyles.diagramBoxServicesContent}>
          <div className={imgStyles.diagramGrid}>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Catalog
            </div>
            <div
              className={
                imgStyles.diagramCard + ' ' + imgStyles.diagramPinkCard
              }
            >
              Checkout
            </div>
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
            Ratings and Reviews
          </div>
          <div className={imgStyles.diagramCard + ' ' + imgStyles.diagramGray}>
            Loyalty
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
