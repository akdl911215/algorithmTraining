const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
map.set("a", 2);

const value = map.get("a");
console.log(map.set("a", value + 1));
console.log(map.entries());

const arr = ["a", "b"];
console.log(arr["a"]);

const completion = ["eden", "kiki"];
const map2 = completion.map((participant) => {
  console.log("participant : ", participant);
  return completion[participant];
});

console.log("map2 : ", map2);
