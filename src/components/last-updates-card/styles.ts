import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  mt: ['16px', '24px'],
  px: ['16px', '32px', '24px'],
  py: ['16px', '40px', '64px'],
  width: ['100%', 'auto', '100%'],
  maxWidth: '1084px',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  transition: 'all 0.3s ease-out',

  '.updateTitle, .updateDescription': {
    transition: 'all 0.3s ease-out',
  },

  ':active, :hover': {
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
    'box-shadow': '0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #96B2F2',
    '.updateTitle': {
      color: '#0C1522',
    },
  },

  ':hover': {
    'box-shadow': '0px 0px 16px rgba(0, 0, 0, 0.1)',
    '.updateTitle': {
      color: '#000711',
    },
  },
}

const updateContainer: SxStyleProp = {
  mr: ['0px', '0px', '16px'],
  width: ['100%', '100%', '41%'],
  alignItems: 'flex-start',
}

const updateIcon: SxStyleProp = {
  my: ['2px', '0px'],
  mr: ['6px', '8px'],
  width: ['16px', '24px'],
  minWidth: '12px',
  minHeight: '12px',
  height: 'auto',
}

const updateTitle: SxStyleProp = {
  fontSize: ['16px', '18px', '22px'],
  lineHeight: ['22px', '24px', '32px'],
  fontWeight: '400',
  color: 'muted.0',
}

const updateDescription: SxStyleProp = {
  fontSize: ['12px', '16px'],
  lineHeight: ['16px', '22px'],
  fontWeight: '400',
  color: 'muted.1',
}

const actionContainer: SxStyleProp = {
  alignItems: 'flex-start',
  display: ['none', 'none', 'block'],
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
  fontWeight: '400',
  lineHeight: '18px',
  color: '#4A4A4A',
}

const actionDescriptionContainer: SxStyleProp = {
  mt: '4px',
  ml: '8px',
  pl: '16px',
  borderLeft: '1px solid #CCCED8',
}

const actionDescription: SxStyleProp = {
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '24px',
  color: 'muted.0',
}

const actionTime: SxStyleProp = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
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
