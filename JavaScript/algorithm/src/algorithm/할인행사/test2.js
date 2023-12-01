const map = new Map();
map.set("a", 1);
console.log(map, map.size);

const map2 = new Map(map);
console.log(map2);

const num = map.get("a") - 1;
map.set("a", num);
console.log(map);
console.log(map2);
