export {};

// type cardFaces =
//   | "Ace"
//   | "King"
//   | "Queen"
//   | "Jack"
//   | "10"
//   | "9"
//   | "8"
//   | "7"
//   | "6"
//   | "5"
//   | "4"
//   | "3"
//   | "2";
// function createDeck(arr: cardFaces[]): cardFaces[] {}
function onlyTheAces(arr: string[]): string[] {
  return [...new Set(arr)];
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
