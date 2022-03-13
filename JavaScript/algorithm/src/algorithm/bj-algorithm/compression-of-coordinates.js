const fs = require("fs");

// const readFileSyncAddress = '/dev/stdin';

const readFileSyncAddress = "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

function solution(input) {
  [n, x] = input;

  x = x.split(" ").map((i) => Number(i));

  const answer = [];

  const set = Array.from(new Set([...x])).sort((a, b) => a, b);

  const object = {};

  set.forEach((item, index) => (object[item] = index));

  for (let i = 0; i < x.length; i++) answer.push(object[x[i]]);

  return answer.join(" ");
}

console.log(solution(input));
