import { BowlingGame } from "./BowlingGame";

describe(BowlingGame, () => {
  it("should score 0 in a gutter game", () => {
    // arrange
    const sut = new BowlingGame();

    // act
    for (let i = 0; i < 20; i++) {
      sut.roll(0);
    }

    const score = sut.getScore();

    // assert
    expect(score).toBe(0);
  });

  it("should score 1 in a gutter game", () => {
    // arrange
    const sut = new BowlingGame();

    // act
    sut.roll(1)

    const score = sut.getScore();

    // assert
    expect(score).toBe(1);
  });

  it("should score 10 in a gutter game", () => {
    // arrange
    const sut = new BowlingGame();

    // act
    sut.roll(1)
    sut.roll(9)

    const score = sut.getScore();

    // assert
    expect(score).toBe(10);
  });
});
