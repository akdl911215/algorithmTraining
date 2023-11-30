const arr = [1, 2, 3, 4, 5];
let maxSum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(maxSum);

const arr2 = [false, false, false];

for (let i = 0; i < 3; ++i) {
  arr2[i] = true;

  const check = arr2.filter((el) => el === false);
  console.log("check : ", check);
}

const obj = { a: 1, b: 2 };
console.log(Object.keys(obj).length);
