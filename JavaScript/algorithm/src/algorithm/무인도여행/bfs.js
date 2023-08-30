const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "G"],
  F: ["D", "H", "I"],
  G: ["E", "J", "K"],
  H: ["F", "L"],
  I: ["F", "M"],
  J: ["G", "N"],
  K: ["G", "O"],
  L: ["H"],
  M: ["I", "P"],
  N: ["J"],
  O: ["K"],
  P: ["M"],
};
console.log('graph["B"] : ', graph["B"]);

const bfs = (graph, start) => {
  const checked = [];
  const willCheck = [];

  willCheck.push(start);

  while (willCheck.length !== 0) {
    const node = willCheck.shift();
    console.log("node : ", node);
    if (!checked.includes(node)) {
      checked.push(node);
      console.log("checked : ", checked);
      willCheck.push(...graph[node]);
      console.log("willCheck : ", willCheck);
      console.log("-------------------------");
    }
  }

  return checked;
};

console.log(bfs(graph, "B"));
