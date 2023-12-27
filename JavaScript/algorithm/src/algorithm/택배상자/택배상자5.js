function solution(order) {
  let answer = 0;
  const main = Array.from({ length: order.length }, (_, i) => i + 1);
  const sub = [];

  let index = 0;
  while (main.length > 0 || sub.length > 0) {
    if (sub.length > 0 && sub[sub.length - 1] === order[index]) {
      answer++;
      index++;
      sub.pop();
    } else if (main.length > 0 && main[0] === order[index]) {
      index++;
      answer++;
      main.shift();
    } else if (main.length > 0) {
      sub.push(main.shift());
    } else {
      break;
    }
  }

  return answer;
}
console.log(solution([4, 3, 1, 2, 5])); // 2

console.log(solution([5, 4, 3, 2, 1])); // 5
// https://school.programmers.co.kr/learn/courses/30/lessons/131704
