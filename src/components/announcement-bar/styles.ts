import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  backgroundColor: '#fff9fa',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'default',
  width: '100%',
  padding: ['15px 15px', '15px 25px', '15px 50px'],
  ':focus': {
    outline: 'none',
  },
}

const box: SxStyleProp = {
  width: '100%',
  textAlign: 'center',
}

const label: SxStyleProp = {
  color: '#D4084C',
  backgroundColor: '#feeaef',
  borderRadius: '4px',
  padding: '5px 8px',
  marginRight: '10px',
  display: 'inline',
  fontWeight: '600',
  letterSpacing: '1px',
  fontSize: '13px',
}

const text: SxStyleProp = {
  color: '#142032',
  display: 'inline',
}
const textBold: SxStyleProp = {
  color: '#142032',
  fontWeight: '600',
  display: 'inline',
}

const link: SxStyleProp = {
  color: '#D4084C',
  display: 'inline',
  ':focus': {
    outline: 'none',
  },
}

const closeIcon: SxStyleProp = {
  display: 'block',
  float: 'right',
}

export default { container, closeIcon, box, label, text, textBold, link }
