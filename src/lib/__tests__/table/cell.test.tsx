import { shallow, ShallowWrapper } from "enzyme"
import React from "react"
import { Cell, clickableClass } from "../../table/cell"

type Props = Parameters<typeof Cell>[0]

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

    it("applies correct className", () => {
      expect(component.find("th").hasClass(clickableClass)).toBeFalsy()
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

    describe("and handleClick is passed", () => {
      const handleClickSpy = jest.fn()

      beforeEach(() => {
        const props: Props = { children, isHead: true, handleClick: handleClickSpy }
        component = shallow(<Cell {...props} />)
      })

      it("applies correct className", () => {
        expect(component.find("th").hasClass(clickableClass)).toBeTruthy()
      })

      it("passes handleClick to th", () => {
        expect(component.find("th").prop("onClick")).toEqual(handleClickSpy)
      })
    })
  })
})
