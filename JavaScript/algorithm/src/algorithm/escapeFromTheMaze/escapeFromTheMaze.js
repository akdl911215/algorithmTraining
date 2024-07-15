function solution(maps) {
  const sToL = bfs(maps, "S", "L");
  if (sToL === -1) return -1;

  const lToE = bfs(maps, "L", "E");
  if (lToE === -1) return -1;

  return sToL + lToE;
}

function bfs(graph, start, end) {
  let visited = [];

  const startPivot = [];
  for (let i = 0; i < graph.length; ++i) {
    for (let j = 0; j < graph[0].length; ++j) {
      visited[i][j] = 0;

      if (graph[i][j] === start) {
        startPivot.push([i, j]);
      }
    }
  }

  let queue = new Queue();
  queue.enqueue([startPivot[0], startPivot[1], 0]);
  console.log("visited : ", visited);

  while (!!queue.size()) {
    const [x, y, c] = queue.dequeue();

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (
        0 <= nx &&
        nx <= graph.length - 1 &&
        0 <= ny &&
        ny <= graph[0].length - 1 &&
        visited[nx][ny] === 0
      ) {
        if (graph[nx][ny] === end) {
          return c + 1;
        }

        queue.enqueue([nx, ny, c + 1]);
        visited[nx][ny] = 1;
      }
    }
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }

  size() {
    return this.items.length;
  }
}

// 1 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다.
// 각 칸은 통로 또는 벽으로 구성되어 있으며, 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다.
// 통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데, 이 문은 레버를 당겨서만 열 수 있습니다. 레버 또한 통로들 중 한 칸에 있습니다.
// 따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다.
// 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다. 미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때,
// 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다.
//
// 미로를 나타낸 문자열 배열 maps가 매개변수로 주어질 때, 미로를 탈출하는데 필요한 최소 시간을 return 하는 solution 함수를 완성해주세요. 만약, 탈출할 수 없다면 -1을 return 해주세요.

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
// 16

// https://school.programmers.co.kr/learn/courses/30/lessons/159993
