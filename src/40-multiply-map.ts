export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

type Callback<T, U> = (currentValue: T, index: number, array: T[]) => U;

const map = <T, U>(array: T[], callback: Callback<T, U>): U[] => {
  const mappedArray: U[] = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i], i, array));
  }
  return mappedArray;
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function (number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
