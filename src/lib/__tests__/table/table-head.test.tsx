import { shallow, ShallowWrapper } from "enzyme"
import React from "react"
import { TableHead } from "../../table/table-head"

describe("TableHead", () => {
  let component: ShallowWrapper

  const props: Parameters<typeof TableHead>[0] = { headers: [] }

  beforeAll(() => {
    component = shallow(<TableHead {...props} />)
  })

  it("renders header row", () => {
    const thead = component.find("thead")
    expect(thead.exists()).toBeTruthy()
    expect(thead.find("tr").exists()).toBeTruthy()
  })
})
