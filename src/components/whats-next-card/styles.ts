import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  padding: '16px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  width: ['324px', '264px', '264px', '264px', '352px'],
}

const title: SxStyleProp = {
  mb: '8px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: ['22px', '18px'],
  color: 'muted.0',
}

const description: SxStyleProp = {
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  color: 'muted.0',
}

const linkContainer: SxStyleProp = {
  mt: '8px',
  alignItems: 'center',
}

const link: SxStyleProp = {
  ...description,
  color: 'muted.1',
}

export default { container, title, description, linkContainer, link }
