// const arr = [2, 1, 1, 2, 3, 1, 2, 3, 1];

// console.log(arr.splice(-4));
// console.log(arr);

const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
let arr = [];
for (let i = 0; i < ingredient.length; ++i) {
  arr.push(ingredient[i]);
  console.log("arr : ", arr);
  if (
    arr[arr.length - 1] === 1 &&
    arr[arr.length - 2] === 3 &&
    arr[arr.length - 3] === 2 &&
    arr[arr.length - 4] === 1
  ) {
    console.log("1 arr : ", arr);
    arr.splice(-4);
    console.log("2 arr : ", arr);
  }
}
