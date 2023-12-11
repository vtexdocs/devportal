export type TokenColorProps = {
  token: string
  value: string
}

const TokenColor = ({ token, value }: TokenColorProps) => {
  return (
    <li className="faststore-tokenColor">
      <div style={{ backgroundColor: value }}></div>
      <p>{token}</p>
      <code>{value}</code>
    </li>
  )
}

export default TokenColor
