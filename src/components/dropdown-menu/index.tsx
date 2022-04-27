import { Box } from '@vtex/brand-ui'

import DropdownCard, { CardProps } from 'components/dropdown-card'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'
import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'

import styles from './styles'

const documentationCards: CardProps[] = [
  {
    title: 'API Guides',
    description: 'Quickly build and launch high-performance stores',
    to: '/docs/api-guides',
    Icon: APIGuidesIcon,
  },
  {
    title: 'API Reference',
    description: 'From ERP to custom-built integrations — extend',
    to: '/docs/api-reference',
    Icon: APIReferenceIcon,
  },
  {
    title: 'VTEX IO',
    description: 'VTEX IO is an enterprise low-code development',
    to: '/docs/vtex-io',
    Icon: VTEXIOIcon,
  },
  {
    title: 'FastStore',
    description: 'Quickly build and launch high-performance stores',
    to: '/docs/fast-store',
    Icon: FastStoreIcon,
  },
  {
    title: 'WebOps',
    description: 'From ERP to custom-built integrations — extend',
    to: '/docs/webops',
    Icon: WebOpsIcon,
  },
]

const updatesCards: CardProps[] = [
  {
    title: 'Release Notes',
    description: 'From ERP to custom-built integrations — extend',
    to: '/',
    Icon: ReleaseNotesIcon,
  },
  {
    title: 'Documentation Updates',
    description: 'From ERP to custom-built integrations — extend',
    to: '/',
    Icon: DocumentationUpdatesIcon,
  },
]

const DropdownMenu = () => {
  return (
    <Box sx={styles.outerContainer}>
      <Box sx={styles.innerContainer} data-cy="dropdown-menu">
        <Box
          sx={styles.documentationContainer}
          data-cy="dropdown-menu-first-section"
        >
          {documentationCards.map((card) => (
            <DropdownCard key={card.title} {...card} />
          ))}
        </Box>
        <Box
          sx={styles.updatesContainer}
          data-cy="dropdown-menu-second-section"
        >
          {updatesCards.map((card) => (
            <DropdownCard key={card.title} {...card} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DropdownMenu
