let check2 = 0;
let check3 = 0;

function solution(a, b, n) {
  let answer = 0;
  console.log(`a: ${a}, b: ${b}, n: ${n}`);
  console.log("check2 : ", check2);
  console.log("check3 : ", check3);

  if ((n === 1 || n === 2) && check3 > 0) {
    n += check3;
    check3 -= check3;
  }

  if (n === 0) {
    answer = check2;
    console.log("n === 0 answer : ", answer);
    return answer;
  }
  let check = 0;

  const num = Math.floor(n / a);
  check += num;
  check2 += num * b;
  console.log("🚀 >> check2", check2);
  const num2 = n % a;
  if (num2 > 0) {
    check3 += num2;
  }

  return solution(a, b, Math.floor(check));
}

// const a = 2;
// const b = 1;
// const n = 20;
// result : 19

const a = 5;
const b = 3;
const n = 20;
// result : 9
console.log(solution(a, b, n));
