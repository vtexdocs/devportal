import React from 'react'
import Head from 'next/head'
import { Box, Flex } from '@vtexdocs/brand-ui'
import JsonEditorIndex from 'components/JsonEditorIndex'
import { Fragment } from 'react'
import styles from 'styles/documentation-landing-page'
import type { Page } from 'utils/typings/types'

import Auth from 'components/auth'
import PageHeader from 'components/page-header'
import image from '../../../public/images/editor.png'

const APIRefAdminPage: Page = () => {
  const headerDescription =
    'Enter the object or the `children` array of an API reference navigation JSON below and click Submit to convert it to a markdown index.'
  const headerTitle = 'API Index Generator'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleJsonDataChange(changedData: any) {
    JSON.stringify(changedData)
  }

  return (
    <Auth>
      <Head>
        <title>API Reference Index Generator</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Flex>
        <Box sx={styles.mainContainer}>
          <Fragment>
            <PageHeader
              title={headerTitle}
              description={headerDescription}
              imageUrl={image}
              imageAlt="API Reference Index Generator"
            />
            <Box sx={styles.contentContainer}>
              <JsonEditorIndex handleJsonDataChange={handleJsonDataChange} />
            </Box>
          </Fragment>
        </Box>
      </Flex>
    </Auth>
  )
}

APIRefAdminPage.hideSidebar = true

export default APIRefAdminPage
