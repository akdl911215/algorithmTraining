const arr = [
  [1, 2],
  [2, 3],
  [3, 4],
];

for (const va of arr) {
  console.log(va);
}

console.log("--------");
for (const el in arr) {
  console.log(arr[el]);
}
