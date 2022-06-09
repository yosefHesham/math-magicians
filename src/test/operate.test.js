
import operate from "../logic/operate.js"
let [n1, n2] = [10,15];

describe("Test for arithmetic operations", () => {

test("Testing unkown operation",()=> {

  expect(() => operate(n1,n2,"s")).toThrow(Error)
})
test("Testing addition operation",()=> {

  expect(operate(n1, n2, '+')).toEqual('25');
})

})