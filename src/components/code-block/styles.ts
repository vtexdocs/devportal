import type { SxStyleProp } from '@vtex/brand-ui'

const CodeBlock: SxStyleProp = {
  backgroundColor: '#f8f7fc !important',
  border: '1px solid #e7e9ee',
  borderRadius: '4px',
  lineBreak: 'auto',
  marginY: '16px',
  fontSize: '0.875em',
}

const CodeContent: SxStyleProp = {
  code: {
    backgroundColor: '#f8f7fc',
    paddingY: '0px !important',
  },
}

export default { CodeBlock, CodeContent }
