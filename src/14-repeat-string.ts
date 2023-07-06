export {};

const repeatString = (char: string, lenght: number) => {
  return char.repeat(lenght);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
