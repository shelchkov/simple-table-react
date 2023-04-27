import React, { ReactElement } from "react"
import { Cell } from "./cell"
import { noop, TableData } from "./utils"

interface Props<T> {
  headers: string[]
  data: T
  actions?: (value: T) => ReactElement
  handleRowClick?: (data: T) => void
  getValue?: (name: string, value: TableData[keyof TableData], data: T) => string | number
  getCellColor?: (name: string, data: T) => string | undefined
}

export const DataRow = <T extends TableData>({
  headers,
  data,
  actions,
  handleRowClick = noop,
  getValue = (_, value) => `${value}`,
  getCellColor = noop,
}: Props<T>): ReactElement => {
  const onClick = () => handleRowClick(data)

  return (
    <tr onClick={onClick} className="simple-table-row">
      {headers.map((name) => (
        <Cell key={name} style={{ color: getCellColor(name, data) }}>
          {getValue(name, data[name], data)}
        </Cell>
      ))}

      {actions && <Cell>{actions(data)}</Cell>}
    </tr>
  )
}
