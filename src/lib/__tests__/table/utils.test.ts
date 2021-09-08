import { noop } from "../../table/utils"

describe("utils", () => {
  describe("noop function", () => {
    it("returns undefined", () => {
      expect(noop()).toEqual(undefined)
    })
  })
})
