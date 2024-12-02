function solution(n, m, x, y, r, c, k) {
  // Directions with their corresponding moves
  const directions = [
    { move: "d", di: 1, dj: 0 },
    { move: "l", di: 0, dj: -1 },
    { move: "r", di: 0, dj: 1 },
    { move: "u", di: -1, dj: 0 },
  ];

  // Initialize the minimum distance grid
  const minDist = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));

  // BFS to compute minimum distances from the exit (r, c)
  const queue = [];
  queue.push([r, c]);
  minDist[r][c] = 0;

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    for (const { di, dj } of directions) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 1 && ni <= n && nj >= 1 && nj <= m && minDist[ni][nj] === -1) {
        minDist[ni][nj] = minDist[i][j] + 1;
        queue.push([ni, nj]);
      }
    }
  }

  // Check if it's possible to reach the exit within k steps
  const initialMinDist = minDist[x][y];
  if (
    initialMinDist === -1 ||
    initialMinDist > k ||
    (k - initialMinDist) % 2 !== 0
  ) {
    return "impossible";
  }

  // Function to construct the lexicographically smallest path
  let path = [];
  let currentI = x;
  let currentJ = y;

  for (let step = 0; step < k; step++) {
    const remainingSteps = k - step - 1;
    let moved = false;

    // Iterate through directions in lex order: 'd', 'l', 'r', 'u'
    for (const dir of directions.sort((a, b) => a.move.localeCompare(b.move))) {
      const ni = currentI + dir.di;
      const nj = currentJ + dir.dj;

      if (ni >= 1 && ni <= n && nj >= 1 && nj <= m && minDist[ni][nj] !== -1) {
        const neededSteps = minDist[ni][nj];
        if (
          neededSteps <= remainingSteps &&
          (remainingSteps - neededSteps) % 2 === 0
        ) {
          path.push(dir.move);
          currentI = ni;
          currentJ = nj;
          moved = true;
          break;
        }
      }
    }

    if (!moved) {
      return "impossible";
    }
  }

  // Verify if the final position is the exit
  if (currentI === r && currentJ === c) {
    return path.join("");
  } else {
    return "impossible";
  }
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
// dllrl

// console.log(solution(2, 2, 1, 1, 2, 2, 2));
// "dr"

// console.log(solution(3, 3, 1, 2, 3, 3, 4));
// "impossible"

// https://school.programmers.co.kr/learn/courses/30/lessons/150365
