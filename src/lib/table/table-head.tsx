import React, { ReactElement } from "react"
import { Cell } from "./cell"
import { TableData } from "./utils"

interface Props<T> {
  headers: string[]
  actions?: (value: T) => ReactElement
  toggleSorting: (columnKey: string) => void
}

export const TableHead = <T extends TableData>({ headers, actions, toggleSorting }: Props<T>): ReactElement => (
  <thead>
    <tr>
      {headers.map((header) => {
        const handeClick = () => toggleSorting(header)

        return (
          <Cell isHead key={header} handleClick={handeClick}>
            {header}
          </Cell>
        )
      })}

      {actions && <Cell isHead></Cell>}
    </tr>
  </thead>
)
