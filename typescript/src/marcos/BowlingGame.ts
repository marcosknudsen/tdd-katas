export class BowlingGame {
  constructor() {
    this.frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.actualFrame = 0;
  }

  score: number;
  frames: number[];
  actualFrame: number;

  roll(pins) {
    this.frames[this.actualFrame] += pins;
  }

  getScore() {
    return this.frames[this.actualFrame];
  }
}
