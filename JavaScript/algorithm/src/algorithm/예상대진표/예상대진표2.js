function solution(n, a, b) {
  let divide = n / 2;

  let result = Math.log2(n);
  for (let i = 0; i < Math.log2(n); ++i) {
    if (a <= divide && b > divide) {
      break;
    } else {
      --result;
    }
  }

  return result;
}
console.log(solution(8, 4, 7));
// 3

// console.log(solution(16, 1, 4));
// 4

// https://school.programmers.co.kr/learn/courses/30/lessons/12985
