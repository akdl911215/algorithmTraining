function solution(order) {
  let answer = 0;

  let index = 0;
  while (index !== order.length - 1) {
    if (order[index] > order[index + 1]) {
      index++;
      answer++;
    } else {
      break;
    }
  }

  if (index === order.length - 1) answer++;

  return answer;
}
console.log(solution([4, 3, 1, 2, 5])); // 2

console.log(solution([5, 4, 3, 2, 1])); // 5
// https://school.programmers.co.kr/learn/courses/30/lessons/131704
