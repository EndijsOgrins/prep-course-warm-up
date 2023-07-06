export {};

function isBlank(str: string | null): boolean {
  if (str === null || str.trim() === "") {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank(null)); // Output: true
console.log(isBlank("")); // Output: true
console.log(isBlank(" ")); // Output: true
console.log(isBlank("abc")); // Output: false
console.log(isBlank(" abc ")); // Output: false
