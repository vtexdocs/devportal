import type { ReactNode } from 'react'

export type IconProps = {
  icon: ReactNode
  name: string
}

const Icon = ({ icon, name }: IconProps) => {
  return (
    <li className="faststore-icon">
      <div className="faststore-iconItem">{icon}</div>
      <p>{name}</p>
    </li>
  )
}

export default Icon
