import React, { CSSProperties, ReactNode } from "react"
import "../styles/cell.styles.css"

interface Props {
  children?: ReactNode
  isHead?: boolean
  style?: CSSProperties
  handleClick?: () => void
}

export const clickableClass = "clickable-cell"

export const Cell = ({ children = <></>, isHead, handleClick, ...rest }: Props) => {
  if (isHead) {
    return (
      <th className={`simple-table-cell ${handleClick ? clickableClass : ""}`} onClick={handleClick} {...rest}>
        {children}
      </th>
    )
  }

  return (
    <td className="simple-table-cell" {...rest}>
      {children}
    </td>
  )
}
