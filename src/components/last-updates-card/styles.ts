import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  mt: ['16px', '24px', '32px'],
  px: ['16px', '24px', '32px'],
  py: ['20px', '32px', '40px'],
  width: '100%',
  maxWidth: '1035px',
  flexDirection: ['column', 'column', 'row'],
  alignItems: ['flex-start', 'flex-start', 'center'],
  justifyContent: 'space-between',
  gap: ['16px', '20px', '32px'],
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  boxSizing: 'border-box',
  textAlign: 'left',
}

const updateContainer: SxStyleProp = {
  width: ['100%', '100%', '40%'],
  minWidth: 0,
  alignItems: 'center',
  flexShrink: 0,
  cursor: 'pointer',

  '.updateTitle, .updateDescription': {
    transition: 'all 0.3s ease-out',
  },

  ':hover .updateTitle': {
    color: '#000711',
  },

  ':hover .updateDescription': {
    color: 'muted.0',
  },
}

const updateIcon: SxStyleProp = {
  mr: ['6px', '8px'],
  minWidth: ['16px', '24px'],
  width: ['16px', '24px'],
  minHeight: '100%',
  height: '100%',
}

const updateTitle: SxStyleProp = {
  fontSize: ['16px', '18px'],
  lineHeight: ['22px', '24px'],
  fontWeight: '400',
  color: 'muted.0',
  display: 'flex',
  alignItems: 'center',
}

const updateDescription: SxStyleProp = {
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  pl: ['22px', '32px'],
  fontWeight: '400',
  color: 'muted.1',
}

const actionContainer: SxStyleProp = {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: ['16px', '20px'],
  width: '100%',
  pt: ['16px', '16px', 0],
  borderTop: ['1px solid #E7E9EE', '1px solid #E7E9EE', 'none'],
}

const actionItem: SxStyleProp = {
  display: 'block',
  width: '100%',
  cursor: 'pointer',
  textAlign: 'left',

  '.actionDescription': {
    transition: 'all 0.3s ease-out',
  },

  ':hover .actionDescription': {
    color: '#E31C58',
  },
}

const actionTypeContainer: SxStyleProp = {
  alignItems: 'center',
}

const actionIcon: SxStyleProp = {
  width: '16px',
  height: '16px',
  minWidth: 'initial',
  minHeight: 'initial',
}

const actionType: SxStyleProp = {
  ml: '8px',
  fontSize: ['14px', '16px'],
  lineHeight: ['18px', '22px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const actionDescriptionContainer: SxStyleProp = {
  mt: '4px',
  ml: '8px',
  pl: '16px',
  borderLeft: '1px solid #CCCED8',
}

const actionDescription: SxStyleProp = {
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  fontWeight: '400',
  color: 'muted.0',
}

const actionTime: SxStyleProp = {
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  fontWeight: '400',
  color: 'muted.1',
}

export default {
  actionContainer,
  actionDescription,
  actionDescriptionContainer,
  actionIcon,
  actionItem,
  actionTime,
  actionType,
  actionTypeContainer,
  cardContainer,
  updateContainer,
  updateDescription,
  updateIcon,
  updateTitle,
}
