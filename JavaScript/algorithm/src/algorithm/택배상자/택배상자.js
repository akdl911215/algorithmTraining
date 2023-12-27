function solution(order) {
  let answer = 0;

  for (let i = 0; i < order.length - 1; ++i) {
    if (order[i] > order[i + 1]) {
      console.log("i : ", i);
      answer++;
    }
  }

  return answer;
}
console.log(solution([4, 3, 1, 2, 5])); // 2

console.log(solution([5, 4, 3, 2, 1])); // 5
// https://school.programmers.co.kr/learn/courses/30/lessons/131704
