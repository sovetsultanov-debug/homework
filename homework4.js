// Homework 4: array of objects + for...of loop (English version)
// Count letters in each team member's name, the total, and find the longest name(s)

const team = [
  { id: 1, name: "Uson" },
  { id: 2, name: "Bayel" },
  { id: 3, name: "Shokha" },
  { id: 4, name: "Adiko" },
  { id: 5, name: "Aibek" },
  { id: 6, name: "Kanykei" },
  { id: 7, name: "Timur" },
  { id: 8, name: "Aidana" },
  { id: 9, name: "Erlan" },
  { id: 10, name: "Begimai" },
];

let total = 0;
let maxLength = 0;
let longestNames = [];

for (const member of team) {
  const length = member.name.length;
  total += length;
  console.log(`${member.name} has ${length} letters`);

  if (length > maxLength) {
    maxLength = length;
    longestNames = [member.name];
  } else if (length === maxLength) {
    longestNames.push(member.name);
  }
}

// Average name length, rounded to one decimal
const average = (total / team.length).toFixed(1);

console.log(`Total letters: ${total}`);
console.log(`Average name length: ${average}`);
console.log(`Longest name(s) with ${maxLength} letters: ${longestNames.join(", ")}`);
