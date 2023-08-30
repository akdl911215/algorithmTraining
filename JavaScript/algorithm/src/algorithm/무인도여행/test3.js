const arr = [1, 2, 3];

console.log(arr.includes(2, 1));
console.log(arr.includes(2, 2));

const [R, C] = [4, 5];
console.log(`R: ${R}, C: ${C}`);

const obj = {};
const visited = obj.from({ length: R }, () => Array(C).fill(0));
