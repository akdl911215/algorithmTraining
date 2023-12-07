const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

function solution(arrayA, arrayB) {
  let answer = 0;

  let a = arrayA[0];
  let b = arrayB[0];
  for (let i = 1; i < arrayA.length; ++i) {
    a = gcd(a, arrayA[i]);
    b = gcd(b, arrayB[i]);
  }

  b = b === 1 ? 0 : b;
  a = a === 1 ? 0 : a;
  const checkA = arrayA.every((value) => value % b !== 0);
  const checkB = arrayB.every((value) => value % a !== 0);

  if (checkA) {
    answer = Math.max(answer, b);
  }
  if (checkB) {
    answer = Math.max(answer, a);
  }

  return answer;
}

const arrayA = [10, 17];
const arrayB = [5, 20];
console.log(solution(arrayA, arrayB)); // 0

const arrayA2 = [10, 20];
const arrayB2 = [5, 17];
console.log(solution(arrayA2, arrayB2)); // 10

const arrayA3 = [14, 35, 119];
const arrayB3 = [17, 30, 102];
console.log(solution(arrayA3, arrayB3)); // 7
