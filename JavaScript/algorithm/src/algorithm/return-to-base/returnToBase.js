class Queue {
  constructor() {
    this.nodes = [];
  }

  enqueue = (element) => this.nodes.push(element);

  dequeue = () => (this.isEmpty() ? "Nodes is empty" : this.nodes.shift());

  isEmpty = () => this.nodes.length === 0;
}

function buildGraph(roads) {
  const graph = {};

  roads.forEach(([u, v]) => {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];

    graph[u].push(v);
    graph[v].push(u);
  });

  return graph;
}

function solution(n, roads, sources, destination) {
  const answer = [];
  const queue = new Queue();
  const distances = {};
  const visited = new Set();
  const startNode = destination;
  distances[startNode] = 0;
  queue.enqueue(startNode);
  visited.add(startNode);
  const graph = buildGraph(roads);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    const currentDistance = distances[currentNode];

    for (let neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        distances[neighbor] = currentDistance + 1;
        queue.enqueue(neighbor);
      }
    }
  }

  for (let source of sources) {
    if (distances[source] === undefined) {
      answer.push(-1);
    } else {
      answer.push(distances[source]);
    }
  }

  return answer;
}

// console.log(
//   solution(
//     3,
//     [
//       [1, 2],
//       [2, 3],
//     ],
//     [2, 3],
//     1,
//   ),
// );
// [1, 2]

console.log(
  solution(
    5,
    [
      [1, 2],
      [1, 4],
      [2, 4],
      [2, 5],
      [4, 5],
    ],
    [1, 3, 5],
    5,
  ),
);
// [2, -1, 0]
