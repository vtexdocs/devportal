import { SxStyleProp } from '@vtex/brand-ui'

const feedbackSuccessText: SxStyleProp = {
  padding: '12px 16px',
  background: '#eaf7ee',
  border: '1px solid #b9e6c9',
  borderRadius: 8,
  color: '#0f5132',
  marginBottom: 16,
}

const feedbackErrorText: SxStyleProp = {
  padding: '12px 16px',
  background: '#fff4e5',
  border: '1px solid #ffd8a8',
  borderRadius: 8,
  color: '#663c00',
  marginBottom: 16,
}

const labelContainer = {
  alignItems: 'center',
  gap: 6,
}

const input = {
  flex: 1,
  padding: '10px 12px',
  border: '1px solid #d0d7de',
  borderRadius: 8,
}

const label: SxStyleProp = {
  fontSize: '14px',
}

const cancelButton = {
  padding: '10px 16px',
  background: 'transparent',
  color: '#666',
  border: '1px solid #d0d7de',
  borderRadius: 8,
  cursor: 'pointer',
}

const submitButton = {
  padding: '10px 16px',
  background: '#111827',
  color: 'white',
  border: 0,
  borderRadius: 8,
  cursor: 'pointer',
}

export default {
  feedbackSuccessText,
  feedbackErrorText,
  input,
  labelContainer,
  label,
  cancelButton,
  submitButton,
}
