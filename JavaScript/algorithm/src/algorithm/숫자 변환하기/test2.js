const set = new Set();

set.add(15).add(20).add(30);

const test = set;
console.log(test);

test.forEach((item) => console.log(item));
