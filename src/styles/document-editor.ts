import type { SxStyleProp } from '@vtex/brand-ui'
import guidesStyle from 'styles/documentation-page'

const previewContainer: SxStyleProp = {
  background: 'transparent',
  height: 'auto',
  mt: '64px',
}

const writeBox: SxStyleProp = {
  height: '100%',
}

const textArea: SxStyleProp = {
  top: '100px',
  position: 'sticky',
  height: ['400px', '400px', '500px', '700px'],
  marginLeft: '8px',
  width: '37vw',
  overflow: 'auto',
  background: '#f8f7fc',
  borderRadius: '8px',
  padding: '4px',
  border: '1px solid #e7e9ee',
  'pre, code, pre *, code *': {
    fontFamily: 'VTEX Trust Regular !important',
  },
  textarea: {
    outline: 'none',
  },
  '.title': {
    color: '#F71964',
  },
  '.important': {
    color: '#F71964',
  },
  '.url': {
    color: '#5e85ff',
  },
  '.bold': {
    color: '#162035',
  },
  '.code': {
    color: '',
    '.code-language': {
      color: '#F71964',
    },
    '.code-block': {
      color: '#FF95C8',
    },
  },
  '.punctuation': {
    color: '#162035',
  },
}

const editor: SxStyleProp = {
  fontFamily: '"Fira code", "Fira Mono", monospace',
  fontSize: '14px',
  float: 'left',
  minHeight: '100%',
  minWidth: '100%',
}

const renderedPageBox: SxStyleProp = {
  borderLeft: '2px solid #E7E9EE',
  paddingLeft: '8px',
  marginLeft: '8px',
  height: 'fit-content',
  width: '61vw',
}

const warning: SxStyleProp = {
  color: '#FFFFFF',
  padding: '8px',
  background: 'red',
  borderRadius: '4px',
  width: 'fit-content',
}

const errorBox: SxStyleProp = {
  margin: 'auto',
}

const errorMessage: SxStyleProp = {
  background: '#fdefef',
  border: '1px solid #dc5a41',
  width: 'auto',
  whiteSpace: 'break-spaces',
  padding: '12px',
  borderRadius: '12px',
}

const emptyMessage: SxStyleProp = {
  fontSize: '24px',
  textAlign: 'center',
}

export default {
  previewContainer,
  writeBox,
  textArea,
  editor,
  renderedPageBox,
  warning,
  errorBox,
  errorMessage,
  emptyMessage,
  ...guidesStyle,
}
