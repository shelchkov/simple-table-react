import React, { ReactElement, useState } from "react"
import "../styles/data-table.styles.css"
import { DataRow } from "./data-row"
import { TableHead } from "./table-head"
import { removeEmptyColumns, sortData, Sorting, SortingDirection, TableData } from "./utils"

interface Props<T> {
  headers: string[]
  data: T[]
  actions?: (value: T) => ReactElement
  handleRowClick?: (data: T) => void
  getValue?: (name: string, value: any, data: T) => string | number
  getCellColor?: (name: string, data: T) => string | undefined
}

export const DataTable = <T extends TableData>({
  headers,
  data,
  actions,
  getValue,
  getCellColor,
}: Props<T>): ReactElement => {
  const [sorting, setSorting] = useState<Sorting>()

  const filteredHeaders = removeEmptyColumns(headers, data)

  const toggleSorting = (columnKey: string) => {
    if (sorting && sorting.column === columnKey) {
      return setSorting({
        ...sorting,
        direction: sorting.direction === SortingDirection.ASC ? SortingDirection.DESC : SortingDirection.ASC,
      })
    }

    setSorting({ column: columnKey, direction: SortingDirection.ASC })
  }

  const sortedData = sortData(data, sorting, getValue)

  return (
    <table className="simple-table">
      <TableHead headers={filteredHeaders} actions={actions} toggleSorting={toggleSorting} />

      <tbody>
        {sortedData.map((row) => (
          <DataRow
            key={row.id.toString()}
            data={row}
            headers={filteredHeaders}
            actions={actions}
            getValue={getValue}
            getCellColor={getCellColor}
          />
        ))}
      </tbody>
    </table>
  )
}
