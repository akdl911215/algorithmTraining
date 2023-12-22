function solution(n, left, right) {
  const answer = [];

  while (left <= right)
    answer.push(Math.max(Math.floor(left / n), left++ % n) + 1);

  return answer;
}

console.log(solution(3, 2, 5));
// [3, 2, 2, 3]

console.log(solution(4, 7, 14));
// [4, 3, 3, 3, 4, 4, 4, 4]
