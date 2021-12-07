export enum SortingDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export interface Sorting {
  column: string
  direction: SortingDirection
}

export type TableData = Record<string, string | number | string[]>

export const removeEmptyColumns = (headers: string[], data: TableData[]): string[] => {
  if (data.length === 0) {
    return headers
  }

  return headers.filter(
    (header) =>
      !!data.find((row) => {
        const value = row[header]

        if (Array.isArray(value)) {
          return value.length > 0
        }

        return !!value
      })
  )
}

export const noop = () => undefined

// TODO: Not used
// const convertToNumber = (value: string | number) => {
//   if (typeof value !== "number") {
//     return parseFloat(value)
//   }

//   return value
// }

export const sortData = <T extends TableData>(
  data: T[],
  sorting?: Sorting,
  getValue?: (name: string, value: any, data: T) => string | number
): T[] => {
  if (!sorting) {
    return data
  }

  const sorted = [...data]
  const { column, direction } = sorting

  return sorted.sort((a, b) => {
    const first = getValue ? getValue(column, a[column], a) : a[column]
    const second = getValue ? getValue(column, b[column], b) : b[column]

    if (Array.isArray(first) || Array.isArray(second)) {
      return 0
    }

    let diff = first > second ? 1 : -1

    if (direction === SortingDirection.DESC) {
      diff *= -1
    }

    return Math.sign(diff)
  })
}
