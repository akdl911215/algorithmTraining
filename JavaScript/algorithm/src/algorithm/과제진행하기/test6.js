const arr = [
  ["korean", "11:40", "30"],
  ["math", "12:30", "40"],
  ["english", "12:10", "20"],
];

const sortArr = arr.map((el) => el).sort((a, b) => a[1].localeCompare(b[1]));

console.log("arr : ", arr);
console.log("sortArr : ", sortArr);

const sortArr2 = arr.map((el) => el).sort((a, b) => a[0].localeCompare(b[0]));
console.log("sortArr2 : ", sortArr2);
