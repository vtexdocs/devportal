import { NextPage, GetStaticProps } from 'next'
import getNavigation from 'utils/getNavigation'
import { Search } from '../../../dist/index.mjs'

const SearchPage: NextPage = () => {
  return <Search />
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
