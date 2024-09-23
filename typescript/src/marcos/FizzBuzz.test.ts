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
    expect(result[2]).toBe("Fizz");
  });

  it("should return Small", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result[0]).toBe("Small");
  });

  it("should return Buzz", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result[4]).toBe("Buzz");
  });

  it("should return FizzBuzz", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result[14]).toBe("FizzBuzz");
  });

  it("should return an array ending with 50", () => {
    // Arrange
    const sut = new FizzBuzz();
    sut.setMax(50);
    // Act
    const result = sut.generate();

    // Assert
    expect(result[48]).toBe(49);
    expect(result[49]).toBe("Buzz");
    expect(result[50]).toBeUndefined();
  });

  it("should return an array starting wit 15", () => {
    // Arrange
    const sut = new FizzBuzz();
    sut.setMin(15);
    // Act
    const result = sut.generate();

    // Assert
    expect(result[0]).toBe("FizzBuzz");
    expect(result[1]).toBe(16);
  });
  
  it("should return Foo", () => {
    // Arrange
    const sut = new FizzBuzz();
    // Act
    const result = sut.generate();

    // Assert
    expect(result[6]).toBe("Foo");
  });

  it("should return Boo", () => {
    // Arrange
    const sut = new FizzBuzz();
    // Act
    const result = sut.generate();

    // Assert
    expect(result[10]).toBe("Boo");
  });

  it("should return Boo", () => {
    // Arrange
    const sut = new FizzBuzz();
    // Act
    const result = sut.generate();

    // Assert
    expect(result[76]).toBe("FooBoo");
  });

  it("should return Big", () => {
    // Arrange
    const sut = new FizzBuzz();
    // Act
    const result = sut.generate();

    // Assert
    expect(result[96]).toBe("Big");
  });
});
