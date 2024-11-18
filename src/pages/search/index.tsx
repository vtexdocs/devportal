import { NextPage, GetStaticProps } from 'next'
import getNavigation from 'utils/getNavigation'
import { Search } from '@vtexdocs/components'
import { useRouter } from 'next/router'
import Head from 'next/head'

const SearchPage: NextPage = () => {
  const router = useRouter()
  const { keyword } = router.query

  const pageTitle = keyword ? `Showing results for ${keyword}` : 'Search'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Search />
    </>
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
