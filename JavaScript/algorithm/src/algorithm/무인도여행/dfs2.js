const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const DFS = (graph, startNode) => {
  const visited = []; // 탐색 완료
  let needVisited = []; // 탐색이 필요한

  needVisited.push(startNode);

  while (needVisited.length !== 0) {
    const node = needVisited.shift();
    console.log("node : ", node);
    if (!visited.includes(node)) {
      visited.push(node);

      needVisited = [...graph[node], ...needVisited];
    }
  }

  return visited;
};
console.log(DFS(graph, "A"));
// ["A", "B", "D", "E", "F", "C", "G", "H", "I", "J"]
// [
//   'A', 'B', 'D', 'E',
//   'F', 'C', 'G', 'H',
//   'I', 'J'
// ]
