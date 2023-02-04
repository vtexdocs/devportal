import { Link, Grid, Text, Box } from '@vtex/brand-ui'
import { useRouter } from 'next/router'
interface Props {
  pagination: {
    previousDoc: { slug: string | null; name: string | null }
    nextDoc: { slug: string | null; name: string | null }
  }
  hidePaginationPrevious: boolean
  hidePaginationNext: boolean
}

import styles from './styles'

const ArticlePagination = ({
  pagination,
  hidePaginationNext,
  hidePaginationPrevious,
}: Props) => {
  const router = useRouter()

  const handleClick = (e: { preventDefault: () => void }, slug: string) => {
    e.preventDefault()
    router.push(`/docs/guides/${slug}`)
  }
  return (
    <Box sx={styles.mainContainer}>
      <Grid sx={styles.flexContainer}>
        {!hidePaginationPrevious && pagination.previousDoc.slug && (
          <Link
            sx={styles.paginationLinkPrevious}
            href={`/docs/guides/${pagination.previousDoc.slug}`}
            onClick={(e: { preventDefault: () => void }) => {
              handleClick(e, pagination.previousDoc.slug as string)
            }}
          >
            <Text sx={styles.paginationText}>
              {pagination.previousDoc.name}
            </Text>
          </Link>
        )}
        {!hidePaginationNext && pagination.nextDoc.slug && (
          <Link
            sx={styles.paginationLinkNext}
            href={`/docs/guides/${pagination.nextDoc.slug}`}
            onClick={(e: { preventDefault: () => void }) => {
              handleClick(e, pagination.nextDoc.slug as string)
            }}
          >
            <Text sx={styles.paginationText}>{pagination.nextDoc.name}</Text>
          </Link>
        )}
      </Grid>
    </Box>
  )
}

export default ArticlePagination
