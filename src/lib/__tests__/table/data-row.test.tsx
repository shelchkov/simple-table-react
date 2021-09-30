import { shallow, ShallowWrapper } from "enzyme"
import React from "react"
import { DataRow } from "../../table/data-row"

describe("DataRow component", () => {
  let component: ShallowWrapper
  const props: Parameters<typeof DataRow>[0] = {
    headers: [],
    data: {},
  }

  beforeAll(() => {
    component = shallow(<DataRow {...props} />)
  })

  it("renders row", () => {
    expect(component.find("tr").exists()).toBeTruthy()
  })
})
