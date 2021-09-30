import { noop, removeEmptyColumns, TableData } from "../../table/utils"

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
})
