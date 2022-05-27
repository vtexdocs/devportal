import type { IconComponent } from 'utils/typings/types'

import AddedIcon from 'components/icons/added-icon'
import DeprecatedIcon from 'components/icons/deprecated-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'
import FixedIcon from 'components/icons/fixed-icon'
import ImprovedIcon from 'components/icons/improved-icon'
import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import RemovedIcon from 'components/icons/removed-icon'

export type ActionType =
  | 'added'
  | 'deprecated'
  | 'fixed'
  | 'improved'
  | 'removed'

export type UpdateType = 'documentation-updates' | 'release-notes'

export interface Action {
  type: ActionType
  title: string
  Icon: IconComponent
}

export interface Update {
  type: UpdateType
  title: string
  description: string
  Icon: IconComponent
}

const actions: Action[] = [
  {
    type: 'added',
    title: 'Added',
    Icon: AddedIcon,
  },
  {
    type: 'deprecated',
    title: 'Deprecated',
    Icon: DeprecatedIcon,
  },
  {
    type: 'fixed',
    title: 'Fixed',
    Icon: FixedIcon,
  },
  {
    type: 'improved',
    title: 'Improved',
    Icon: ImprovedIcon,
  },
  {
    type: 'removed',
    title: 'Removed',
    Icon: RemovedIcon,
  },
]

const updates: Update[] = [
  {
    type: 'documentation-updates',
    title: 'Documentation Updates',
    description: 'See what is new and latest documentation version',
    Icon: DocumentationUpdatesIcon,
  },
  {
    type: 'release-notes',
    title: 'Release Notes',
    description: 'See new features and changes in documentation',
    Icon: ReleaseNotesIcon,
  },
]

export const getAction = (actionType: ActionType): Action => {
  return actions.find((action) => action.type === actionType) as Action
}

export const getUpdate = (updateType: UpdateType): Update => {
  return updates.find((update) => update.type === updateType) as Update
}
