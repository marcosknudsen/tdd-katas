export class FizzBuzz {
  constructor() {
    this.max = 100;
    this.min = 1;
  }

  max: number;
  min: number;

  generate() {
    return Array.from({ length: this.max - this.min + 1 }, (_,n) => {
      
      let multipleOf3 = n % 3 === 0;
      if (multipleOf3) {
        return "Fizz";
      }

      let multipleOf5 = n % 5 === 0;
      if (multipleOf5) {
        return "Buzz";
      }

      return n
    });
  }
}
