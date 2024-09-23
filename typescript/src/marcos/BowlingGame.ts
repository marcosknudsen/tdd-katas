export class BowlingGame {
  constructor() {
    this.score=0;
  }

  score: number;

  roll(pins) {
    this.score += pins;
  }

  getScore() {
    return this.score;
  }
}
