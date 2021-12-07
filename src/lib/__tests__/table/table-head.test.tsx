import { shallow, ShallowWrapper } from "enzyme"
import React from "react"
import { Cell } from "../../table/cell"
import { TableHead } from "../../table/table-head"

describe("TableHead", () => {
  let component: ShallowWrapper

  const toggleSortingSpy = jest.fn()
  const headers = ["header"]
  const props: Parameters<typeof TableHead>[0] = { headers, toggleSorting: toggleSortingSpy }

  beforeAll(() => {
    component = shallow(<TableHead {...props} />)
  })

  it("renders header row", () => {
    const thead = component.find("thead")
    expect(thead.exists()).toBeTruthy()
    expect(thead.find("tr").exists()).toBeTruthy()
  })

  it("renders Cell's", () => {
    const cells = component.find("thead").find(Cell)
    expect(cells.exists()).toBeTruthy()
    expect(cells.length).toEqual(headers.length)
  })

  describe("and head cell is clicked", () => {
    const index = 0

    beforeEach(() => {
      toggleSortingSpy.mockClear()
    })

    it("calls toggleSorting", () => {
      const cell = component.find("thead").find(Cell).at(index)
      const handleClick = cell.prop("handleClick")

      if (handleClick) {
        handleClick()
      }

      expect(toggleSortingSpy).toBeCalledWith(headers[index])
    })
  })
})
