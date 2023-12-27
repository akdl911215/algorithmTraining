function solution(order) {
  let answer = 0;
  const main = Array.from({ length: order.length }, (_, i) => i + 1);
  const sub = [];

  let orderIndex = 0;
  let mainIndex = 0;
  while (order.length > mainIndex || sub.length > 0) {
    if (sub.length > 0 && sub[sub.length - 1] === order[orderIndex]) {
      answer++;
      orderIndex++;
      sub.pop();
    } else if (
      order.length > mainIndex &&
      main[mainIndex] === order[orderIndex]
    ) {
      orderIndex++;
      answer++;
      mainIndex++;
    } else if (order.length > mainIndex) {
      sub.push(main[mainIndex++]);
    } else {
      break;
    }

    if (orderIndex >= order.length) {
      break;
    }
  }

  return answer;
}
console.log(solution([4, 3, 1, 2, 5])); // 2

console.log(solution([5, 4, 3, 2, 1])); // 5
// https://school.programmers.co.kr/learn/courses/30/lessons/131704
