function bfs(graph, start) {
  const visited = new Set(); // To keep track of visited nodes
  const queue = [start]; // Initialize the queue with the start node
  const result = []; // To store the traversal order

  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue the first node
    if (!visited.has(node)) {
      // Mark the node as visited
      visited.add(node);
      result.push(node);

      // Add all unvisited neighbors to the queue
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
  E: ["B", "F"],
  F: ["C", "E"],
};

const result = bfs(graph, "A");
console.log(result); // Output: ["A", "B", "C", "D", "E", "F"]