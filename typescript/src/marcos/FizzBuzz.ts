export class FizzBuzz {
  constructor() {
    this.max = 100;
    this.min = 1;
  }

  max: number;
  min: number;

  setMax(max: number) {
    this.max = max;
  }

  setMin(min: number) {
    this.min = min;
  }

  generate() {
    return Array.from({ length: this.max - this.min + 1 }, (_,n) => {
      n += this.min;

      let multipleOf3 = n % 3 === 0;
      let multipleOf5 = n % 5 === 0;

      if (multipleOf3 && multipleOf5) {
        return "FizzBuzz";
      }

      if (multipleOf3) {
        return "Fizz";
      }

      if (multipleOf5) {
        return "Buzz";
      }

      return n
    });
  }
}
