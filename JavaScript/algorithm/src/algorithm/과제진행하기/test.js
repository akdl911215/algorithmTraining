// const arr = [
//   ["korean", "11:40", "30"],
//   ["math", "12:30", "40"],
//   ["english", "12:10", "20"],
// ];
//
// const arrSort = arr.sort((a, b) => {
//   console.log(`a: ${a[1]}, b: ${b[1]}`);
//   return a[1].localeCompare(b[1]);
// });
// console.log(arrSort);
//
// console.log("-----------");

const arr2 = [
  ["science", "12:40", "50"],
  ["music", "12:20", "40"],
  ["history", "14:00", "30"],
  ["computer", "12:30", "100"],
];

const arrSort2 = arr2.sort((a, b) => a[1].localeCompare(b[1]));
console.log(arrSort2);
