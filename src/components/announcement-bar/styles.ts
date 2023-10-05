import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = (type: string) => {
  const background = {
    color: type == 'warning' ? '#fff2d4' : '#fff9fa',
  }
  return {
    backgroundColor: `${background.color}`,
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
}

const box: SxStyleProp = {
  width: '100%',
  textAlign: 'center',
}

const label: SxStyleProp = (type: string) => {
  const labelColor = {
    bgColor: type == 'warning' ? '#ffe1a7' : '#feeaef',
    textColor: type == 'warning' ? '#142032' : '#D4084C',
  }

  return {
    color: `${labelColor.textColor}`,
    backgroundColor: `${labelColor.bgColor}`,
    borderRadius: '4px',
    padding: '5px 8px',
    marginRight: '10px',
    display: 'inline',
    fontWeight: '600',
    letterSpacing: '1px',
    fontSize: '13px',
  }
}

const button: SxStyleProp = (type: string) => {
  const labelColor = {
    bgColor: type == 'warning' ? '#ffe1a7' : '#feeaef',
  }

  return {
    color: '#D4084C',
    backgroundColor: `${labelColor.bgColor}`,
    borderRadius: '4px',
    padding: '5px 8px',
    marginLeft: '10px',
    display: 'inline',
    fontWeight: '600',
  }
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

export default {
  button,
  container,
  closeIcon,
  box,
  label,
  text,
  textBold,
  link,
}
