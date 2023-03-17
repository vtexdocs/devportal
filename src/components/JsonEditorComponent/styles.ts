import { SxStyleProp } from '@vtex/brand-ui'

const formBox: SxStyleProp = {
  textarea: {
    width: '100%',
    resize: 'none',
    padding: '20px',
    fontFamily: 'Consolas,monaco,monospace !important',
  },
}

const formControls: SxStyleProp = {
  display: 'flex',
  'button, input': {
    cursor: 'pointer',
    textTransform: 'capitalize',
    fontSize: '14px',
    backgroundColor: 'white',
    border: 'none',
    color: '#142032',
    display: 'flex',
    ':hover': {
      backgroundColor: 'white',
      color: '#F71963',
    },
    svg: {
      display: 'inline',
      width: '20px',
      mr: '5px',
    },
  },
}
const submitButton: SxStyleProp = {
  display: 'block',
  ml: 'auto',
  mr: '0',
  backgroundColor: '#142032',
}

export default {
  formBox,
  formControls,
  submitButton,
}
