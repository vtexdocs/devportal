import type { IconComponent } from 'utils/typings/types'

import {
  DocumentationUpdatesIcon,
  AddedIcon,
  DeprecatedIcon,
  FixedIcon,
  ImprovedIcon,
  ReleaseNotesIcon,
  RemovedIcon,
  InfoIcon,
} from '@vtexdocs/components'

export type ActionType =
  | 'added'
  | 'deprecated'
  | 'fixed'
  | 'improved'
  | 'removed'
  | 'info'

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

export const actions: Action[] = [
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
  {
    type: 'info',
    title: 'Information',
    Icon: InfoIcon,
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
    description: 'Stay up to date with our latest releases',
    Icon: ReleaseNotesIcon,
  },
]

export const getAction = (actionType: ActionType): Action => {
  return actions.find((action) => action.type === actionType) as Action
}

export const getUpdate = (updateType: UpdateType): Update => {
  return updates.find((update) => update.type === updateType) as Update
}
