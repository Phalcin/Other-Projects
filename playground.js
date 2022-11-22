const employeesData = [
  { name: "Sebastian", overtime: 5 },
  { name: "Cardi Vee", overtime: 10 },
  { name: "George Lopez", overtime: 12 },
];

const employeesToReward = employeesData.filter(
  (employees) => employees.overtime >= 7
);
console.log(employeesToReward);

const employeesNames = employeesToReward.map((names) => names.name);
console.log(employeesNames);

employeesNames.forEach((name) => console.log(`${name} received a reward`));
