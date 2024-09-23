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

  it("should return Buzz", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result[5]).toBe("Buzz");
  });

  it("should return FizzBuzz", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result[15]).toBe("FizzBuzz");
  });

  it("should return an array with length 50", () => {
    // Arrange
    const sut = new FizzBuzz();
    sut.setMax(50);
    // Act
    const result = sut.generate();


    // Assert
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(50);
  });
});
