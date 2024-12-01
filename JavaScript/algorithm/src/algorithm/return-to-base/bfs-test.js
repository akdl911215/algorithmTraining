class Queue {
  constructor() {
    this.items = [];
  }

  enqueue = (element) => this.items.push(element);

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.items.shift();
  }

  isEmpty = () => this.items.length === 0;
}

const graph = {
  1: [2, 4],
  2: [1, 3],
  3: [2, 4],
  4: [1, 3],
};

function bfs(startNode, graph) {
  const queue = new Queue();
  const distances = {};
  const visited = new Set();

  queue.enqueue(startNode);
  distances[startNode] = 0;
  visited.add(startNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    const currentDistance = distances[currentNode];

    for (let neighbor of graph[currentNode]) {
      console.log("neighbor : ", neighbor);
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        distances[neighbor] = currentDistance + 1;
        queue.enqueue(neighbor);
      }
    }
  }

  return distances;
}

const startNode = 1;
const distances = bfs(startNode, graph);

// 결과 출력
for (let node = 1; node <= 4; node++) {
  if (distances[node] !== undefined) {
    console.log(
      `노드 ${startNode}에서 노드 ${node}까지의 거리: ${distances[node]}`,
    );
  } else {
    console.log(`노드 ${startNode}에서 노드 ${node}까지의 거리는 도달 불가`);
  }
}
