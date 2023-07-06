export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */
function stringToArray(strArr: string[]): string[] {
  const element1: string[] = []; // Initialize element1 as an empty array

  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i];
    const splitted = element.split("");

    for (let j = 0; j < splitted.length; j++) {
      const word = splitted[j];
      element1.push(word); // Add each word to the element1 array
    }
  }
  // fullNames.forEach((fullName) => {
  //   const listOfNamesSurnames = fullName.split(" ");
  //   listOfNamesSurnames. forEach( (nameOrSurname) => {
  //   separateNamesList.push(nameOrSurname);
  //   });
  // });

  return element1; // Return the final array
}

console.log(stringToArray(["John Doe", "Es un Tu"])); // Expected output: ['John', 'Doe']
