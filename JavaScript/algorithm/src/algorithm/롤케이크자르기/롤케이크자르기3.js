function solution(topping) {
  let answer = 0;

  for (let i = 0; i < topping.length - 1; ++i) {
    const copyArr = [...topping];
    const spliceArr = copyArr.splice(0, i + 1);
    const frontSet = new Set(spliceArr);
    const backSet = new Set(copyArr);

    if (frontSet.size === backSet.size) answer++;
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
// 2

console.log(solution([1, 2, 3, 1, 4]));
// 0

// https://school.programmers.co.kr/learn/courses/30/lessons/132265
