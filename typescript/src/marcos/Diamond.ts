import { parse } from "path";

export class Diamond {
  constructor() {}

  print(letter) {

    if (letter === "A") {
      return "A";
    }

    let result = " ".repeat(letter.charCodeAt(0) - 65)  + "A/n";

    for (let i = 66; i <= letter.charCodeAt(0); i++) {
      result +=
        " ".repeat(letter.charCodeAt(0) - i) + String.fromCharCode(i) + " ".repeat((i-66)*2+1) + String.fromCharCode(i) + "/n";
    }

    for (let i = letter.charCodeAt(0)-1; i >= 66; i--) {
      result +=
        " ".repeat(letter.charCodeAt(0) - i) + String.fromCharCode(i) + " ".repeat((i-66)*2+1) + String.fromCharCode(i) + "/n";
    }

    result += " ".repeat(letter.charCodeAt(0) - 65)  + "A";

    return result;
  }
}
