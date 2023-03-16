import React, { useContext } from 'react'
import Head from 'next/head'
import { Box, Flex } from '@vtex/brand-ui'
import JsonEditorComponent from 'components/JsonEditorComponent'
import { Fragment } from 'react'
import styles from 'styles/documentation-landing-page'
import { SidebarContext } from 'utils/contexts/sidebar'
import { GetServerSideProps, NextPage } from 'next'

import PageHeader from 'components/page-header'
import image from '../../../public/images/editor.png'

interface Props {
  file?: string
  fileContent?: any //eslint-disable-line
  isPRPreview: boolean
  isPreview: boolean
}

const AdminPage: NextPage<Props> = ({ file, fileContent, isPRPreview }) => {
  let headerDescription =
    'Enter the updated navigation JSON in the field below and click submit to preview your changes in the sidebar menu.'
  let headerTitle = 'Sidebar Editor'

  if (isPRPreview) {
    const { setSidebarDataMaster } = useContext(SidebarContext)
    setSidebarDataMaster(fileContent)
    headerDescription = `You're now in preview mode of ${file}`
    headerTitle = `Sidebar Preview`
  }

  return (
    <>
      <Head>
        <title>Sidebar Editor</title>
      </Head>
      <Flex>
        <Box sx={styles.mainContainer}>
          <Fragment>
            <PageHeader
              title={headerTitle}
              description={headerDescription}
              imageUrl={image}
              imageAlt="Sidebar editor"
            />
            {!isPRPreview && (
              <Box sx={styles.contentContainer}>
                <JsonEditorComponent />
              </Box>
            )}
          </Fragment>
        </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { file } = context.query
  const isPreview = true
  const sectionSelected = 'Guides'
  if (file) {
    const fileContent = await fetch(file as string)
      .then((res) => res.json())
      .then((res) => res.navbar)
    const isPRPreview = true
    return {
      props: { file, fileContent, isPreview, isPRPreview, sectionSelected },
    }
  } else {
    const isPRPreview = false
    return { props: { isPRPreview, isPreview, sectionSelected } }
  }
}

export default AdminPage
