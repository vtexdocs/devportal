import { Fragment } from 'react'
import { Text } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const VTEXIOAppsPage: NextPage<Props> = () => {
  return (
    <Fragment>
      <Text>VTEX IO Apps</Text>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'VTEX IO Apps'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
    },
  }
}

export default VTEXIOAppsPage
