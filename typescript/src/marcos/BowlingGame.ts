export class BowlingGame {
  constructor() {
    this.frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1];
    this.actualFrame = 0;
    this.try = 0;
  }

  private score: number;
  private frames: number[];
  private actualFrame: number;
  private try: number;

  roll(pins) {
    this.frames[this.actualFrame] += pins;

    if (this.frames[this.actualFrame + 1] === 0) {
      this.resetFrame();
    } else {
      this.frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1];
      this.actualFrame = 0;
      this.try = 0;
    }

    if (this.try === 1) {
      this.actualFrame++;
      this.try = 0;
    }
    else{
      this.try++;
    }

  }

  getScore() {
    return this.frames.filter((f) => f != -1).reduce((a, b) => a + b, 0);
  }

  private resetFrame() {
    if (this.frames[this.actualFrame] === 10) {
      this.addBonus();
      if (this.try === 0) {
        this.addBonus();
      }
    }
  }

  private addBonus() {
    let index = this.frames.indexOf(-1);

    if (index !== -1) {
      this.frames[index] = 0;
    }
  }
}
