/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any*/

import { createContext } from 'react'
import Tracker from '@openreplay/tracker'
import { v4 as uuidV4 } from 'uuid'
import { useReducer } from 'react'

type ContextType = {
  startTracking: () => void
  initTracker: () => void
}

export const TrackerContext = createContext<ContextType>({
  startTracking: () => {},
  initTracker: () => {},
})

function defaultGetUserId() {
  return uuidV4()
}
function newTracker(config: {
  userIdEnabled: any
  getUserId: any
  projectKey: any
}) {
  const getUserId =
    config?.userIdEnabled && config?.getUserId
      ? config.getUserId
      : defaultGetUserId
  let userId = null
  const trackerConfig = {
    projectKey:
      config?.projectKey || process.env.NEXT_PUBLIC_OPENREPLAY_PROJECT_KEY,
    ingestPoint: 'https://openreplay.vtex.com/ingest',
  }
  const tracker = new Tracker(trackerConfig)
  if (config?.userIdEnabled) {
    userId = getUserId()
    tracker.setUserID(userId)
  }
  return tracker
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function reducer(state, action) {
  switch (action.type) {
    case 'init': {
      if (!state.tracker) {
        console.log('Instantiaing the tracker for the first time...')
        return { ...state, tracker: newTracker(state.config) }
      }
      return state
    }
    case 'start': {
      console.log('Starting tracker...')
      state.tracker.start()
      return state
    }
  }
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function TrackerProvider({ children, config = {} }) {
  const [state, dispatch] = useReducer(reducer, { tracker: null, config })
  state
  const value = {
    startTracking: () => dispatch({ type: 'start' }),
    initTracker: () => dispatch({ type: 'init' }),
  }
  return (
    <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
  )
}
