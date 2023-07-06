export {};

/**
 * So far you've learned all about functions, arrays, objects and that's a lot already!
 * The rest of the exercises here are for you to practice some more before moving on to
 * the more complicated exercises in this course.
 */

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 *
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

const fahrenheitToCelsius = (fahrenheit: number) => {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10; // Round to one decimal place
};

const celsiusToFahrenheit = (celsius: number) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return Math.round(fahrenheit * 10) / 10; // Round to one decimal place
};

console.log(fahrenheitToCelsius(32)); // Expected result: 0
console.log(celsiusToFahrenheit(0)); // Expected result: 32
