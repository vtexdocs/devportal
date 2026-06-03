import { Fragment, useState, useMemo, useEffect } from 'react'
import { Box, Flex, Link, Text } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import PageHeader from 'components/page-header'
import { getMessages } from 'utils/get-messages'
import image from '../../../../public/images/troubleshooting-image-header.png'
import styles from 'styles/documentation-landing-page'
import { TroubleshootingCardsElements } from 'utils/typings/types'
import Head from 'next/head'
import getTroubleshootingData, {
  ITroubleshootingFrontmatter,
} from 'utils/getTroubleshootingData'
import TroubleshootingCard from 'components/troubleshooting-card'
import Pagination from 'components/pagination'
import { resourceTroubleshooting } from 'utils/constants'
import { Input } from '@vtexdocs/components'
import { SearchIcon } from '@vtexdocs/components'
import Filter from 'components/filter'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  troubleshootingData: TroubleshootingCardsElements[]
  availableDomainFilters: string[]
  availableSymptomFilters: string[]
}

const TroubleshootingPage: NextPage<Props> = ({
  troubleshootingData,
  availableDomainFilters,
  availableSymptomFilters,
}) => {
  const [search, setSearch] = useState<string>('')
  const [domainFilters, setDomainFilters] = useState<string[]>([])
  const [symptomFilters, setSymptomFilters] = useState<string[]>([])

  const filteredResult = useMemo(() => {
    const selectedDomainFilters = new Set(
      domainFilters.map((filter) => filter.toLowerCase())
    )
    const selectedSymptomFilters = new Set(
      symptomFilters.map((filter) => filter.toLowerCase())
    )
    const hasDomainFilters = selectedDomainFilters.size > 0
    const hasSymptomFilters = selectedSymptomFilters.size > 0

    return troubleshootingData.filter((troubleshooting) => {
      const matchesSearch = troubleshooting.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const itemDomainFiltersLower = (troubleshooting.domainFilters || []).map(
        (filter) => filter.toLowerCase()
      )
      const itemSymptomFiltersLower = (
        troubleshooting.symptomFilters || []
      ).map((filter) => filter.toLowerCase())
      const matchesDomainFilters =
        !hasDomainFilters ||
        itemDomainFiltersLower.some((filter) =>
          selectedDomainFilters.has(filter)
        )
      const matchesSymptomFilters =
        !hasSymptomFilters ||
        itemSymptomFiltersLower.some((filter) =>
          selectedSymptomFilters.has(filter)
        )

      return matchesSearch && matchesDomainFilters && matchesSymptomFilters
    })
  }, [domainFilters, search, symptomFilters, troubleshootingData])

  const messages = getMessages()
  const itemsPerPage = 4
  const [page, setPage] = useState({
    curr: 1,
    total: Math.ceil(troubleshootingData.length / itemsPerPage),
  })

  useEffect(() => {
    setPage({
      curr: 1,
      total: Math.ceil(filteredResult.length / itemsPerPage),
    })
  }, [filteredResult])

  const paginatedResult = useMemo(() => {
    return filteredResult.slice(
      (page.curr - 1) * itemsPerPage,
      page.curr * itemsPerPage
    )
  }, [filteredResult, page, itemsPerPage])

  function handleClick(props: { selected: number }) {
    if (props.selected !== undefined && props.selected !== page.curr)
      setPage({ ...page, curr: props.selected })
  }

  return (
    <>
      <Head>
        <title>{messages['troubleshooting.title']}</title>
        <meta
          property="og:title"
          content={messages['troubleshooting.subtitle']}
          key="title"
        />
        <meta
          name="docsearch:doctitle"
          content={messages['troubleshooting.title']}
        />
        <meta name="docsearch:doctype" content="Troubleshooting" />
      </Head>
      <Fragment>
        <PageHeader
          title={messages['troubleshooting.title']}
          description={messages['troubleshooting.subtitle']}
          imageUrl={image}
          imageAlt={messages['troubleshooting.title']}
        />
        <Box sx={styles.contentContainer}>
          <Filter
            tagFilterName="Type"
            tagFilter={availableSymptomFilters}
            filterName="Area"
            checkBoxFilter={availableDomainFilters}
            onApply={(newFilters) => {
              setSymptomFilters(newFilters.tag)
              setDomainFilters(newFilters.checklist)
            }}
            selectedCheckboxes={domainFilters}
            selectedTags={symptomFilters}
          />
          <Input
            placeholder="Search for identified issues, diagnostics, and fixes..."
            Icon={SearchIcon}
            value={search}
            onChange={(value: string) => setSearch(value)}
          />
          {paginatedResult.length > 0 ? (
            paginatedResult.map((item: TroubleshootingCardsElements) => (
              <Flex key={item.slug}>
                <TroubleshootingCard
                  title={item.title}
                  description={item.description}
                  slug={item.slug}
                  tags={item?.tags}
                  domainFilters={item?.domainFilters}
                  symptomFilters={item?.symptomFilters}
                />
              </Flex>
            ))
          ) : (
            <Text sx={styles.noResultsText}>No results found</Text>
          )}
          <Pagination
            forcePage={page.curr}
            pageCount={page.total}
            onPageChange={handleClick}
          />
          <Box sx={styles.resourcesSectionContainer}>
            <Text sx={styles.contentTitle}>
              {messages['troubleshooting_page_other_resources.title']}
            </Text>
            <Box>
              {resourceTroubleshooting.map((resourceTroubleshooting) => (
                <Box
                  key={resourceTroubleshooting.title}
                  sx={styles.resourceContainer}
                >
                  <Link
                    target="_blank"
                    href={resourceTroubleshooting.link}
                    sx={styles.resourceTitle}
                  >
                    {resourceTroubleshooting.title}
                  </Link>
                  <Text sx={styles.resourceDescription}>
                    {resourceTroubleshooting.description}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Fragment>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}) => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'Troubleshooting'
  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'
  const troubleshootingData = await getTroubleshootingData(branch)

  const allDomainFilters = new Set<string>()
  const allSymptomFilters = new Set<string>()
  troubleshootingData.forEach(
    (troubleshooting: ITroubleshootingFrontmatter) => {
      troubleshooting.domainFilters?.forEach((filter) =>
        allDomainFilters.add(filter)
      )
      troubleshooting.symptomFilters?.forEach((filter) =>
        allSymptomFilters.add(filter)
      )
    }
  )
  const availableDomainFilters = Array.from(allDomainFilters).sort()
  const availableSymptomFilters = Array.from(allSymptomFilters).sort()

  return {
    props: {
      sidebarfallback,
      sectionSelected,
      troubleshootingData,
      branch,
      availableDomainFilters,
      availableSymptomFilters,
    },
  }
}

export default TroubleshootingPage
