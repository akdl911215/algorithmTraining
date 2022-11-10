let check = 0;
let check2 = 0;

function solution(a, b, n) {
  let answer = 0;
  console.log(`a: ${a}, b: ${b}, n: ${n}`);

  for (let i = 0; i < n; i += a) {
    console.log("?");
    check = check + b;
  }
  console.log("check : ", check);
  // n / a

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
