import { noop, removeEmptyColumns, sortData, Sorting, SortingDirection, TableData } from "../../table/utils"

describe("utils", () => {
  describe("noop function", () => {
    it("returns undefined", () => {
      expect(noop()).toEqual(undefined)
    })
  })

  describe("removeEmptyColumns function", () => {
    const headers = ["h1", "h2", "h3"]

    it("returns all headers for empty data", () => {
      const data: TableData[] = []
      expect(removeEmptyColumns(headers, data)).toBe(headers)
    })

    it("returns all headers for complete data", () => {
      const data: TableData[] = [{ h1: "1", h2: "2", h3: "3" }]
      expect(removeEmptyColumns(headers, data)).toEqual(headers)
    })

    it("removes header that's not found in data", () => {
      const data: TableData[] = [{ h1: "1", h2: "2" }]
      expect(removeEmptyColumns(headers, data)).toEqual(headers.slice(0, 2))
    })

    it("checks all entries in data", () => {
      const data: TableData[] = [
        { h1: "1", h2: "2" },
        { h1: "3", h2: "4" },
      ]
      expect(removeEmptyColumns(headers, data)).toEqual(headers.slice(0, 2))
      data[1].h3 = "5"
      expect(removeEmptyColumns(headers, data)).toEqual(headers)
    })

    it("handles empty arrays", () => {
      const data: TableData[] = [
        { h1: "1", h2: "2" },
        { h1: "3", h2: "4", h3: [] },
      ]
      expect(removeEmptyColumns(headers, data)).toEqual(headers.slice(0, 2))
      data[1].h3 = ["6"]
      expect(removeEmptyColumns(headers, data)).toEqual(headers)
    })
  })

  describe("sortData function", () => {
    const key = "key"
    const data = [{ [key]: 3 }, { [key]: 2 }, { [key]: 5 }]
    const sorting: Sorting = { column: key, direction: SortingDirection.ASC }
    const sortedData = [{ [key]: 2 }, { [key]: 3 }, { [key]: 5 }]

    it("sorting is optional", () => {
      expect(sortData(data)).toEqual(data)
    })

    it("sorts array", () => {
      expect(sortData(data, sorting)).toEqual(sortedData)
      sorting.direction = SortingDirection.DESC
      expect(sortData(data, sorting)).toEqual(sortedData.reverse())
      sorting.direction = SortingDirection.ASC
    })

    it("accepts getValue function", () => {
      const getValue = jest.fn().mockReturnValue(0)
      sortData(data, sorting, getValue)
      expect(getValue).toBeCalled()
    })

    describe("and array is passed in data value", () => {
      const data = [{ [key]: ["A"] }, { [key]: ["B"] }]

      it("doesn't throw errors", () => {
        expect(sortData(data, sorting)).toEqual(data)
      })
    })

    describe("and string values passed", () => {
      const data = [{ [key]: "C" }, { [key]: "B" }]

      it("sorting works", () => {
        expect(sortData(data, sorting)).toEqual(data.reverse())
      })
    })
  })
})
