export {};

function tidyUpString(str: string): string {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  return str[0].toUpperCase() + str.substring(1);
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy: string[] = mentors.map((mentor) =>
  capitalise(tidyUpString(mentor))
); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
