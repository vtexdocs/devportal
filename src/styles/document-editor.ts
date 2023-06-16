import type { SxStyleProp } from '@vtex/brand-ui'
import guidesStyle from 'styles/documentation-page'

const previewContainer: SxStyleProp = {
  background: 'transparent',
  height: 'auto',
  mt: '64px',
}

const title: SxStyleProp = {
  fontSize: '32px',
  paddingLeft: '24px',
}

const subtitle: SxStyleProp = {
  color: '#A1A8B3',
  fontSize: '18px',
  marginBlock: '8px 24px',
  paddingLeft: '24px',
}

const writeContainer: SxStyleProp = {
  position: 'relative',
}

const writeBox: SxStyleProp = {
  height: '100%',
  flexDirection: ['column', 'column', 'row'],
}

const textArea: SxStyleProp = {
  top: '100px',
  position: ['initial', 'initial', 'sticky'],
  height: ['400px', '400px', '75vh'],
  marginLeft: '8px',
  width: ['100%', '100%', '37vw'],
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

const copyButton: SxStyleProp = {
  position: 'sticky',
  top: '8px',
  right: '8px',
  zIndex: '1',
}

const editor: SxStyleProp = {
  fontFamily: '"Fira code", "Fira Mono", monospace',
  fontSize: '14px',
  float: 'left',
  minHeight: '100%',
  minWidth: '100%',
}

const renderedPageBox: SxStyleProp = {
  borderLeft: ['none', 'none', '2px solid #E7E9EE'],
  borderTop: ['2px solid #E7E9EE', '2px solid #E7E9EE', 'none'],
  marginTop: ['24px', '24px', '0'],
  paddingLeft: ['0', '0', '8px'],
  marginLeft: '8px',
  height: 'fit-content',
  width: ['100%', '100%', '61vw'],
}

const warning: SxStyleProp = {
  color: '#FFFFFF',
  padding: '8px',
  background: 'red',
  borderRadius: '4px',
  width: 'fit-content',
}

const errorBox: SxStyleProp = {
  justifyContent: 'center',
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
  title,
  subtitle,
  writeContainer,
  writeBox,
  textArea,
  copyButton,
  editor,
  renderedPageBox,
  warning,
  errorBox,
  errorMessage,
  emptyMessage,
  ...guidesStyle,
}
