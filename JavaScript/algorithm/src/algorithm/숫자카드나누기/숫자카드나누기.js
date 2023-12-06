const gcd = (n1, n2) => {
  let remainder = n1 % n2;
  return n2 === 0 ? n1 : gcd(n2, remainder);
};

function solution(arrayA, arrayB) {
  var answer = 0;
  let [gcdA, gcdB] = [arrayA[0], arrayB[0]];
  for (let i = 1; i < arrayA.length; i++) {
    gcdA = gcd(gcdA, arrayA[i]);
    gcdB = gcd(gcdB, arrayB[i]);
  }
  if (gcdA === 1) gcdA = 0;
  if (gcdB === 1) gcdB = 0;

  if (arrayA.every((v) => v % gcdB !== 0)) answer = Math.max(answer, gcdB);
  if (arrayB.every((v) => v % gcdA !== 0)) answer = Math.max(answer, gcdA);

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

// https://velog.io/@highero-k/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%AB%EC%9E%90-%EC%B9%B4%EB%93%9C-%EB%82%98%EB%88%84%EA%B8%B0-JavaScript-Level-2
// https://school.programmers.co.kr/learn/courses/30/lessons/135807
