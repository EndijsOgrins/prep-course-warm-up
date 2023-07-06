export {};

const count = (name: string, subName: string) => {
  const words = name.split(" ");
  const matchingWords = words.filter(
    (word) => word.toLowerCase() === subName.toLowerCase()
  );
  return matchingWords.length;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
