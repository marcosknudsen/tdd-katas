export class Greeter {
  constructor() {}

  greet(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return "Hello " + name;
  }
}
