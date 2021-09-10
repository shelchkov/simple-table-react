import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import { Cell } from "../../table/cell"

describe("Cell Component", () => {
  let component: ShallowWrapper

  describe("Without props", () => {
    beforeEach(() => {
      component = shallow(<Cell />)
    })

    it("is defined", () => {
      expect(component).toBeDefined()
    })

    it("renders td", () => {
      expect(component.find("td").exists()).toBeTruthy()
    })
  })

  describe("With children", () => {
    const children = "Test string"

    beforeEach(() => {
      const props = { children }
      component = shallow(<Cell {...props} />)
    })

    it("renders text", () => {
      expect(component.find("td").text()).toBe(children)
    })

    describe("Complecated children", () => {
      const children = <p>Test Paragrath</p>

      beforeEach(() => {
        const props = { children }
        component = shallow(<Cell {...props} />)
      })

      it("renders tag", () => {
        expect(component.find("td").props().children).toBe(children)
      })
    })
  })
})
