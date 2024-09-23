import { parse } from "path";

export class Diamond {
  constructor() {}

  print(letter) {
    let result = "";

    for (let i=65; i<=letter.charCodeAt(0); i++) {
      result += String.fromCharCode(i);
    }

    return result;
  }
}
