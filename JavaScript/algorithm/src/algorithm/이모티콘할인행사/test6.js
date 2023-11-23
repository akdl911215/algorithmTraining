const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

function dfs(graph, node, visited = new Set()) {
  console.log(node);
  visited.add(node);

  graph[node].forEach((value) => {
    if (!visited.has(value)) {
      visited.add(value);

      dfs(graph, value, visited);
    }
  });

  return visited;
}
console.log(dfs(graph, "A"));
// A B D E F C
