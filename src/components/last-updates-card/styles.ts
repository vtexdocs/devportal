import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  mt: ['16px', '24px', '24px', '32px'],
  paddingLeft: ['16px', '32px', '24px', '32px'],
  paddingRight: ['16px', '32px', '24px', '32px', '24px'],
  py: ['16px', '40px', '64px'],
  width: '100%',
  justifyContent: 'space-between',
  maxWidth: '1035px',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  transition: 'all 0.3s ease-out',

  '.updateTitle, .updateDescription': {
    transition: 'all 0.3s ease-out',
  },

  ':active, :hover': {
    cursor: 'pointer',
    borderColor: '#CCCED8',
    transition: 'all 0.3s ease-out',

    '.updateTitle, .updateDescription': {
      transition: 'all 0.3s ease-out',
    },

    '.updateDescription': {
      color: 'muted.0',
    },
  },

  ':active': {
    boxShadow: '0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #96B2F2',
    '.updateTitle': {
      color: '#0C1522',
    },
  },

  ':hover': {
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    '.updateTitle': {
      color: '#000711',
    },
  },
}

const updateContainer: SxStyleProp = {
  mr: ['0px', '0px', '16px'],
  width: ['100%', '100%', '427px', '427px', '41%'],
  minWidth: ['0', '0', '427px', '427px', '41%'],
  alignItems: 'center',
}

const updateIcon: SxStyleProp = {
  mr: ['6px', '8px'],
  minWidth: ['16px', '24px'],
  width: ['16px', '24px'],
  minHeight: '100%',
  height: '100%',
}

const updateTitle: SxStyleProp = {
  fontSize: ['16px', '18px', '18px', '18px', '22px'],
  lineHeight: ['22px', '24px', '24px', '24px', '32px'],
  fontWeight: '400',
  color: 'muted.0',
  display: 'flex',
}

const updateDescription: SxStyleProp = {
  fontSize: ['12px', '16px'],
  lineHeight: ['16px', '22px'],
  pl: ['22px', '32px'],
  fontWeight: '400',
  color: 'muted.1',
}

const actionContainer: SxStyleProp = {
  alignItems: 'flex-start',
  display: ['none', 'none', 'block'],
  width: ['277px', '277px', '100%', '100%', '580px'],
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
  fontSize: '16px',
  lineHeight: '18px',
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
  fontSize: ['16px', '16px', '16px', '16px', '18px'],
  lineHeight: ['22px', '22px', '22px', '22px', '24px'],
  fontWeight: '400',
  color: 'muted.0',
}

const actionTime: SxStyleProp = {
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: '400',
  color: 'muted.1',
}

export default {
  actionContainer,
  actionDescription,
  actionDescriptionContainer,
  actionIcon,
  actionTime,
  actionType,
  actionTypeContainer,
  cardContainer,
  updateContainer,
  updateDescription,
  updateIcon,
  updateTitle,
}
