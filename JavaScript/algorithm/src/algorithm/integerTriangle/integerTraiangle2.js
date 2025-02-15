function solution(triangle) {
  const height = triangle.length;
  let dp = Array.from({ length: height }, (_, i) =>
    Array(triangle[i].length).fill(0),
  );

  for (let i = 0; i < triangle[height - 1].length; ++i) {
    dp[height - 1][i] = triangle[height - 1][i];
  }

  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = triangle[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }
  return dp[0][0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
// 30

// https://school.programmers.co.kr/learn/courses/30/lessons/43105?language=javascript
