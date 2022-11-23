const person = {
  firstName: "Brad",
  "this is a key with spaces": true,
};

person.dog = { name: "Fluffy", age: 2 };
person.age = 25;

console.log(person.firstName);
console.log(person);

// SQUARE BRACKET NOTATION
const property = "age";

console.log(person["this is a key with spaces"]);
