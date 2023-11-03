function solution(storey) {
  let answer = 0;

  const splitNumber = String(storey)
    .split("")
    .map((el) => Number(el));

  const pivot = 10;
  let plus = 0;
  while (splitNumber.length !== 0) {
    let pop = splitNumber.pop() + plus;

    plus = 0;

    if (pop > 5) {
      // 6층 이상
      answer += pivot - pop;
      plus = 1;
    } else if (pop === 5) {
      const num = splitNumber.pop() || 0;
      if (num >= 5) {
        answer += pivot - num;
        plus = 1;
      } else {
        answer += pop;
      }

      if (num > 0) splitNumber.push(num);
    } else {
      // 4층 이하
      answer += pop;
    }
  }

  if (plus > 0) answer += plus;
  return answer;
}

// console.log(solution(998)); // 3
// console.log(solution(16)); // 6
// console.log(solution(2554)); // 16
// console.log(solution(3612)); // 11
// console.log(solution(96281)); // 11
console.log(solution(5432102)); // 17

// https://school.programmers.co.kr/learn/courses/30/lessons/148653
