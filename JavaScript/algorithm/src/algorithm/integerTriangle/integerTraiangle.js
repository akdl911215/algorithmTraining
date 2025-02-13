function solution(triangle) {
  for (let i = triangle.length - 1; i >= 1; --i) {
    for (let j = 0; j < triangle[i].length - 1; ++j) {
      const a = triangle[i][j];
      const b = triangle[i][j + 1];

      triangle[i - 1][j] = Math.max(a, b) + triangle[i - 1][j];
    }
  }

  return triangle[0][0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
// 30

// https://school.programmers.co.kr/learn/courses/30/lessons/43105?language=javascript
