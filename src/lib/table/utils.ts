export type TableData = Record<string, string | number>

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
