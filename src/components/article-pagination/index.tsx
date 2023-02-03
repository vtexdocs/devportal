import { Link, Grid } from '@vtex/brand-ui'
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
  return (
    <Grid sx={styles.flexContainer}>
      {!hidePaginationPrevious && pagination.previousDoc.slug && (
        <Link
          sx={styles.paginationLinkPrevious}
          href={pagination.previousDoc.slug}
        >
          « {pagination.previousDoc.name}
        </Link>
      )}
      {!hidePaginationNext && pagination.nextDoc.slug && (
        <Link sx={styles.paginationLinkNext} href={pagination.nextDoc.slug}>
          {pagination.nextDoc.name} »
        </Link>
      )}
    </Grid>
  )
}

export default ArticlePagination
