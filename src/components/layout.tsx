import { Flex, Box } from '@vtex/brand-ui'
import type { ReactElement } from 'react'

import { ThemeProvider } from '@vtex/brand-ui'

import styles from 'styles/documentation-page'
import Header from 'components/header'
import Footer from 'components/footer'

import SidebarContextProvider from 'utils/contexts/sidebar'
import Sidebar from 'components/sidebar'

interface Props {
  sidebarfallback: any //eslint-disable-line
  children: ReactElement
}

export default function Layout({ children, sidebarfallback }: Props) {
  return (
    <ThemeProvider>
      <Header />
      <Flex sx={styles.container}>
        <SidebarContextProvider fallback={sidebarfallback}>
          <Sidebar />
          <Box sx={styles.mainContainer}>{children}</Box>
        </SidebarContextProvider>
      </Flex>
      <Footer />
    </ThemeProvider>
  )
}
