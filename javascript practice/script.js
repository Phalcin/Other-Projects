const country = "Ghana";
const continent = "Africa";
let population = 33;

const isIsland = false;
let language;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

language = "English";

// const countrySplit = population / 2;
// console.log(countrySplit);

// population++;

let finland = 6;
let higherPopulation = population > finland;
console.log(higherPopulation);

let averagePopu = 33;
let hPopu = population > averagePopu;
console.log(hPopu);

let description =
  "Portugal is in Europe, and its " + 11 + " million people speak portuguese";
console.log(description);

description = `Portugal is in Europe, and it's ${11} million people speak portuguese`;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}s population is ${population} million below average`);
}

// 4
// 617
// 23
// false
// 1143

// let numNeighbors = Number(
//   prompt("How many neighbor countries does your country have? ")
// );
// if (numNeighbors === 1) {
//   console.log("only one border");
// } else if (numNeighbors > 1) {
//   console.log("More than one border");
// } else {
//   console.log("No borders");
// }

let countryEnglish = true;
let countryPopulation = 50;
let notIsland = true;

if (countryEnglish && countryPopulation && notIsland) {
  console.log("You should live in portugal");
} else {
  console.log("Portugal does not meet your criteria");
}

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// let day = "monday   ";

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day");
// }

// const age = 23;

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// //  bill = 275, 40, 430
// const bill = 275;
// const tip = bill < 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// };

// console.log(describeCountry("Ghana", 33, "Accra"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and 
  ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
