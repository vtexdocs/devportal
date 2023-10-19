import APIGuidesIcon from 'components/icons/api-guides-icon'
import AnnouncementIcon from 'components/icons/announcement-icon'
import DashboardsIcon from 'components/icons/dashboards-icon'

import { getMessages } from 'utils/get-messages'
import {
  getCommunityURL,
  getLearningCenterURL,
  getDeveloperPortalURL,
  getHelpCenterURL,
  getSupportURL,
} from 'utils/get-url'

import {
  DocDataElement,
  UpdatesDataElement,
  WhatsNextDataElement,
  ResourceDataElement,
} from './typings/types'
import { IntlShape } from 'react-intl'

export const messages = getMessages()

export const documentationData = (intl: IntlShape) => {
  const data: DocDataElement[] = [
    {
      Icon: APIGuidesIcon,
      title: 'Start here',
      description: intl.formatMessage({
        id: 'documentation_api_guides.description',
      }),
      link: '/docs/tracks',
    },
    {
      Icon: DashboardsIcon,
      title: 'Tutorials & Solutions',
      description: intl.formatMessage({
        id: 'documentation_api_reference.description',
      }),
      link: '/docs/tutorial',
    },
  ]
  return data
}

export const updatesData = (intl: IntlShape) => {
  const data: UpdatesDataElement[] = [
    {
      Icon: AnnouncementIcon,
      title: 'News',
      description: intl.formatMessage({
        id: 'updates_release_notes.description',
      }),
      link: '/updates/announcements',
    },
  ]
  return data
}
export const getIcon = (doc: string, intl: IntlShape) => {
  return (
    documentationData(intl).find((icon) => icon.title === doc)?.Icon ||
    updatesData(intl).find((icon) => icon.title === doc)?.Icon
  )
}

export const whatsNextData = (intl: IntlShape) => {
  const data: WhatsNextDataElement[] = [
    {
      title: intl.formatMessage({
        id: 'app_development_page_new_to_app_development.title',
      }),
      description: intl.formatMessage({
        id: 'app_development_page_new_to_app_development.description',
      }),
      linkTitle: intl.formatMessage({
        id: 'app_development_page_new_to_app_development.link',
      }),
      linkTo: '/docs/guides/vtex-io-getting-started',
    },
    {
      title: intl.formatMessage({
        id: 'app_development_page_solve_real_world_issues.title',
      }),
      description: intl.formatMessage({
        id: 'app_development_page_solve_real_world_issues.description',
      }),
      linkTitle: intl.formatMessage({
        id: 'app_development_page_solve_real_world_issues.link',
      }),
      linkTo: '/docs/guides/app-development-guides',
    },
    {
      title: intl.formatMessage({
        id: 'app_development_page_build_foundations.title',
      }),
      description: intl.formatMessage({
        id: 'app_development_page_build_foundations.description',
      }),
      linkTitle: intl.formatMessage({
        id: 'app_development_page_build_foundations.link',
      }),
      linkTo: '/docs/guides/concepts',
    },
    {
      title: intl.formatMessage({
        id: 'app_development_page_go_further.title',
      }),
      description: intl.formatMessage({
        id: 'app_development_page_go_further.description',
      }),
      linkTitle: intl.formatMessage({
        id: 'app_development_page_go_further.link',
      }),
      linkTo:
        '/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store',
    },
  ]
  return data
}

export const resources = (intl: IntlShape) => {
  const data: ResourceDataElement[] = [
    {
      title: 'Community',
      description: intl.formatMessage({
        id: 'app_development_page_other_resources_community.description',
      }),
      link: getCommunityURL(),
    },
    {
      title: 'Learning Center',
      description: intl.formatMessage({
        id: 'app_development_page_other_resources_learning_center.description',
      }),
      link: getLearningCenterURL(),
    },
    {
      title: 'Developer Portal',
      description: intl.formatMessage({
        id: 'app_development_page_other_resources_github.description',
      }),
      link: getDeveloperPortalURL(),
    },
    {
      title: 'Help Center',
      description: intl.formatMessage({
        id: 'app_development_page_other_resources_help_center.description',
      }),
      link: getHelpCenterURL(),
    },
    {
      title: 'Support',
      description: intl.formatMessage({
        id: 'app_development_page_other_resources_support.description',
      }),
      link: getSupportURL(),
    },
  ]

  return data
}
