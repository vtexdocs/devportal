import { Flex, Box } from '@vtex/brand-ui'
import type { ReactElement } from 'react'
import { ThemeProvider } from '@vtex/brand-ui'

import styles from 'styles/documentation-page'
import Header from 'components/header'
import Footer from 'components/footer'

import { Sidebar, LibraryContextProvider } from '@vtexdocs/components'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import Script from 'next/script'
import { documentationData, updatesData } from 'utils/constants'

interface Props {
  sidebarfallback: any //eslint-disable-line
  children: ReactElement
  hideSidebar?: boolean
  isPreview: boolean
  isEditor?: boolean
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  parentsArray?: string[]
}

export default function Layout({
  children,
  sidebarfallback,
  hideSidebar,
  isPreview = false,
  isEditor,
  sectionSelected,
  parentsArray,
}: Props) {
  return (
    <ThemeProvider>
      <LibraryContextProvider
        sections={[documentationData, updatesData]}
        hamburguerMenuSections={[documentationData, updatesData]}
        isPreview={isPreview}
        fallback={sidebarfallback}
        sectionSelected={sectionSelected ?? ''}
      >
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WGQQ964"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
        <div className="container">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-56275648-4"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-56275648-4');
        `}
          </Script>
          <Script id="GTM-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-WGQQ964')
					`}
          </Script>
        </div>
        <Header isEditor={isEditor ? true : false} />
        <Flex sx={styles.container}>
          {!hideSidebar && <Sidebar parentsArray={parentsArray} />}
          <Box sx={styles.mainContainer}>{children}</Box>
        </Flex>
        <Footer />
      </LibraryContextProvider>
    </ThemeProvider>
  )
}
