import type { SxStyleProp } from '@vtex/brand-ui'

const itemsContainer: SxStyleProp = {
  position: 'sticky',
  top: 'calc(5rem + 32px)',
  borderLeft: '1px solid #E7E9EE',
}

const item: (level: number, active: boolean) => SxStyleProp = (
  level,
  active
) => ({
  ml: '-1px',
  pl: [
    `${level * 8}px`,
    `${level * 8}px`,
    `${level * 8}px`,
    `${level * 8}px`,
    `${level * 8}px`,
    `${level * 8}px`,
    `${(level + 1) * 8}px`,
  ],
  py: ['6px', '6px', '6px', '6px', '4px', '4px', '6px'],
  borderLeft: `1px solid ${active && level === 1 ? '#E31C58' : '#E7E9EE'}`,
  fontSize: ['16px', '16px', '16px', '16px', '12px', '16px', '22px'],
  lineHeight: ['22px', '22px', '22px', '22px', '16px', '18px', '24px'],
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
