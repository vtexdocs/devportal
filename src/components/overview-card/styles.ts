import type { SxStyleProp } from '@vtex/brand-ui'

const overviewCard: SxStyleProp = {
  alignItems: 'flex-start',
  margin: '40px 0px',
  ul: {
    borderLeft: '1px rgb(202, 203, 204) solid',
    fontSize: '0.875em',
    paddingLeft: '1.5em',
    listStyleType: 'none',
    display: 'block',
    textDecoration: 'none',
  },
  h3: {
    fontSize: '1.125em',
    fontWeight: '600',
    my: '0',
  },
  h4: {
    fontSize: '1.05em',
    fontWeight: '400',
    marginBottom: '0',
  },
}

const overviewIcon: SxStyleProp = {
  marginRight: '1.25em',
  marginTop: '0.375em',
}

export default {
  overviewCard,
  overviewIcon,
}
