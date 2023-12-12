import { Link, Grid, Text, Box } from '@vtex/brand-ui'
import { useRouter } from 'next/router'
interface Props {
  pagination: {
    previousDoc: {
      slug: string | null
      name: { en: string; pt: string; es: string } | null
    }
    nextDoc: {
      slug: string | null
      name: { en: string; pt: string; es: string } | null
    }
  }
  hidePaginationPrevious: boolean
  hidePaginationNext: boolean
}

import styles from './styles'
import { useIntl } from 'react-intl'

const ArticlePagination = ({
  pagination,
  hidePaginationNext,
  hidePaginationPrevious,
}: Props) => {
  const router = useRouter()
  const locale = useIntl().locale as 'en' | 'pt' | 'es'

  const handleClick = (e: { preventDefault: () => void }, slug: string) => {
    e.preventDefault()
    router.push(`${slug}`)
  }
  return (
    <Box sx={styles.mainContainer}>
      <Grid sx={styles.flexContainer}>
        {!hidePaginationPrevious && pagination.previousDoc.slug && (
          <Link
            sx={styles.paginationLinkPrevious}
            href={pagination.previousDoc.slug}
            onClick={(e: { preventDefault: () => void }) => {
              handleClick(e, pagination.previousDoc.slug as string)
            }}
          >
            <Box sx={styles.paginationBox}>
              <Text sx={styles.paginationText}>
                {pagination.previousDoc.name?.[locale]}
              </Text>
              <Text sx={styles.subTitle}>« Previous</Text>
            </Box>
          </Link>
        )}
        {!hidePaginationNext && pagination.nextDoc.slug && (
          <Link
            sx={styles.paginationLinkNext}
            href={pagination.nextDoc.slug}
            onClick={(e: { preventDefault: () => void }) => {
              handleClick(e, pagination.nextDoc.slug as string)
            }}
          >
            <Box sx={styles.paginationBox}>
              <Text sx={styles.paginationText}>
                {pagination.nextDoc.name?.[locale]}
              </Text>
              <Text sx={styles.subTitle}>Next »</Text>
            </Box>
          </Link>
        )}
      </Grid>
    </Box>
  )
}

export default ArticlePagination
