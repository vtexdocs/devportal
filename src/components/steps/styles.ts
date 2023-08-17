import type { SxStyleProp } from '@vtex/brand-ui'

const steps: SxStyleProp = {
  ml: '4px',
  mt: '12px',
  mb: '27px',
  borderLeft: '1px solid #e5e7eb',
  pl: '25px',
  position: 'relative',
  '.heading': {
    counterIncrement: `step`,
  },
  '.heading:before': {
    content: `counter(step)`,
    position: 'absolute',
    border: '4px solid #ffffff',
    width: '2em',
    height: '2em',
    left: '-1.3em',
    color: '#a1a1aa',
    backgroundColor: '#f2f3f6',
    borderRadius: '9999px',
    fontSize: '1em',
    textAlign: 'center',
    lineHeight: '2em',
  },
}

export default {
  steps,
}
