import { parse } from "path";

export class Diamond {
  constructor() {}

  print(letter) {
    let result = "";

    for (let i = 65; i <= letter.charCodeAt(0); i++) {
      result +=
        " ".repeat(letter.charCodeAt(0) - 65) + String.fromCharCode(i) + "/n";
    }

    return result;
  }
}
