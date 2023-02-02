import { Link, Grid } from '@vtex/brand-ui'
import jp from 'jsonpath'
interface Props {
  slug: string
  sidebar: any //eslint-disable-line
  hidePaginationPrevious: boolean
  hidePaginationNext: boolean
}

import styles from './styles'

const ArticlePagination = ({
  sidebar,
  slug,
  hidePaginationNext,
  hidePaginationPrevious,
}: Props) => {
  const docsListSlug = jp.query(sidebar, `$..[?(@.type=='markdown')]..slug`)
  const docsListName = jp.query(sidebar, `$..[?(@.type=='markdown')]..name`)
  const indexOfSlug = docsListSlug.indexOf(slug)
  const nextDocSlug = docsListSlug[indexOfSlug + 1]
  const nextDocName = docsListName[indexOfSlug + 1]
  const previousDocSlug = docsListSlug[indexOfSlug - 1]
  const previousDocName = docsListName[indexOfSlug - 1]

  console.log(nextDocSlug)
  console.log(previousDocSlug)
  return (
    <Grid sx={styles.flexContainer}>
      {!hidePaginationPrevious && (
        <Link sx={styles.paginationLinkPrevious} href={previousDocSlug}>
          « {previousDocName}
        </Link>
      )}
      {!hidePaginationNext && (
        <Link sx={styles.paginationLinkNext} href={nextDocSlug}>
          {nextDocName} »
        </Link>
      )}
    </Grid>
  )
}

export default ArticlePagination
