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

// Breadth First Search
const BFS = (graph, startNode) => {
  const visited = []; // 탐색 완료
  let needVisited = []; // 탐색 필요

  needVisited.push(startNode);

  while (needVisited.length !== 0) {
    const node = needVisited.shift();

    if (!visited.includes(node)) {
      visited.push(node);

      needVisited = [...needVisited, ...graph[node]];
    }
  }

  return visited;
};
console.log(BFS(graph, "A"));
// ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]
