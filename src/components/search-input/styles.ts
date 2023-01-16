import type { SxStyleProp } from '@vtex/brand-ui'

const resultsContainer: SxStyleProp = {
  position: 'absolute',
  width: ['288px', '288px', '288px', '288px', '416px', '544px'],
  border: '1px solid #B9B9B9',
  borderRadius: '0px 0px 4px 4px',
  top: 'calc(5rem - 18px)',
  background: '#FFFFFF',
}

const resultsBox: SxStyleProp = {
  padding: '16px',
}

const seeAll: SxStyleProp = {
  padding: '24px',
  borderTop: '1px solid #E7E9EE',
  color: 'muted.0',
  cursor: 'pointer',
  ':hover': {
    background: '#F8F7FC',
    borderTop: '1px solid #d0cdcd',
  },
}

const hitBox: SxStyleProp = {
  padding: '8px',
  cursor: 'pointer',
  ':active, :hover': {
    backgroundColor: '#F8F7FC',
    borderRadius: '4px',
    '.hit-content-title': {
      color: '#000711',
    },
    '.hit-icon': {
      '> path': {
        stroke: '#000711',
      },
    },
  },
}

const hitIcon: SxStyleProp = {
  width: '16px',
  height: '16px',
  marginRight: '8px',
}

const hitContentContainer: SxStyleProp = {
  width: '100%',
}

const hitContent: SxStyleProp = {
  color: 'muted.0',
  fontSize: '16px',
  lineHeight: '22px',
  whiteSpace: 'pre',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const alignCenter: SxStyleProp = {
  alignItems: 'center',
}

const hitBreadCrumb: SxStyleProp = {
  color: 'muted.1',
  fontSize: '12px',
  lineHeight: '16px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const hitBreadCrumbIn: SxStyleProp = {
  ...hitBreadCrumb,
  minWidth: 'fit-content',
}

const hitBreadCrumbArrow: SxStyleProp = {
  width: '16px',
  height: '16px',
  color: 'muted.2',
}

const searchInput: SxStyleProp = {
  width: 'auto',
  background: 'none',
  border: '#F4F4F4',
  color: '#545454',
  fontSize: ['14px'],
  flex: 0,
  transition: 'flex 0.3s',
}

const searchIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  mr: '8px',
  flex: 0,
  maxWidth: 'fit-content',
}

const searchContainer: SxStyleProp = {
  paddingLeft: '12px',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#F4F4F4',
  width: '288px',
  height: '40px',
  borderRadius: '4px',
  transition: 'all 0.3s ease-out',
  cursor: 'pointer',
  ':hover': {
    transition: 'all 0.3s ease-out',
    width: ['288px', '288px', '288px', '288px', '416px', '544px'],
    border: '1px solid #3B3B3B',
  },
  ':focus-within': {
    background: '#FFFFFF',
    width: ['288px', '288px', '288px', '288px', '416px', '544px'],
    transition: 'all 0.3s ease-out',
    border: '1px solid #3B3B3B',
    boxShadow: '0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #B9B9B9',
    flex: 'auto',
    '.searchComponent': {
      flex: '1 !important',
    },
  },
}

const noResults: SxStyleProp = {
  justifyContent: 'center',
  alignContent: 'center',
  padding: '12px',
}

const hitContentHighlighted: SxStyleProp = {
  ...hitContent,
  background: '#FFE0EF',
}

export default {
  resultsContainer,
  resultsBox,
  seeAll,
  hitBox,
  hitIcon,
  hitContentContainer,
  hitContent,
  hitBreadCrumb,
  hitBreadCrumbIn,
  hitBreadCrumbArrow,
  searchInput,
  searchIcon,
  searchContainer,
  alignCenter,
  noResults,
  hitContentHighlighted,
}
