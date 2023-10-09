const arr = [
  [5, 17, 85],
  [3, 7, 31],
  [1, 2, 3],
  [123, 23, 12],
];
arr.sort((a, b) => {
  console.log(`a[2]: ${a[2]}, b[2]: ${b[2]}`);
  return b[2] - a[2];
});
console.log("arr : ", arr);
