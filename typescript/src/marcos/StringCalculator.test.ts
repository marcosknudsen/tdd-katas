import { StringCalculator } from "./StringCalculator";

describe(StringCalculator, () => {
  it("should return 0 when the input is an empty string", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("");

    // assert
    expect(result).toEqual(0);
  });

  it("should return same number when is an single number", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("1");

    // assert
    expect(result).toEqual(1);
  });

  it("should return sum of comma-separated numbers", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("1,2");

    // assert
    expect(result).toEqual(3);
  });

  it("should return sum of newline-separated numbers", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("1\n2");

    // assert
    expect(result).toEqual(3);
  });

  it("should return sum of any-separated numbers", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("1\n2,3\n4");

    // assert
    expect(result).toEqual(10);
  });

  it("should return exception if any number is negative", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("-1,2,-3");

    // assert
    expect(result).toEqual("negatives not allowed: -1,-3");
  });

  it("should ignore numbers greater than 1000", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("1,1001");

    // assert
    expect(result).toEqual(1);
  });

  it("should set single-char delimiter on first line", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("//#\n1#2");

    // assert
    expect(result).toEqual(3);
  });

  it("should set multiple-char delimiter on first line", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("//###\n1###2");

    // assert
    expect(result).toEqual(3);
  });
});
