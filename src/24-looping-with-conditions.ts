export {};

function onlyTheAces(arr: string[]): string[] {
  return arr.filter((card) => card === "Ace");
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
