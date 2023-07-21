function solution(n, a, b) {
  let divide = n / 2;

  return a <= divide && b > divide ? Math.log2(n) : solution(n / 2, a, b);
}
console.log(solution(8, 4, 7));
// 3

// console.log(solution(16, 4, 8));
// 4

// https://school.programmers.co.kr/learn/courses/30/lessons/12985
