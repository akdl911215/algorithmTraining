let check2 = 0;
let check3 = 0;

function solution(a, b, n) {
  let answer = 0;
  console.log(`a: ${a}, b: ${b}, n: ${n}`);

  if (n === 1 && check3 > 0) {
    n += check3;
    check3--;
  }

  if (n === 0) {
    answer = check2;
    console.log("n === 0 answer : ", answer);
    return answer;
  }
  let check = 0;

  const num = n / a;
  check += num;
  check2 += num;
  const num2 = n % a;
  if (num2 > 0) {
    check3 += num2;
  }

  solution(a, b, Math.floor(check));

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
