import { FizzBuzz } from "./FizzBuzz";

describe(FizzBuzz, () => {
  it("should return an array with length 100", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(100);
  });

  it("should return Fizz", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result[3]).toBe("Fizz");
  });

  it("should return 1", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result[1]).toBe(1);
  });
});
