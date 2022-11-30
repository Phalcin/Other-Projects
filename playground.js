const cars = {
  car1: "Bugatti",
  car2: "Ferrari",
  otherStuff: {
    house: 1,
    well: 1,
  },
};

console.log(cars);
const carShow = cars;

JSON.parse(JSON.stringify(carShow));
