import type { SxStyleProp } from '@vtexdocs/brand-ui'

const diagramBox: SxStyleProp = {
  background: '#ffffff',
  border: '1px solid #ffffff',
  boxShadow: '2px 2px 10px rgba(91, 110, 132, 0.2)',
  borderRadius: '5px',
  padding: '18px',
  margin: '10px 0',
}

const diagramTitle: SxStyleProp = {
  textTransform: 'uppercase',
  color: '#142032',
  fontSize: '16px',
  marginBottom: '12px',
}

const diagramTitleServices: SxStyleProp = {
  ...diagramTitle,
  color: '#f71963',
}

const diagramCard: SxStyleProp = {
  fontSize: '12px',
  lineHeight: '12px',
  borderRadius: '5px',
  padding: '8px',
  color: '#5e6e84',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
  height: '40px',
}

const diagramPinkCard: SxStyleProp = {
  ...diagramCard,
  background: 'rgba(247, 25, 99, 0.04)',
  border: '1px solid #f71963',
  width: '100%',
}

const diagramPinkCardLink: SxStyleProp = {
  ...diagramPinkCard,
  ':hover': {
    backgroundColor: 'rgba(247, 25, 99, 0.1)',
  },
}

const diagramFlex: SxStyleProp = {
  gap: '8px',
  flexWrap: ['wrap', 'nowrap'],
}

const diagramFlexEnd: SxStyleProp = {
  gap: '8px',
  alignItems: ['flex-start', 'flex-end'],
  flexDirection: ['column', 'row'],
}

const diagramPink: SxStyleProp = {
  ...diagramCard,
  border: '1px solid #f71963',
}

const diagramGray: SxStyleProp = {
  ...diagramCard,
  backgroundColor: 'white',
  border: '1px solid #a1a8b7',
}

const diagramSecondRow: SxStyleProp = {
  display: ['flex', 'grid'],
  flexDirection: 'column',
  gridTemplateColumns: '2.5fr 1fr',
  gap: '18px',
}

const diagramBoxServicesContent: SxStyleProp = {
  display: ['flex', 'grid'],
  flexDirection: 'column',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '18px',
}

const diagramGrid: SxStyleProp = {
  width: '70%',
  display: 'grid',
  gridTemplateColumns: '70% 70%',
  gap: '0 8px',
  marginRight: '18px',
}

const diagramMuted: SxStyleProp = {
  ...diagramBox,
  background: 'rgba(94, 110, 132, 0.04)',
  border: '1px dashed #5e6e84',
  padding: '18px',
}

const diagramTitleSingle: SxStyleProp = {
  ...diagramTitle,
  margin: '0',
}

const diagramGridHorizontal: SxStyleProp = {
  marginTop: '18px',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: '1fr',
  gridTemplateAreas: '. . . . . .',
}

export default {
  diagramBox,
  diagramTitle,
  diagramTitleServices,
  diagramTitleSingle,
  diagramCard,
  diagramPinkCard,
  diagramPinkCardLink,
  diagramPink,
  diagramGray,
  diagramFlex,
  diagramFlexEnd,
  diagramSecondRow,
  diagramBoxServicesContent,
  diagramGrid,
  diagramMuted,
  diagramGridHorizontal,
}
