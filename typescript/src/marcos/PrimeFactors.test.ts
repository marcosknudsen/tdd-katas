import { PrimeFactors } from "./PrimeFactors";

describe(PrimeFactors, () => {
  it("should return [] when number is 1", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(1);

    // assert
    expect(result).toEqual([]);
  });

  it("should return [2] when number is 2", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(2);

    // assert
    expect(result).toEqual([2]);
  });

  it("should return [3] when number is 3", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(3);

    // assert
    expect(result).toEqual([3]);
  });

  it("should return [2, 2] when number is 4", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(4);

    // assert
    expect(result).toEqual([2, 2]);
  });
});
