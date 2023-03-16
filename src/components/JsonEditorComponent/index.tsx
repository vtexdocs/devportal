import React, { useState, useContext, useEffect } from 'react'
import { SidebarContext } from 'utils/contexts/sidebar'
import navigation from '../../../public/navigation.json'
import styles from './styles'
import { Box, Button } from '@vtex/brand-ui'

const initialData = navigation.navbar

function JsonEditorComponent() {
  const { setSidebarDataMaster } = useContext(SidebarContext)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    setSidebarDataMaster(initialData)
  }, [])
  const [data, setData] = useState(
    JSON.stringify(
      JSON.parse(JSON.stringify(initialData).toString()),
      undefined,
      2
    )
  )

  function handleChange(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setData(event.target.value)
  }

  function isJson(jsoncontent: string) {
    try {
      JSON.parse(jsoncontent) && typeof JSON.parse(jsoncontent) === 'object'
      return true
    } catch {
      return false
    }
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    isJson(data)
      ? setSidebarDataMaster(JSON.parse(data))
      : alert('Try again. This is not a valid JSON')
  }

  function handleRefresh(event: { preventDefault: () => void }) {
    setData(
      JSON.stringify(
        JSON.parse(JSON.stringify(initialData).toString()),
        undefined,
        2
      )
    )
    setSidebarDataMaster(initialData)
    event.preventDefault()
  }

  function handleCopy(event: { preventDefault: () => void }) {
    isJson(data)
      ? navigator.clipboard.writeText(
          JSON.stringify(JSON.parse(data), undefined, 2)
        )
      : navigator.clipboard.writeText(data)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
    event.preventDefault()
  }

  function handleClear(event: { preventDefault: () => void }) {
    setData('')
    setSidebarDataMaster('')
    event.preventDefault()
  }

  return (
    <Box sx={styles.formBox}>
      <form onSubmit={handleSubmit}>
        <Box sx={styles.formControls}>
          <Button type="button" onClick={handleCopy}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="16rem" height="16rem" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={18}
                d="M215.993 183.995V39.994H71.986"
              />
              <path
                strokeWidth={18}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                d="M39.986 71.995h144.006v144H39.986z"
              />
            </svg>
            {isCopied ? 'Copied' : 'Copy'}
          </Button>
          <Button type="button" onClick={handleRefresh}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="16rem" height="16rem" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={18}
                d="M176.167 99.716h48v-48"
              />
              <path
                d="M65.775 65.775a88 88 0 0 1 124.45 0l33.942 33.94M79.833 156.284h-48v48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={18}
              />
              <path
                d="M190.225 190.225a88 88 0 0 1-124.45 0l-33.942-33.94"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={18}
              />
            </svg>
            Refresh
          </Button>
          <Button type="button" onClick={handleClear}>
            <svg
              fill="currentColor"
              height="800px"
              width="800px"
              viewBox="0 0 612.002 612.002"
            >
              <g>
                <path
                  d="M594.464,534.414H344.219L606.866,271.77c6.848-6.851,6.848-17.953,0-24.8L407.547,47.65
		c-3.291-3.288-7.749-5.135-12.401-5.135c-4.65,0-9.11,1.847-12.398,5.135L5.138,425.262c-6.851,6.848-6.851,17.95,0,24.8
		l114.29,114.287c3.288,3.291,7.749,5.138,12.398,5.138h462.638c9.684,0,17.536-7.852,17.536-17.536
		C612,542.265,604.148,534.414,594.464,534.414z M395.145,84.851L569.664,259.37L363.27,465.763L188.753,291.245L395.145,84.851z
		 M294.618,534.414H139.09L42.336,437.66l121.617-121.617l174.519,174.519L294.618,534.414z"
                />
              </g>
            </svg>
            Clear
          </Button>
        </Box>
        <textarea wrap="off" rows={25} value={data} onChange={handleChange} />
        <Button sx={styles.submitButton} type="submit" value="">
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default JsonEditorComponent
