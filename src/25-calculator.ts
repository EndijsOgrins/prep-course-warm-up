export {};

function add(a1: number, b1: number): number {
  return a1 + b1;
}

function subtract(a2: number, b2: number): number {
  return a2 - b2;
}

function sum(numArr: number[]): number {
  return numArr.reduce((a, b) => a + b, 0);
}

function multiply(numArr2: number[]): number {
  return numArr2.reduce((a, b) => a * b, 1);
}

function power(a3: number, b3: number): number {
  return a3 ** b3;
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
