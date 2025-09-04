import Link from 'next/link'
import { Fragment, useContext } from 'react'
import { Box, Flex, Text, IconCaret, Icon, IconProps } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import PageHeader from 'components/page-header'
import { getMessages } from 'utils/get-messages'
import image from '../../../../public/images/storefront-development.png'
import styles from 'styles/documentation-landing-page'
import Head from 'next/head'
import { PreviewContext } from 'utils/contexts/preview'
import OverviewSection from 'components/overview-section'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  branch: string
}

const SFAppsIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 32 32">
      <g transform="translate(0 0)">
        <g fill="#a1a8b3">
          <circle cx="8" cy="8" r="6" fill="#4A596B"></circle>{' '}
          <circle cx="24" cy="8" r="6" data-color="color-2"></circle>{' '}
          <circle cx="8" cy="24" r="6" data-color="color-2"></circle>{' '}
          <circle cx="24" cy="24" r="6" fill="#4A596B"></circle>
        </g>
      </g>
    </Icon>
  )
}

const SFStylesIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 32 32">
      <g transform="translate(0 0)">
        <g
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="2"
          fill="#a1a8b3"
          stroke="#a1a8b3"
          strokeMiterlimit="10"
        >
          <path
            fill="none"
            stroke="#4A596B"
            d="M1,4c0-1.657,1.343-3,3-3 s3,1.343,3,3v2H1V4z"
          ></path>{' '}
          <path
            fill="none"
            stroke="#4A596B"
            d="M26,26V4c0-1.657-1.343-3-3-3H4 c1.657,0,3,1.343,3,3v24c0,1.657,1.343,3,3,3h16"
          ></path>{' '}
          <path
            fill="none"
            stroke="#4A596B"
            d="M13,28c0,1.657-1.343,3-3,3 h18c1.657,0,3-1.343,3-3v-2H13V28z"
          ></path>{' '}
          <polyline fill="none" points=" 14,14 12,16 14,18 "></polyline>{' '}
          <polyline
            data-color="color-2"
            fill="none"
            points=" 20,14 22,16 20,18 "
          ></polyline>
        </g>
      </g>
    </Icon>
  )
}

const SFCMSIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 32 32">
      <g transform="translate(0 0)">
        <g fill="#a1a8b3">
          <path
            data-color="color-2"
            d="M22,12c-5.514,0-10,4.486-10,10s4.486,10,10,10s10-4.486,10-10S27.514,12,22,12z M27,23h-4v4 h-2v-4h-4v-2h4v-4h2v4h4V23z"
          ></path>{' '}
          <path fill="#4A596B" d="M7,20L0,0l20,7l-9,4L7,20z"></path>
        </g>
      </g>
    </Icon>
  )
}

const FastStoreComponentsIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 32 32">
      <g transform="translate(0 0)">
        <g fill="#a1a8b3">
          <path
            data-color="color-2"
            d="M21.086,5.5L11.293,15.293c-.11,.11-.192,.244-.241,.391l-2,6c-.175,.524,.109,1.09,.633,1.265,.102,.034,.208,.051,.315,.051,.107,0,.214-.018,.316-.052l6-2c.147-.049,.281-.131,.391-.241l9.793-9.793-5.414-5.414Z"
          ></path>
          <path
            data-color="color-2"
            d="M30.707,5.293L26.707,1.293c-.39-.39-1.024-.39-1.414,0l-2.793,2.793,5.414,5.414,2.793-2.793c.39-.39,.39-1.023,0-1.414Z"
          ></path>
          <path
            d="M23,31H5c-2.206,0-4-1.794-4-4V9c0-2.206,1.794-4,4-4H13c.553,0,1,.448,1,1s-.447,1-1,1H5c-1.103,0-2,.897-2,2V27c0,1.103,.897,2,2,2H23c1.103,0,2-.897,2-2v-8c0-.552,.447-1,1-1s1,.448,1,1v8c0,2.206-1.794,4-4,4Z"
            fill="#4A596B"
          ></path>
        </g>
      </g>
    </Icon>
  )
}

const FastStoreStylesIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 32 32">
      <g transform="translate(0 0)">
        <g
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="2"
          fill="#a1a8b3"
          stroke="#a1a8b3"
          strokeMiterlimit="10"
        >
          <polyline
            data-cap="butt"
            data-color="color-2"
            fill="none"
            points="22.16,7.791 27,12 17.626,22.523 "
            strokeLinecap="butt"
          ></polyline>{' '}
          <polyline
            data-cap="butt"
            data-color="color-2"
            fill="none"
            points="17,3.215 23,5.062 17,24.558 "
            strokeLinecap="butt"
          ></polyline>{' '}
          <rect
            x="5"
            y="1"
            fill="none"
            stroke="#4A596B"
            width="12"
            height="30"
          ></rect>{' '}
          <circle fill="none" stroke="#4A596B" cx="11" cy="26" r="1"></circle>{' '}
          <line
            fill="none"
            stroke="#4A596B"
            x1="5"
            y1="21"
            x2="17"
            y2="21"
          ></line>
        </g>
      </g>
    </Icon>
  )
}

const FastStoreCMSIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 32 32">
      <g transform="translate(0 0)">
        <g
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="2"
          fill="#a1a8b3"
          stroke="#a1a8b3"
          strokeMiterlimit="10"
        >
          <line
            data-color="color-2"
            fill="none"
            x1="5"
            y1="9"
            x2="17"
            y2="9"
          ></line>{' '}
          <polyline
            data-color="color-2"
            fill="none"
            points=" 5,1 5,25 17,25 "
          ></polyline>{' '}
          <polygon
            fill="none"
            stroke="#4A596B"
            points="27,15 17,15 17,3 23,3 27,7 "
          ></polygon>{' '}
          <polygon
            fill="none"
            stroke="#4A596B"
            points="27,31 17,31 17,19 23,19 27,23 "
          ></polygon>
        </g>
      </g>
    </Icon>
  )
}
const StorefrontDevelopmentPage: NextPage<Props> = ({ branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const messages = getMessages()
  const cardsContent = [
    {
      title: 'FastStore',
      description:
        'Build high-performance stores based on the Jamstack architecture',
      getStarted: 'https://developers.vtex.com/docs/guides/faststore',
      links: [
        {
          href: 'https://developers.vtex.com/docs/guides/faststore/components-index',
          title: 'Check the FastStore UI components',
          icon: <FastStoreComponentsIcon />,
        },
        {
          href: 'https://developers.vtex.com/docs/guides/faststore/using-themes-overview',
          title: 'Customize your storefront theme',
          icon: <FastStoreStylesIcon />,
        },
        {
          href: 'https://developers.vtex.com/docs/guides/faststore/headless-cms-overview',
          title: 'Manage content with the Headless CMS',
          icon: <FastStoreCMSIcon />,
        },
      ],
    },
    {
      title: 'Store Framework',
      description:
        'Leverage the VTEX IO infrastructure to build store themes using VTEX IO apps',
      getStarted: 'https://developers.vtex.com/docs/guides/store-framework',
      links: [
        {
          href: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-product-details-page',
          title: 'Build your store theme with VTEX IO apps',
          icon: <SFAppsIcon />,
        },
        {
          href: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-using-css-handles-for-store-customization',
          title: "Customize your store theme's style",
          icon: <SFStylesIcon />,
        },
        {
          href: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-site-editor',
          title: 'Manage content with CMS - Site Editor',
          icon: <SFCMSIcon />,
        },
      ],
    },
  ]
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
          {cardsContent.map((content) => (
            <OverviewSection key={content.title} content={content} />
          ))}
          <Link href="/docs/guides/vtex-io-documentation-migrating-storefront-from-legacy-to-io">
            <Box sx={styles.boxTip}>
              <Text sx={styles.boxTitle}>Legacy CMS Portal</Text>
              <Text>
                If your store runs with the Legacy CMS Portal, we strongly
                recommend migrating it to FastStore or Store Framework.
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
          <Box>
            <Text sx={{ fontSize: '1rem' }}>
              Learn more about our resources for developers in the{' '}
              <Link
                target="_blank"
                href="https://developers.vtex.com/docs/guides/developer-experience"
              >
                Developer experience
              </Link>{' '}
              guide.
            </Text>
          </Box>
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
