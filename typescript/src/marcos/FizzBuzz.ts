export class FizzBuzz {
  constructor() {
    this.max = 100;
    this.min = 1;
  }

  max: number;
  min: number;

  generate() {
    return Array.from({ length: this.max - this.min + 1 }, (_,n) => {
      
      if (n % 3 === 0) {
        return "Fizz";
      }

      return n
    });
  }
}
