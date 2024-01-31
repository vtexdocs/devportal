import {
  Price,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@faststore/ui'
import { useFormattedPrice } from '../utilities/usePriceFormatter'
import { options } from '../constants'

const UsageTableColored = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell scope="col" variant="header" align="left">
            Colored
          </TableCell>
          <TableCell scope="col" variant="header" align="right">
            Total
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {options.map((option) => (
          <TableRow key={option.numberOfInstallments}>
            <TableCell variant="header" align="left">
              {option.numberOfInstallments}x
            </TableCell>
            <TableCell align="right">
              <Price formatter={useFormattedPrice} value={option.total} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default UsageTableColored
