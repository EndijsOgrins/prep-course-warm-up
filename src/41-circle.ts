export {};

/**
 * The good ol' this.. Possibly the most confusing topic in the whole language
 * and one that interviewers often use to make you (me) feel miserable in interviews 😭
 * If you find the docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * also confusing, try some of these resources:
 *  - https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
 *  - https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
 *  - https://www.youtube.com/watch?v=Pi3QC_fVaD0 (JavaScript this Keyword Explained In 3 Minutes)
 *  - https://www.youtube.com/watch?v=YOlr79NaAtQ (What is THIS in JavaScript? in 100 seconds)
 */

// function Circle(this: any, radius: number) {
//   this.radius = radius;
//   this.area = function () {
//     return Math.PI * this.radius * this.radius;
//   };
//   this.perimeter = function () {
//     return 2 * Math.PI * this.radius;
//   };
// }

class Circle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  format(n: number): string {
    return n.toFixed(2);
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const c = new Circle(3);
console.log("Area =", c.format(c.area())); // Expected output: Area = 28.27
console.log("Perimeter =", c.format(c.perimeter())); // Expected output: Perimeter = 18.85
