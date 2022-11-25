import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import Layout from 'components/category-layout'
import OverviewCard from 'components/overview-card'
import { Composable } from 'components/overview-card/icons'
import YouTubeFrame from 'components/youtube-frame'
import styles from './styles.module.css'

interface Props {
  sidebarfallback: any //eslint-disable-line
}

const Image2 = () => (
  <div className={styles.diagram}>
    <div className={styles.diagramBox}>
      <h2 className={styles.diagramTitle}>Merchant channels</h2>
      <p className={styles.diagramCard + ' ' + styles.diagramPinkCard}>CDN</p>
      <div className={styles.diagramFlex}>
        <div className={styles.diagramCard + ' ' + styles.diagramPink}>
          Web Store
        </div>
        <div className={styles.diagramCard + ' ' + styles.diagramPink}>PWA</div>
        <div className={styles.diagramCard + ' ' + styles.diagramPink}>
          Live Shopping
        </div>
        <div className={styles.diagramCard + ' ' + styles.diagramPink}>
          Conversational
        </div>
        <div className={styles.diagramCard + ' ' + styles.diagramPink}>
          Marketplace Out
        </div>
        <div className={styles.diagramCard + ' ' + styles.diagramPink}>
          Personal Shopper
        </div>
        <div className={styles.diagramCard + ' ' + styles.diagramGray}>
          Mobile App
        </div>
        <div className={styles.diagramCard + ' ' + styles.diagramGray}>IOT</div>
      </div>
    </div>
    <div className={styles.diagramSecondRow}>
      <div className={styles.diagramBox + ' ' + styles.diagramBoxServices}>
        <h2 className={styles.diagramTitle}>VTEX Core services</h2>
        <div className={styles.diagramBoxServicesContent}>
          <div className={styles.diagramGrid}>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Catalog
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Checkout
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              DaaS - Master Data
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              OMS
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Subscriptions
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Ratings and reviews
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Promotions
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              CMS
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Search
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Messages
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Authentication
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Pricing
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Payment Hub
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Logistics/ Inventory
            </div>
            <div className={styles.diagramCard + ' ' + styles.diagramPinkCard}>
              Customers
            </div>
          </div>
          <div className={styles.diagramBox}>
            <h2 className={styles.diagramTitle}>VTEX IO Apps (PaaS)</h2>
            <div className={styles.diagramGridVertical}>
              <div className={styles.diagramCard + ' ' + styles.diagramGray}>
                Custom Admin
              </div>
              <div className={styles.diagramCard + ' ' + styles.diagramGray}>
                Custom store component
              </div>
              <div className={styles.diagramCard + ' ' + styles.diagramGray}>
                Custom backend service (API)
              </div>
              <div
                className={styles.diagramCard + ' ' + styles.diagramPinkCard}
              >
                VTEX App
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.diagramBox}>
        <h2 className={styles.diagramTitle}>3rd party optional</h2>
        <div className={styles.diagramGridTwoColumns}>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Search
          </div>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Personalization
          </div>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Ratings and Reviews
          </div>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Loyalty
          </div>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Search
          </div>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Personalization
          </div>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Ratings and Reviews
          </div>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Loyalty
          </div>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Ratings and Reviews
          </div>
          <div className={styles.diagramCard + ' ' + styles.diagramGray}>
            Loyalty
          </div>
        </div>
      </div>
    </div>
    <div className={styles.diagramBox + ' ' + styles.diagramMuted}>
      <h2 className={styles.diagramTitle}>Integration Layer</h2>
    </div>
    <div className={styles.diagramBox + ' ' + styles.diagramMuted}>
      <h2 className={styles.diagramTitle}>Merchant back office</h2>
      <div className={styles.diagramGridHorizontal}>
        <p className={styles.diagramCard + ' ' + styles.diagramGray}>ERP</p>
        <p className={styles.diagramCard + ' ' + styles.diagramGray}>OMS</p>
        <p className={styles.diagramCard + ' ' + styles.diagramGray}>WMS</p>
        <p className={styles.diagramCard + ' ' + styles.diagramGray}>PIM</p>
        <p className={styles.diagramCard + ' ' + styles.diagramGray}>CRM</p>
        <p className={styles.diagramCard + ' ' + styles.diagramGray}>
          Data Lake
        </p>
      </div>
    </div>
  </div>
)

const categoryData = [
  {
    title: 'Platform overview',
    href: 'api-guides/getting-started-platform-overview',
    description:
      "Understand our platform's architecture and data orchestration through our Platform Overview article.",
    docs: [
      {
        title: 'Platform Overview',
        href: 'api-guides/getting-started-platform-overview',
      },
    ],
    icon: 'StorageUnit',
  },
  {
    title: 'REST API',
    href: 'api-guides/getting-started-platform-overview',
    description:
      'See how to use our APIs to integrate third-party solutions to a single platform for all experiences.',
    docs: [
      {
        title: 'List of REST APIs',
        href: 'api-guides/getting-started-list-of-rest-apis',
      },
      {
        title: 'Authentication',
        href: 'api-guides/getting-started-authentication',
      },
      {
        title: 'Making your first request',
        href: 'api-guides/getting-started-making-your-first-request',
      },
    ],
    icon: 'Board',
    seeMore: true,
  },
]

const ApiGuidesPage: NextPage<Props> = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Getting started</h1>
      <p className={styles.details}>
        Check out our introductory content to learn more about the capabilities
        of our Rest APIs.
      </p>
      <p>
        Welcome! VTEX is a headless commerce platform that is highly
        customizable and constantly evolving. The video below illustrates how
        our clients are currently using VTEX to address their business needs:
      </p>
      <YouTubeFrame embedId="JgkrlaF52WQ" />
      <blockquote className={styles.blockquote}>
        <Composable />
        <p>
          You're now in our Developer Portal. If you wish to see
          business-focused content, and documentation about our web platform,
          check out our <a href="https://help.vtex.com/"> Help Center </a>.
        </p>
      </blockquote>
      <>
        {categoryData.map((category) => (
          <OverviewCard
            title={category.title}
            href={category.href}
            description={category.description}
            docs={category.docs}
            icon={category.icon}
            seeMore={category.seeMore}
          />
        ))}
      </>

      <h1 className={styles.title}>Getting to know our Core Services</h1>
      <p className={styles.details}>
        Leverage your ecommerce in our Headless architecture, by learning what
        you can accomplish with each microsservice in VTEX.
      </p>
      <p>
        Our API Guides and Reference cover VTEX Core Services, as illustrated in
        the image below.
      </p>
      <Image2 />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()

  return {
    props: {
      sidebarfallback,
    },
  }
}

export default ApiGuidesPage
