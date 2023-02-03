import { Link, Grid } from '@vtex/brand-ui'
interface Props {
  nextDocSlug: string
  nextDocName: string
  previousDocSlug: string
  previousDocName: string
  hidePaginationPrevious: boolean
  hidePaginationNext: boolean
}

import styles from './styles'

const ArticlePagination = ({
  nextDocSlug,
  nextDocName,
  previousDocSlug,
  previousDocName,
  hidePaginationNext,
  hidePaginationPrevious,
}: Props) => {
  return (
    <Grid sx={styles.flexContainer}>
      {!hidePaginationPrevious && previousDocSlug && (
        <Link sx={styles.paginationLinkPrevious} href={previousDocSlug}>
          « {previousDocName}
        </Link>
      )}
      {!hidePaginationNext && nextDocSlug && (
        <Link sx={styles.paginationLinkNext} href={nextDocSlug}>
          {nextDocName} »
        </Link>
      )}
    </Grid>
  )
}

export default ArticlePagination
