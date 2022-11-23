function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    let num = Math.floor(n / a) * b
    n = (n % a) + num
    answer +=  num
  }

  return answer;
}

const a = 5;
const b = 3;
const n = 10;
// result : 9

// const a = 2;
// const b = 1;
// const n = 20;
// result : 19

// const a = 3;
// const b = 1;
// const n = 20;
// result : 9
console.log(solution(a, b, n));

// https://school.programmers.co.kr/learn/courses/30/lessons/132267
