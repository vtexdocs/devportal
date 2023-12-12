import React, { useContext } from 'react'
import Head from 'next/head'
import { Box, Flex, Text } from '@vtex/brand-ui'
import JsonEditorComponent from 'components/JsonEditorComponent'
import { Fragment } from 'react'
import styles from 'styles/documentation-landing-page'
import { GetServerSideProps, NextPage } from 'next'

import PageHeader from 'components/page-header'
import image from '../../../public/images/editor.png'
import Link from 'next/link'
import { LibraryContext } from '@vtexdocs/components'

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
    const { setSidebarDataMaster } = useContext(LibraryContext)
    setSidebarDataMaster(fileContent)
    headerDescription = `You are now in preview mode. Change between sections or click a document to open it in a new tab.`
    headerTitle = `Sidebar Preview`
  }

  return (
    <>
      <Head>
        <title>Sidebar Editor</title>
        <meta name="robots" content="noindex" />
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
            <Box sx={styles.contentContainer}>
              {!isPRPreview ? (
                <JsonEditorComponent />
              ) : (
                <Text style={{ wordWrap: 'break-word' }}>
                  This is the navigation file being used to display the sidebar:{' '}
                  <Link href={`${file}`}>{file}</Link>
                </Text>
              )}
            </Box>
          </Fragment>
        </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { file } = context.query
  const isPreview = true
  const sectionSelected = 'Tutorials & Solutions'
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
