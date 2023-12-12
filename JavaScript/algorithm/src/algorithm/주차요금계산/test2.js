const obj = {
  a: 1,
};

obj["a"] += 1;
console.log(obj);

const obj2 = {};
obj2["b"] = (obj2["b"] || 0) + 1;
console.log("obj2 : ", obj2);

console.log("check");
