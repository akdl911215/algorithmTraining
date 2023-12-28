const arr = [1, 2, 3];
const arr2 = [];

let start = 0;
let end = 0;
while (true) {
  let num = arr[start];
  while (start !== end) {
    num += arr[end];
  }
}
console.log(arr2);

// [1], [2], [3], [1, 2], [2, 3], [3, 1], [1, 2, 3]
