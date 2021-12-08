import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import { DataTable } from "../../table/data-table"
import { TableHead } from "../../table/table-head"
import * as Utils from "../../table/utils"
import { DataRow } from "../../table/data-row"

jest.mock("../../table/utils")

describe("DataTable component", () => {
  let component: ShallowWrapper
  const data: Utils.TableData[] = []
  const getValue = jest.fn()
  const props: Parameters<typeof DataTable>[0] = { headers: [], data, getValue }

  const sortDataMock = jest.spyOn(Utils, "sortData").mockImplementation((data) => data)

  beforeAll(() => {
    component = shallow(<DataTable {...props} />)
  })

  it("renders table", () => {
    expect(component.find("table").exists()).toBeTruthy()
    expect(component.find(TableHead).exists()).toBeTruthy()
  })

  it("doesn't sort data by default", () => {
    expect(sortDataMock).toBeCalledWith(data, undefined, getValue)
  })

  describe("and sorting is toggled", () => {
    const key = "key"
    const sorted = [{ [key]: 1, id: "id1" }]
    let toggleSorting = Utils.noop as any

    beforeAll(() => {
      toggleSorting = component.find(TableHead).prop("toggleSorting")
    })

    beforeEach(() => {
      sortDataMock.mockReturnValue(sorted)
    })

    afterAll(() => {
      sortDataMock.mockReset()
    })

    it("applies sorting", () => {
      toggleSorting(key)
      expect(sortDataMock).toHaveBeenLastCalledWith(
        data,
        { column: key, direction: Utils.SortingDirection.ASC },
        getValue
      )
    })

    it("renders sorted rows", () => {
      toggleSorting(key)
      expect(component.find(DataRow).prop("data")).toEqual(sorted[0])
    })

    // it("toggles sorting", () => {
    //   toggleSorting(key)
    //   expect(sortDataMock).toHaveBeenLastCalledWith(
    //     data,
    //     { column: key, direction: Utils.SortingDirection.ASC },
    //     undefined
    //   )
    //   toggleSorting(key)
    //   setTimeout(() => {
    //     expect(sortDataMock).toHaveBeenLastCalledWith(
    //       data,
    //       { column: key, direction: Utils.SortingDirection.DESC },
    //       undefined
    //     )
    //   })
    // })
  })
})
