// const arr = [2, 4, -10, 4, -9];
const arr = [1000, 999, 1000, 999, 1000, 999];

const copyArr = Array.from(new Set([...arr])).sort((a, b) => a - b);
const myMap = new Map();

[...copyArr].forEach((el, index) => myMap.set(el, index));

let answer = "";
arr.forEach((el) => (answer += myMap.get(el) + " "));
console.log("answer : ", answer);
