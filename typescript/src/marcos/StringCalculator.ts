export class StringCalculator {
  constructor() {}

  add(input) {
    let response: number = 0;
    let exceptionMessage: string = "negatives not allowed: ";
    let negatives: number[] = [];
    let demiliter: string = "";

    demiliter = input.match(/\/\/(.*)\n/);
    demiliter = demiliter ? demiliter[1] : null;

    input = input ? input.split(demiliter ?? /[\n,]/) : [];

    input = input.filter((n) => n <= 1000);
    negatives = input.filter((n) => n < 0);

    if (negatives.length) {
      return exceptionMessage + negatives.join(",");
    }

    input.map((n) => {
      response += parseInt(n);
    });

    return response;
  }
}
