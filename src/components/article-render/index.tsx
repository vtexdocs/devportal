import { ArticleRender as PackageArticleRender } from '@vtexdocs/components'
import { ArticleRenderProps } from 'utils/typings/types'

import { getFastStoreMarkdownExtras } from 'components/faststore-components/markdown-renderer'
import getSiteUrl from 'utils/getSiteUrl'

const RAW_CONTENT_BASE_URL =
  'https://raw.githubusercontent.com/vtexdocs/dev-portal-content/main/'

const getPageUrl = (sectionSelected: string, slug: string) => {
  if (sectionSelected === 'Release Notes') {
    return `${getSiteUrl()}/updates/release-notes/${slug}`
  }

  const pagePath =
    sectionSelected === 'Troubleshooting' ? 'troubleshooting' : 'guides'
  return `${getSiteUrl()}/docs/${pagePath}/${slug}`
}

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
  showAskAIMenu,
  showAuthor,
  showContributors,
  showFeedbackSection,
  showSuggestEdits,
  showTableOfContents,
  showDateText,
  showCreatedAt,
  createdAtFormat,
  children,
}: ArticleRenderProps) => {
  const urlToEdit = `https://github.com/vtexdocs/dev-portal-content/edit/main/${filePath}`
  const pageUrl = getPageUrl(sectionSelected, slug)
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
      showAskAIMenu={showAskAIMenu}
      showAuthor={showAuthor}
      showContributors={showContributors}
      showFeedbackSection={showFeedbackSection}
      showSuggestEdits={showSuggestEdits}
      showTableOfContents={showTableOfContents}
      showCreatedAt={showCreatedAt ?? showDateText}
      createdAtFormat={createdAtFormat}
      hideTOC={hideTOC}
      showArticlePagination={isListed}
      {...getFastStoreMarkdownExtras(mdxProps)}
    >
      {children}
    </PackageArticleRender>
  )
}

export default ArticleRender
