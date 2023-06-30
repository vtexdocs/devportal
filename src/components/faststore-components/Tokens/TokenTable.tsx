import type { ReactNode } from 'react'

export type TokenTableProps = {
  title?: string
  description?: string
  children: ReactNode
}

const TokenTable = ({
  title = 'Local token',
  description = 'Default value/Global token linked',
  children,
}: TokenTableProps) => {
  return (
    <table
      style={{
        width: '100%',
      }}
      className="faststore-tokenTable"
    >
      <thead>
        <tr>
          <th>{title}</th>
          <th>{description}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

export default TokenTable
