import { Flex, Box } from '@vtex/brand-ui'
import type { ReactElement } from 'react'
import { useContext, useEffect } from 'react'
import { TrackerContext } from 'utils/contexts/trackerContext'

import { ThemeProvider } from '@vtex/brand-ui'

import styles from 'styles/documentation-page'
import Header from 'components/header'
import Footer from 'components/footer'

import SidebarContextProvider from 'utils/contexts/sidebar'
import Sidebar from 'components/sidebar'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import Script from 'next/script'

interface Props {
  sidebarfallback: any //eslint-disable-line
  children: ReactElement
  hideSidebar?: boolean
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
      <Header />
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
      </div>
      <Flex sx={styles.container}>
        <SidebarContextProvider fallback={sidebarfallback}>
          {!hideSidebar && (
            <Sidebar
              parentsArray={parentsArray}
              sectionSelected={sectionSelected}
            />
          )}
          <Box sx={styles.mainContainer}>{children}</Box>
        </SidebarContextProvider>
      </Flex>
      <Footer />
    </ThemeProvider>
  )
}
