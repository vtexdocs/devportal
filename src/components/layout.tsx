import { Flex, Box } from '@vtex/brand-ui'
import type { ReactElement } from 'react'
import { useContext, useEffect } from 'react'
import { TrackerContext } from 'utils/contexts/trackerContext'

import { ThemeProvider } from '@vtex/brand-ui'

import styles from 'styles/documentation-page'
import Header from 'components/header'
import Footer from 'components/footer'

import {
  Sidebar,
  LibraryContextProvider,
  CookieBar,
} from '@vtexdocs/components'
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

// const tracker = new OpenReplay({
//   projectKey: "nvlaGLe4ZcfRvJmjqE61",
//   ingestPoint: "https://openreplay.vtex.com/ingest",
// });

export default function Layout({
  children,
  sidebarfallback,
  hideSidebar,
  isPreview = false,
  isEditor,
  sectionSelected,
  parentsArray,
}: Props) {
  const { initTracker, startTracking } = useContext(TrackerContext)
  useEffect(() => {
    initTracker()
    startTracking()
  }, [])

  return (
    <ThemeProvider>
      <LibraryContextProvider
        sections={[documentationData, updatesData]}
        isPreview={isPreview}
        fallback={sidebarfallback}
        sectionSelected={sectionSelected ?? ''}
        hamburguerMenuSections={[documentationData, updatesData]}
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
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
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
        <CookieBar
          onAccept={() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const window2 = window as any
            window2.gtag('consent', 'update', {
              ad_storage: 'granted',
              analytics_storage: 'granted',
            })
          }}
        />
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
