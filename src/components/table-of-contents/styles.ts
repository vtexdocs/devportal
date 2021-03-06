import type { SxStyleProp } from '@vtex/brand-ui'

const itemsContainer: SxStyleProp = {
  mt: '32px',
  borderLeft: '1px solid #E7E9EE',
  position: 'sticky',
  top: 'calc(5rem + 32px)',
}

const item: (level: number, active: boolean) => SxStyleProp = (
  level,
  active
) => ({
  py: '4px',
  ml: '-1px',
  pl: `${level * 8}px`,
  borderLeft: `1px solid ${active && level === 1 ? '#E31C58' : '#E7E9EE'}`,
  fontSize: [0, 0, 0, 0, '12px', '16px'],
  lineHeight: [0, 0, 0, 0, '16px', '18px'],
  fontWeight: `${active ? '600' : '400'}`,
  color: `${active ? '#0C1522' : 'muted.0'}`,

  ':hover': {
    color: '#000711',
  },
})

const subItemsContainer: SxStyleProp = {
  ml: '16px',
  borderLeft: '1px solid #E7E9EE',
}

export default { itemsContainer, item, subItemsContainer }
