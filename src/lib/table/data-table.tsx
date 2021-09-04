import React, { ReactElement } from "react"
import { DataRow } from "./data-row"
import "./data-table.styles.scss"
import { TableHead } from "./table-head"
import { removeEmptyColumns, TableData } from "./utils"

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
	...rowProps
}: Props<T>): ReactElement => {
	const filteredHeaders = removeEmptyColumns(headers, data)

	return (
		<table className="table">
			<TableHead headers={filteredHeaders} actions={actions} />

			<tbody>
				{data.map((row) => (
					<DataRow
						key={row.id}
						data={row}
						headers={filteredHeaders}
						actions={actions}
						{...rowProps}
					/>
				))}
			</tbody>
		</table>
	)
}