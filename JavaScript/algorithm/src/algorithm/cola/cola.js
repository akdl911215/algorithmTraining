function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    let num = Math.floor(n / a)
    let num2 = n % a;
    n = num2 + num
    answer = answer + (num * b)
  }

  return answer;
}

const a = 2;
const b = 1;
const n = 20;
// result : 19

// const a = 3;
// const b = 1;
// const n = 20;
// result : 9
console.log(solution(a, b, n));

// https://school.programmers.co.kr/learn/courses/30/lessons/132267
