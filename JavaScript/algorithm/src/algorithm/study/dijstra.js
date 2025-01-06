function dijkstra(graph, start) {
  let distances = {};
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  let priorityQueue = [[0, start]];

  while (priorityQueue.length > 0) {
    priorityQueue.sort((a, b) => a[0] - b[0]);

    let [currentDistance, currentNode] = priorityQueue.shift();

    if (currentDistance > distances[currentNode]) {
      continue;
    }

    for (let [neighbor, weight] of graph[currentNode]) {
      let distance = currentDistance + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        priorityQueue.push([distance, neighbor]);
      }
    }
  }

  return distances;
}

let graph = {
  A: [
    ["B", 4],
    ["C", 2],
  ],
  B: [
    ["A", 4],
    ["D", 1],
  ],
  C: [
    ["A", 2],
    ["D", 3],
  ],
  D: [
    ["B", 1],
    ["C", 3],
  ],
};

// Find the shortest distances from node 'A'
let distances = dijkstra(graph, "A");
console.log(distances);
