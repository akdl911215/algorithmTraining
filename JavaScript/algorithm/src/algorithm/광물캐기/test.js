const obj = { diamond: 0, iron: 0, stone: 0 };
console.log(obj);

const a = [
  "diamond",
  "diamond",
  "diamond",
  "iron",
  "iron",
  "diamond",
  "iron",
  "stone",
]
  .splice(0, 5)
  .map((mineral) => {
    console.log("mineral : ", mineral);
    console.log("mineral[0] : ", mineral[0]);
    obj[mineral[0]]++;
  });

console.log(a);
