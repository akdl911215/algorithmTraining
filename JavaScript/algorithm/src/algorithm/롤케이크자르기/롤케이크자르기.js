function solution(topping) {
  let answer = -1;

  const obj = {};

  for (let i = 0; i < topping.length; ++i) {
    obj[topping[i]] = (obj[topping[i]] || 0) + 1;
  }

  console.log(obj);

  return answer;
}
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
// 2

// https://school.programmers.co.kr/learn/courses/30/lessons/132265
