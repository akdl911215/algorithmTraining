function solution(a, b, n) {
  let answer = 0;

  let num = 0;
  let num2 = 0;

  for (let i = 0; i < n; i += a) {
    num = n / a;
    num2 = n % a;
    num = num + num2;
  }

  console.log("num : ", num);
  console.log("num2 : ", num2);

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
