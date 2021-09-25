import { shallow, ShallowWrapper } from "enzyme"
import React from "react"
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

  describe("With isHead prop", () => {
    const children = "Test string 2"

    beforeEach(() => {
      const props = { children, isHead: true }
      component = shallow(<Cell {...props} />)
    })

    it("renders th", () => {
      expect(component.find("th").exists()).toBeTruthy()
    })

    it("renders text", () => {
      expect(component.find("th").text()).toBe(children)
    })

    describe("Complecated children", () => {
      const children = <p>Test Paragrath 2</p>

      beforeEach(() => {
        const props = { children, isHead: true }
        component = shallow(<Cell {...props} />)
      })

      it("renders tag", () => {
        expect(component.find("th").props().children).toBe(children)
      })
    })
  })
})
