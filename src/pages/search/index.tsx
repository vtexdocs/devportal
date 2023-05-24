import { NextPage, GetStaticProps } from 'next'
import { Box, Flex } from '@vtexdocs/brand-ui'
import styles from 'styles/search-page'
import SearchSections from 'components/search-sections'
import SearchContextProvider from 'utils/contexts/search'
import SearchResults from 'components/search-results'
import SearchFilterTabBar from 'components/search-filter-tab-bar'
import SearchInput from 'components/search-input'
import getNavigation from 'utils/getNavigation'

const SearchPage: NextPage = () => {
  return (
    <SearchContextProvider>
      <Box>
        <Flex sx={styles.searchBarContainer}>
          <SearchInput />
        </Flex>
        <SearchFilterTabBar />
      </Box>
      <Flex sx={styles.body}>
        <SearchSections />
        <SearchResults />
      </Flex>
    </SearchContextProvider>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}) => {
  const sidebarfallback = await getNavigation()

  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'

  return {
    props: {
      sidebarfallback,
      branch,
    },
  }
}

export default SearchPage
