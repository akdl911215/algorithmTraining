const arr = [1, 2, 3, 4, 5, 6];

const a = arr.splice(0, 2);
console.log("a : ", a);
console.log("arr : ", arr);

const arr2 = [1, 2, 3, 4, 5, 6];
const b = arr2.slice(0, 2);
console.log("b : ", b);
console.log("arr2 : ", arr2);

const set = new Set(arr2);
console.log(set);
