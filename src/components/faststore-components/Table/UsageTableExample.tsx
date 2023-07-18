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

const UsageTableExample = () => {
  return (
    <Table
      align={undefined}
      bgcolor={undefined}
      border={undefined}
      frame={undefined}
      rules={undefined}
    >
      <TableHead>
        <TableRow>
          <TableCell scope="col" variant="header">
            Installments
          </TableCell>
          <TableCell scope="col" variant="header">
            Monthly Payment
          </TableCell>
          <TableCell scope="col" variant="header">
            Total
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {options.map((option) => (
          <TableRow key={option.numberOfInstallments}>
            <TableCell>{option.numberOfInstallments}x</TableCell>
            <TableCell>
              <Price
                formatter={useFormattedPrice}
                value={option.monthlyPayment}
              />
            </TableCell>
            <TableCell>
              <Price formatter={useFormattedPrice} value={option.total} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default UsageTableExample
