function solution(n, left, right) {
  const answer = [];
  const arr = new Array(n);
  for (let i = 0; i < arr.length; ++i) arr[i] = new Array(n);

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      arr[i][j] = Math.max(i + 1, j + 1);
    }
  }

  arr.forEach((array) => answer.push(...array));

  return answer.slice(left, right + 1);
}

console.log(solution(3, 2, 5));
// [3, 2, 2, 3]

// console.log(solution(4, 7, 14));
// [4, 3, 3, 3, 4, 4, 4, 4]
