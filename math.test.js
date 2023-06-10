const { add, subtract, divide, multiply, power } = require("./math");

describe("Math.js tests", () => {
  it("should test  add  ", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("Should test subtract", () => {
    expect(subtract(2, 2)).toBe(0);
  });

  it("Should test divide", () => {
    expect(divide(2, 2)).toBe(1);
  });

  it("Should test multiply", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it('adds 8 + 2 to equal 10', () => {
    expect(add(8, 2)).toBe(10);
  });
  it('Should test Power ', () => {
    expect(power(8, 2)).toBe(64);
  });
});
