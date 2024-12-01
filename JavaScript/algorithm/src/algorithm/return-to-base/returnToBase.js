class Queue {
  constructor() {
    this.nodes = [];
  }

  enqueue = (element) => this.nodes.push(element);

  dequeue = () => (this.isEmpty() ? "Nodes is empty" : this.nodes.shift());
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

  // bfs 기준점은 destination
  const startNode = destination;
  distances[startNode] = 0;
  queue.enqueue(startNode);
  visited.add(startNode);

  const graph = buildGraph(roads);
  console.log("graph: ", graph);

  // 1. destination 기준으로 bfs 돌려서 거리 측정
  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    const currentDistance = distances[currentNode];
  }

  // 2. sources 로 거리 몇인지 체크

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
