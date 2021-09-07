import React, { CSSProperties, ReactNode } from "react"
import "../styles/cell.styles.css"

interface Props {
  children?: ReactNode
  isHead?: boolean
  style?: CSSProperties
}

export const Cell = ({ children = <></>, isHead, ...rest }: Props) => {
  if (isHead) {
    return (
      <th className="cell" {...rest}>
        {children}
      </th>
    )
  }

  return (
    <td className="cell" {...rest}>
      {children}
    </td>
  )
}
