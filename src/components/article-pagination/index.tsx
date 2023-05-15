import { Link, Grid, Text, Box } from '@vtex/brand-ui'
import { useRouter } from 'next/router'

interface Props {
  pagination: {
    previousDoc: {
      slug: string | null
      name: string | null
      method?: string
    }
    nextDoc: {
      slug: string | null
      name: string | null
      method?: string
    }
  }
  hidePaginationPrevious: boolean
  hidePaginationNext: boolean
}

import styles from './styles'
import { MethodType } from 'utils/typings/unionTypes'
import MethodCategory from 'components/method-category'

const ArticlePagination = ({
  pagination,
  hidePaginationNext,
  hidePaginationPrevious,
}: Props) => {
  const router = useRouter()

  console.log(pagination.previousDoc)

  const handleClick = (e: { preventDefault: () => void }, slug: string) => {
    e.preventDefault()
    router.push(slug)
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
              {typeof pagination.previousDoc.method == 'string' &&
                pagination.previousDoc.method !== 'undefined' && (
                  <Box sx={{ mb: '10px' }}>
                    <MethodCategory
                      method={pagination.previousDoc.method as MethodType}
                      active={true}
                      origin={'pagination'}
                    />
                  </Box>
                )}
              <Text sx={styles.paginationText}>
                {pagination.previousDoc.name}
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
              {typeof pagination.nextDoc.method == 'string' &&
                pagination.nextDoc.method !== 'undefined' && (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row-reverse',
                      mb: '10px',
                    }}
                  >
                    <MethodCategory
                      method={pagination.nextDoc.method as MethodType}
                      active={true}
                      origin={'pagination'}
                    />
                  </Box>
                )}
              <Text sx={styles.paginationText}>{pagination.nextDoc.name}</Text>
              <Text sx={styles.subTitle}>Next »</Text>
            </Box>
          </Link>
        )}
      </Grid>
    </Box>
  )
}

export default ArticlePagination
