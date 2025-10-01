import { FeedbackSection as FeedbackSectionComponent } from '@vtexdocs/components'

interface DocPath {
  slug?: string
  docPath?: string
  suggestEdits?: boolean
  small?: boolean
  sectionSelected?: string
}

const FeedbackSection = ({
  slug,
  sectionSelected = 'guides',
  docPath,
  suggestEdits = true,
  small,
}: DocPath) => {
  const sendFeedback = async (comment: string, liked: boolean) => {
    const feedback = {
      data: [
        new Date().toISOString(),
        `https://developers.vtex.com/docs/${sectionSelected}/${slug}`,
        liked ? 'positive' : 'negative',
        comment,
      ],
    }

    await fetch('/api/feedback/', {
      method: 'POST',
      body: JSON.stringify(feedback),
    })
  }

  const urlToEdit = suggestEdits
    ? `https://github.com/vtexdocs/dev-portal-content/edit/main/${docPath}`
    : undefined

  return (
    <FeedbackSectionComponent
      sendFeedback={sendFeedback}
      urlToEdit={urlToEdit}
      suggestEdits={suggestEdits}
      slug={slug}
      small={small}
    />
  )
}

export default FeedbackSection
