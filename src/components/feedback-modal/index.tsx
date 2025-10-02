import React from 'react'
import Modal from 'components/modal'
import { Box, Flex, Text } from '@vtex/brand-ui'
import styles from './styles'

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  initialMessage?: string
}

export default function FeedbackModal({
  isOpen,
  onClose,
  initialMessage = '',
}: FeedbackModalProps) {
  const [submitted, setSubmitted] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  // Reset form state when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      setSubmitting(false)
      setError(null)
    }
  }, [isOpen])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const type = String(formData.get('type') || '')
    const url = String(formData.get('url') || '')
    const feedback = String(formData.get('feedback') || '')

    try {
      const res = await fetch('/api/feedback-google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, type, feedback, url }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to send feedback. Try again')
      }
      form.reset()
      setSubmitted(true)
    } catch (err) {
      setError(String(err))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Send feedback"
      description="Share suggestions, issues found, or ideas to improve our documentation."
    >
      <Box>
        {submitted ? (
          <Box role="status" style={styles.feedbackSuccessText}>
            Thank you! Your feedback has been received.
          </Box>
        ) : null}

        {error ? (
          <Box role="alert" style={styles.feedbackErrorText}>
            Sorry, we couldn’t send your feedback. Please try again later.
          </Box>
        ) : null}

        <form
          onSubmit={handleSubmit}
          style={{ display: submitted ? 'none' : 'block' }}
        >
          <Box style={{ display: 'grid', gap: 12 }}>
            <Flex sx={styles.labelContainer}>
              <Text sx={styles.label}>Article</Text>
              <input
                name="url"
                defaultValue={initialMessage}
                style={styles.input}
              />
            </Flex>

            <Box style={{ display: 'grid', gap: 8 }}>
              <Text sx={styles.label}>
                Message <span style={{ color: 'red' }}>*</span>
              </Text>
              <textarea
                name="feedback"
                aria-required="true"
                required
                rows={6}
                placeholder="Describe your suggestion, question, or issue..."
                style={{
                  padding: '10px 12px',
                  border: '1px solid #d0d7de',
                  borderRadius: 8,
                  resize: 'vertical',
                }}
              />
            </Box>

            <Flex sx={styles.labelContainer}>
              <Text sx={styles.label}>Feedback type</Text>
              <select name="type" style={styles.dropdownMenu}>
                <option value="">Select feedback type</option>
                <option value="Comment">Comment</option>
                <option value="Question">Question</option>
                <option value="Error">Error</option>
                <option value="Improvement">Improvement</option>
              </select>
            </Flex>

            <Flex sx={styles.labelContainer}>
              <Text sx={styles.label}>Name</Text>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                style={styles.input}
              />
            </Flex>

            <Flex sx={styles.labelContainer}>
              <Text sx={styles.label}>Email</Text>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                style={styles.input}
              />
            </Flex>

            <Box
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <button
                type="button"
                onClick={onClose}
                style={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={styles.submitButton}
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Send'}
              </button>
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}
