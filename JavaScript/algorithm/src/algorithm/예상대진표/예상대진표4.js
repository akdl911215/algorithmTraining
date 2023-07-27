function solution(n, a, b) {
  let result = 0;

  while (a != b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    result++;
  }

  return result;
}
console.log(solution(8, 3, 4));
// 3

// console.log(solution(16, 1, 4));
// 2

// https://school.programmers.co.kr/learn/courses/30/lessons/12985
