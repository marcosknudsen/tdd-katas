export class BowlingGame {
  constructor() {
    this.frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.actualFrame = 0;
    this.try = 0;
  }

  score: number;
  frames: number[];
  actualFrame: number;
  try: number;

  roll(pins) {
    this.frames[this.actualFrame] += pins;

    if (this.frames[this.actualFrame] === 10) {
      this.resetFrame()
    }

    this.try++;
  }

  getScore() {
    return this.frames.reduce((a, b) => a + b, 0);
  }

  private resetFrame(){
    this.actualFrame++;

    if (this.try === 0) {

    }
  }
}
