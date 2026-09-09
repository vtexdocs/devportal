import { ArticleRender as PackageArticleRender } from '@vtexdocs/components'
import { ArticleRenderProps } from 'utils/typings/types'

import { getFastStoreMarkdownExtras } from 'components/faststore-components/markdown-renderer'
import getSiteUrl from 'utils/getSiteUrl'

const RAW_CONTENT_BASE_URL =
  'https://raw.githubusercontent.com/vtexdocs/dev-portal-content/main/'

const ArticleRender = ({
  sectionSelected,
  serialized,
  headingList,
  breadcumbList,
  contributors,
  seeAlsoData,
  pagination,
  slug,
  filePath,
  hideTOC,
  mdxProps,
  hidden = false,
  isListed,
  showReadingTime,
}: ArticleRenderProps) => {
  const pagePath =
    sectionSelected === 'Troubleshooting' ? 'troubleshooting' : 'guides'
  const urlToEdit = `https://github.com/vtexdocs/dev-portal-content/edit/main/${filePath}`
  const pageUrl = `${getSiteUrl()}/docs/${pagePath}/${slug}`
  const serializedWithHidden = {
    ...serialized,
    frontmatter: {
      ...serialized.frontmatter,
      hidden: hidden || Boolean(serialized.frontmatter?.hidden),
    },
  }

  return (
    <PackageArticleRender
      serialized={serializedWithHidden}
      breadcrumbList={breadcumbList}
      slug={slug}
      path={filePath}
      type={sectionSelected}
      pageUrl={pageUrl}
      urlToEdit={urlToEdit}
      rawContentBaseUrl={RAW_CONTENT_BASE_URL}
      contributors={contributors}
      headingList={headingList}
      pagination={pagination}
      seeAlso={seeAlsoData}
      showReadingTime={showReadingTime}
      hideTOC={hideTOC}
      showArticlePagination={isListed}
      {...getFastStoreMarkdownExtras(mdxProps)}
    />
  )
}

export default ArticleRender
