import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Box } from '@vtex/brand-ui'
import SwaggerParser from '@apidevtools/swagger-parser'

import PageHeader from 'components/page-header'
import type { Page } from 'utils/typings/types'
import image from '../../../public/images/editor.png'
import '../../../RapiDoc/src/rapidoc.js'

import styles from 'styles/openapi-preview'

interface Props {
  isPRPreview: boolean
  isPreview: boolean
}

const OpenAPIPreviewPage: Page<Props> = () => {
  const router = useRouter()
  const rapidoc = useRef<{
    shadowRoot: Node
    scrollToPath: (endpoint: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolvedSpec: any
  }>(null)
  const [spec, setSpec] = useState('')
  const { branch, file } = router.query as { [attr: string]: string }

  useEffect(() => {
    function getEndpointPreview(branch: string, file: string) {
      fetch(
        `https://raw.githubusercontent.com/vtex/openapi-schemas/${branch}/${file}`
      )
        .then((res) => res.json())
        .then((data) => SwaggerParser.dereference(data))
        .then((deReferencedRaw) => SwaggerParser.parse(deReferencedRaw))
        .then((parsedFile) => {
          const previewDoc = JSON.stringify(parsedFile)
          setSpec(previewDoc)
        })
    }
    if (branch) {
      console.log('entrou')
      getEndpointPreview(branch, file)
    }
  }, [router.query])

  useEffect(() => {
    const scrollDoc = () => {
      if (rapidoc.current) {
        rapidoc.current.scrollToPath(
          window.location.hash.slice(1) || 'overview'
        )
      }
    }

    router.events.on('hashChangeComplete', scrollDoc)
    return () => {
      router.events.off('hashChangeComplete', scrollDoc)
    }
  }, [])

  return (
    <>
      <Head>
        <title>OpenAPI Preview</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Box sx={styles.previewContainer}>
        <PageHeader
          title="OpenAPI Preview"
          description="Preview the rendered OpenAPI below. This is an overview and you can expand the endpoints by clicking on them."
          imageUrl={image}
          imageAlt="OpenAPI Preview image"
        />
        <Box sx={styles.previewContent}>
          <rapi-doc
            ref={rapidoc}
            spec={spec}
            layout="column"
            route-prefix="#"
            render-style="view"
            show-header="false"
            show-side-nav="false"
            default-schema-tab="schema"
            fill-request-fields-with-example={true}
            theme="light"
            bg-color="#FFFFFF"
            primary-color="#142032"
            regular-font="VTEX Trust Regular"
            mono-font="Consolas,monaco,monospace"
            medium-font="VTEX Trust Medium"
            load-fonts={false}
            schema-style="table"
            schema-description-expanded={true}
            id="the-doc"
            allow-spec-file-download={true}
          />
        </Box>
      </Box>
    </>
  )
}

OpenAPIPreviewPage.hideSidebar = true
OpenAPIPreviewPage.isEditor = true

export default OpenAPIPreviewPage
