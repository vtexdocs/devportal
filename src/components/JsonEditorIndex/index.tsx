import React, { useState, useContext, useEffect } from 'react'
import { SidebarContext } from 'utils/contexts/sidebar'
import navigation from '../../../public/navigation.json'
import styles from './styles'
import { Box, Button } from '@vtex/brand-ui'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

const initialData = navigation.navbar[1].categories[3]

interface JsonEditorIndexProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleJsonDataChange: (data: any) => void
}

function JsonEditorIndex({ handleJsonDataChange }: JsonEditorIndexProps) {
  useEffect(() => {
    injectStyle()
  }, [])
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createMarkdownCode(data: any[] | Record<string, any>): string {
    let markdown = ''
    if (data instanceof Array) {
      for (let j = 0; j < data.length; j++) {
        const category = data[j]
        markdown += `### ${category.name}\n\n`
        if (category.children instanceof Array) {
          for (let i = 0; i < category.children.length; i++) {
            const child = category.children[i]
            if (child && child.method && child.endpoint) {
              markdown += `- \`${child.method}\` [${
                child.name ? child.name : ''
              }](https://developers.vtex.com/docs/api-reference/${
                child.slug
              }#${child.method.toLowerCase()}-/${child.endpoint.slice(1)})\n`
            }
            if (child && child.type === 'category') {
              markdown += `\n#### ${child.name}\n\n`
              for (let j = 0; j < child.children.length; j++) {
                const secondChild = child.children[j]
                if (child && secondChild.method && secondChild.endpoint) {
                  markdown += `- \`${secondChild.method}\` [${
                    secondChild.name ? secondChild.name : ''
                  }](https://developers.vtex.com/docs/api-reference/${
                    secondChild.slug
                  }#${secondChild.method.toLowerCase()}-/${secondChild.endpoint.slice(
                    1
                  )})\n`
                }
              }
            }
          }
        }
        markdown += '\n'
      }
    } else if (data instanceof Object) {
      markdown += `## ${data.name} Index\n\n`
      if (data.children && Array.isArray(data.children)) {
        for (let i = 0; i < data.children.length; i++) {
          const category = data.children[i]
          if (category.children && Array.isArray(category.children)) {
            markdown += `### ${category.name}\n\n`
            for (let j = 0; j < category.children.length; j++) {
              const child = category.children[j]
              if (child && child.method && child.endpoint) {
                markdown += `- \`${child.method}\` [${
                  child.name ? child.name : ''
                }](https://developers.vtex.com/docs/api-reference/${
                  child.slug
                }#${child.method.toLowerCase()}-/${child.endpoint.slice(1)})\n`
              }
              if (child && child.type === 'category') {
                markdown += `\n#### ${child.name}\n\n`
                for (let j = 0; j < child.children.length; j++) {
                  const secondChild = child.children[j]
                  if (child && secondChild.method && secondChild.endpoint) {
                    markdown += `- \`${secondChild.method}\` [${
                      secondChild.name ? secondChild.name : ''
                    }](https://developers.vtex.com/docs/api-reference/${
                      secondChild.slug
                    }#${secondChild.method.toLowerCase()}-/${secondChild.endpoint.slice(
                      1
                    )})\n`
                  }
                }
              }
            }
            markdown += '\n'
          }
        }
      }
    }
    return markdown
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    if (isJson(data)) {
      const parsedData = JSON.parse(data)
      handleJsonDataChange(parsedData)
      toast.success('The code was updated.')
      const markdownData = createMarkdownCode(parsedData)
      setData(JSON.stringify(parsedData, undefined, 2))
      setSidebarDataMaster(parsedData)
      setData(markdownData)
    } else {
      toast.error('Try again. This is not a valid JSON.')
    }
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
    toast.warning('Content reloaded.')
    event.preventDefault()
  }

  function handleCopy(event: { preventDefault: () => void }) {
    isJson(data)
      ? navigator.clipboard.writeText(
          JSON.stringify(JSON.parse(data), undefined, 2)
        )
      : navigator.clipboard.writeText(data)
    setIsCopied(true)
    toast.info('Content copied to the clipboard.')
    setTimeout(() => setIsCopied(false), 1000)
    event.preventDefault()
  }

  function handleClear(event: { preventDefault: () => void }) {
    setData('')
    setSidebarDataMaster('')
    toast.warning('Content cleared.')
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
        <Button sx={styles.submitButton} type="submit">
          Submit
        </Button>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </form>
    </Box>
  )
}

export default JsonEditorIndex
