import { Diamond } from "./Diamond";

describe(Diamond, () => {
  it("should return a simple 'A' when supplied letter is 'A'", () => {
    // arrange
    const diamond = new Diamond();

    // act
    const result = diamond.print("A");

    // assert
    expect(result).toEqual("A");
  });

  it("should return a diamond with A and B", () => {
    // arrange
    const diamond = new Diamond();

    // act
    const result = diamond.print("B");

    // assert
    expect(result).toEqual(" A/nB B/nB B/n A");
  });
});
