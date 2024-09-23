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

  it("should return [2, 3] when number is 5", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(5);

    // assert
    expect(result).toEqual([5]);
  });

  it("should return [2, 3] when number is 6", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(6);

    // assert
    expect(result).toEqual([2, 3]);
  });

  it("should return [7] when number is 7", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(7);

    // assert
    expect(result).toEqual([7]);
  });

  it("should return [2, 2, 2] when number is 8", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(8);

    // assert
    expect(result).toEqual([2, 2, 2]);
  });
});
