const arr = [1, 2, 3];

const arr2 = [];
for (let i = 0; i < arr.length; ++i) {
  for (let j = i; j <= i; ++j) {
    console.log(`[${i + 1},${j + 1}]`);
    arr2.push([i, j]);
  }
}
console.log(arr2);

// [1, 2], [2, 3], [3, 1]
