import React from 'react'
import Head from 'next/head'
import { Box, Flex } from '@vtex/brand-ui'
import JsonEditorComponent from 'components/JsonEditorComponent'
import { Fragment } from 'react'
import SidebarPreview from 'components/sidebar/sidebarPreview'
import styles from 'styles/documentation-landing-page'

import PageHeader from 'components/page-header'
import image from '../../public/images/editor.png'
const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Navigation</title>
      </Head>
      <Flex>
        <SidebarPreview sectionSelected="Guides" />
        <Box sx={styles.mainContainer}>
          <Fragment>
            <PageHeader
              title="Sidebar Editor"
              description="Enter the updated navigation JSON in the field below and click submit to preview your changes in the sidebar menu."
              imageUrl={image}
              imageAlt="Sidebar editor"
            />
            <Box sx={styles.contentContainer}>
              <JsonEditorComponent />
            </Box>
          </Fragment>
        </Box>
      </Flex>
    </>
  )
}
AdminPage.hideSidebar = true

export default AdminPage
