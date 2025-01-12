// Graph represented as an adjacency list
let graph = {
  1: [2, 3],
  2: [1, 4, 5],
  3: [1, 6, 7],
  4: [2],
  5: [2],
  6: [3],
  7: [3],
};

// BFS function
function bfs(start) {
  let visited = new Set(); // Set to keep track of visited nodes;
  let queue = []; // Queue to explore nodes level by level

  // Start with the initial node
  queue.push(start);
  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift(); // Remove the node from the front of the queue
    console.log(node); // Process the current node (int this case, just print it)

    // Visit all unvisited neighbors of the current node
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
}

// Start BFS traversal from node 1
console.log("BFS Traversal starting from node 1:");
bfs(1);
