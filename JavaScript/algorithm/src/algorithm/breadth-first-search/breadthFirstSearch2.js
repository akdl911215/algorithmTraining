function bfs(graph, start) {

  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return result;
}

// Example usage
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"],
};

// const result = bfs(graph, "A");
// console.log(result); // Output: ["A", "B", "C", "D", "E", "F"]

const result = bfs(graph, "B");
console.log(result); // Output: ["B", "A", "C", "D", "E", "F"]