import { SxStyleProp } from '@vtex/brand-ui'

const filterButton: SxStyleProp = {
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  fontSize: '14px',
  gap: '8px',
  px: '8px',
  transition: '0.3s',
  height: '30px',
  ':hover': {
    color: '#F71963',
  },
  width: 'min-content',
  mt: '16px',
  mb: '12px',
}

const filterButtonText: SxStyleProp = {
  display: ['none', 'block', 'block'],
}

const numberOfFilters: SxStyleProp = {
  backgroundColor: '#FFE0EF',
  color: '#F71963',
  borderRadius: '4px',
  px: '4px',
}

const blanket: SxStyleProp = {
  margin: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(20, 32, 50, 0.70)',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '9999',
}

const container: SxStyleProp = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '612px',
  maxWidth: '100vw',
  borderRadius: '5px',
  backgroundColor: '#ffff',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  zIndex: '10000',
  overflow: 'auto',
  height: ['100vh', 'auto'],
}

const innerContainer: SxStyleProp = {
  p: '24px',
  maxHeight: ['calc(100vh - 145px)', 'calc(100vh - 6rem - 112px)'],
  overflow: 'auto',
}

const topContainer: SxStyleProp = {
  display: 'grid',
  width: '100%',
  borderBottom: '1px solid #E7E9EE',
  gridTemplateColumns: '1fr 64px',
  alignItems: 'center',
  gap: '24px',
  height: '64px',
}

const modalTitle: SxStyleProp = {
  fontSize: '16px',
  textAlign: 'center',
}

const closeButtonContainer: SxStyleProp = {
  cursor: 'pointer',
  borderLeft: '1px solid #E7E9EE',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '0.3s',
  ':hover': {
    color: '#E31C58',
  },
}

const filterContainer: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}

const tagContainer: SxStyleProp = {
  gap: '16px',
  overflowX: 'auto',
  overflowY: 'hidden',
  height: '24px',
}

const tag: SxStyleProp = {
  cursor: 'pointer',
  transition: '0.3s',
  ':active': {
    position: 'relative',
    top: '1px',
  },
}

const checkBoxContainer: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gap: '24px',
  alignItems: 'top',
  fontSize: '12px',
  color: '#4A596B',
}

const buttonsContainer: SxStyleProp = {
  py: '16px',
  px: '32px',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: '1px solid #E7E9EE',
}

const sectionDivider: SxStyleProp = {
  hr: {
    border: '1px solid #E7E9EE',
    mb: '24px',
    mt: '24px',
  },
}

const filterTitle: SxStyleProp = {
  fontSize: '20px',
}

const removeButton: SxStyleProp = {
  backgroundColor: 'transparent',
  color: '#4A596B',
  textTransform: 'none',
  transition: '0.3s',
  p: '0',

  ':hover': {
    backgroundColor: 'transparent',
    color: '#E31C58',
  },
}

export default {
  filterButton,
  filterButtonText,
  numberOfFilters,
  blanket,
  container,
  innerContainer,
  topContainer,
  modalTitle,
  closeButtonContainer,
  filterContainer,
  tagContainer,
  tag,
  checkBoxContainer,
  buttonsContainer,
  sectionDivider,
  filterTitle,
  removeButton,
}
