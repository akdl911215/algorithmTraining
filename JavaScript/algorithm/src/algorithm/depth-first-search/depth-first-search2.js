function depthFirstSearch(graph, start) {
  const visited = new Set();
  const result = [];

  function explore(node) {
    visited.add(node);
    result.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        explore(neighbor);  
      }
    }
  }


  explore(start);
  return result; 
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"],
};

const result = depthFirstSearch(graph, "A");
console.log(result); // Output: ["A", "B", "D", "E", "C", "F"]