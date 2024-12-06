function solution(n, m, x, y, r, c, k) {
  const IMPOSSIBLE = "impossible";

  // n * m = maze size
  // x, y = start
  // r, c = end
  // k = distance

  // grid
  const grid = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
  console.log(grid);

  // d l r u
  const directions = [
    { move: "d", dx: 1, dy: 0 },
    { move: "l", dx: 0, dy: -1 },
    { move: "r", dx: 0, dy: 1 },
    { move: "u", dx: -1, dy: 0 },
  ];

  const queue = [[r, c]];
  grid[r][c] = 0;
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const { dx, dy } of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (1 <= nx && nx <= n && 1 <= ny && ny <= m && grid[nx][ny] === -1) {
        const updateDistance = grid[x][y] + 1;
        grid[nx][ny] = updateDistance;
        queue.push([nx, ny]);
      }
    }
  }
  console.log("grid2 : ", grid);

  const initialMinDistance = grid[x][y];
  if (
    initialMinDistance > k ||
    (initialMinDistance - k) % 2 ||
    initialMinDistance === -1
  ) {
    return IMPOSSIBLE;
  }

  // n * m = maze size
  // x = 2, y = 3 > starting point
  // r = 3, c = 1 > ending point
  // k = distance
  queue.push([x, y]);
  const minDistance = [];
  let currentX = x;
  let currentY = y;
  for (let step = 0; step < k; ++k) {
    const remainingSteps = k - step - 1;
  }

  return answer;
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
// dllrl

// console.log(solution(2, 2, 1, 1, 2, 2, 2));
// "dr"

// console.log(solution(3, 3, 1, 2, 3, 3, 4));
// "impossible"

// https://school.programmers.co.kr/learn/courses/30/lessons/150365
