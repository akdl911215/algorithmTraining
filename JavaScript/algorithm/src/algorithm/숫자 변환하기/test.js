const set = new Set();

set.add(1);
set.add("b");
set.add(2);
set.add(40);

console.log(set.has(40));

console.log("set : ", set);

for (const value of set) {
  console.log(value);
}
