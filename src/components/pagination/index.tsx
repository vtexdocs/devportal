import { Box } from '@vtex/brand-ui'
import ArrowLeftIcon from 'components/icons/arrow-left-icon'
import ArrowRightIcon from 'components/icons/arrow-right-icon'
import ReactPaginate from 'react-paginate'
import styles from './styles'

interface Props {
  forcePage: number
  pageCount: number
  onPageChange: (selectedItem: { selected: number }) => void
}

const Pagination = ({ forcePage, pageCount, onPageChange }: Props) => {
  return (
    <Box sx={styles.container}>
      <ReactPaginate
        forcePage={forcePage - 1}
        pageCount={pageCount}
        onPageChange={(props) => {
          if (props.selected >= 0) props.selected = props.selected + 1
          onPageChange(props)
        }}
        previousLabel={<ArrowLeftIcon />}
        nextLabel={<ArrowRightIcon />}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={() => <></>}
      />
    </Box>
  )
}

export default Pagination
