import { UpdateElement } from './typings/types'

export default function getActionTypes(releaseData: UpdateElement[]) {
  const uniqueActionTypes = [
    ...new Set(releaseData.map((obj) => obj.actionType).filter(Boolean)),
  ]

  const actionTypes = uniqueActionTypes.map((actionType, index) => ({
    id: (index + 1).toString(),
    label: actionType,
  }))

  return actionTypes
}
