export class FizzBuzz {
  constructor() {
    this.max = 100;
    this.min = 1;
    this.multipleOf3Text = "Fizz";
    this.multipleOf5Text = "Buzz";
  }

  max: number;
  min: number;
  multipleOf3Text: string;
  multipleOf5Text: string;

  setMax(max: number) {
    this.max = max;
  }

  setMin(min: number) {
    this.min = min;
  }

  setMultipleOf3Text(text: string) {
    this.multipleOf3Text = text;
  }

  setMultipleOf5Text(text: string) {
    this.multipleOf5Text = text;
  }

  generate() {
    return Array.from({ length: this.max - this.min + 1 }, (_,n) => {
      n += this.min;

      let multipleOf3 = n % 3 === 0;
      let multipleOf5 = n % 5 === 0;
      
      if (n % 7 === 0 && n % 11 === 0){
        return "FooBoo";
      }
      
      if (n === 7){
        return "Foo";
      }
      
      if (n === 11){
        return "Boo";
      }
      
      if (multipleOf3 && multipleOf5) {
        return "FTW";
      }
      
      if (multipleOf3) {
        return this.multipleOf3Text;
      }
      
      if (multipleOf5) {
        return this.multipleOf5Text;
      }

      if (n < 16){
        return "Small"
      }

      if (n > 95){
        return "Big"
      }
      
      return n
    });
  }
}
