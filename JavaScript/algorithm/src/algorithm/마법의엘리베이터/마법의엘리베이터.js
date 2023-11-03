function solution(storey) {
  let answer = 0;

  const splitNumber = String(storey)
    .split("")
    .map((el) => Number(el));

  const pivot = 10;
  let plus = 0;
  while (splitNumber.length !== 0) {
    let pop = splitNumber.pop() + plus;

    if (pop >= 10) {
      const [a, b] = String(pop)
        .split("")
        .map((el) => Number(el));

      const num = Number((splitNumber.pop() || 0) + a);
      splitNumber.push(num);

      pop = b;
    }

    plus = 0;

    if (pivot - pop > 5 && pop !== 0) {
      answer += pop;
    } else if (pivot - pop <= 5) {
      answer += pivot - pop;
      plus = 1;
    }
  }

  if (plus > 0) answer += plus;
  return answer;
}

console.log(solution(998)); // 3
// console.log(solution(16)); // 6
// console.log(solution(2554)); // 16
// console.log(solution(3612)); // 11
// console.log(solution(96281)); // 11

// https://school.programmers.co.kr/learn/courses/30/lessons/148653
