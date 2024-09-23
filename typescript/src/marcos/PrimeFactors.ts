export class PrimeFactors {
  constructor() {}

  generate(number: number) {
    let factors = [];

    for (let i = 2; i <= number; i++) {
      if (this.isPrime(i) && number % i === 0) {
        factors.push(i);
      }
    }

    return factors;
  }

  private isPrime(number: number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }
}
