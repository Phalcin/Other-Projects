const ghana = {
  firstName: "Akuffo",
  secondName: "Addo",
  cars: {
    firstCar: "BMW",
    otherCars: "Many BMWS",
  },
  funcGhana(well) {
    console.log(well);
  },
};

const newGhana = JSON.parse(JSON.stringify(ghana));

newGhana.cars.firstName = "Ministers";
newGhana.firstName = "shit";
console.log(newGhana);
