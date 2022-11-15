const a = [1, 2, 3, 4, 5];

const isTrue = a.some((number) => {
  return number > 2;
});
console.log(isTrue);
