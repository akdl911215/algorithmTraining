function solution(n, a, b) {
  let divide = n / 2;

  let result = 0;
  for (let i = 0; i < divide; ++i) {
    if (a <= divide && b > divide) {
      result = Math.log2(divide * 2);
      break;
    } else {
      divide /= 2;
    }
  }

  return result;
}
console.log(solution(8, 4, 7));
// 3

console.log(solution(16, 4, 9));
// 4

// https://school.programmers.co.kr/learn/courses/30/lessons/12985
