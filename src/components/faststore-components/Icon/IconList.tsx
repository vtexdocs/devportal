import React, { PropsWithChildren } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconList = ({ children }: PropsWithChildren<any>) => {
  return <ul className="faststore-iconList">{children}</ul>
}

export default IconList
