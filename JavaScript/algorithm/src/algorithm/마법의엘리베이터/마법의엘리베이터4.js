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
        plus = 1;
      }
      answer += pop;

      if (num > 0) splitNumber.push(num);
    } else {
      // 4층 이하
      answer += pop;
    }
  }

  if (plus > 0) answer += plus;
  return answer;
}
