function isPrime(num) {
  // 1과 0은 소수가 아님
  if (num <= 1) {
    return false;
  }

  // 2는 유일한 짝수 소수
  if (num === 2) {
    return true;
  }

  // 짝수는 소수가 아님
  if (num % 2 === 0) {
    return false;
  }

  // 3부터 num의 제곱근까지 반복하여 확인
  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n, k) {
  let answer = -1;

  const convertNumber = n.toString(k);
  console.log(convertNumber);

  const arr = [];
  let num = "";

  let start = 0;
  let end = 0;
  let count = 0;
  while (count !== convertNumber.length) {
    const check = Number(convertNumber[end]);
    console.log("check : ", check);
    isPrime();
    count++;
  }

  return answer;
}

// console.log(solution(128, 2));
console.log(solution(437674, 3)); // 3
// console.log(solution(110011, 10)); // 2

// https://school.programmers.co.kr/learn/courses/30/lessons/92335
