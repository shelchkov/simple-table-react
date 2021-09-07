import React, { ReactElement } from "react"
import { Cell } from "./cell"
import { TableData } from "./utils"

interface Props<T> {
  headers: string[]
  actions?: (value: T) => ReactElement
}

export const TableHead = <T extends TableData>({ headers, actions }: Props<T>): ReactElement => (
  <thead>
    <tr>
      {headers.map((header) => (
        <Cell isHead key={header}>
          {header}
        </Cell>
      ))}

      {actions && <Cell isHead></Cell>}
    </tr>
  </thead>
)
