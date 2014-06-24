greet = require("../lib/")
mygreet = greet("BranchZero", 1)
describe "greet", ->
  it "should greet a preson by name", ->
    expect(mygreet).to.contain "BranchZero"
    return

  it "should greet a person flirtatiously if drunk", ->
    expect(mygreet).to.contain ", you look sexy today"
    return

  return

