function solution(order) {
  const mainBelt = Array.from({ length: order.length }, (_, i) => i + 1);
  console.log("mainBelt : ", mainBelt);
  const auxBelt = [];
  let index = 0;
  let count = 0;

  while (mainBelt.length > 0 || auxBelt.length > 0) {
    if (auxBelt.length > 0 && auxBelt[auxBelt.length - 1] === order[index]) {
      auxBelt.pop();
      index++;
      count++;
    } else if (mainBelt.length > 0 && mainBelt[0] === order[index]) {
      mainBelt.shift();
      index++;
      count++;
    } else if (mainBelt.length > 0) {
      auxBelt.push(mainBelt.shift());
    } else {
      break;
    }

    if (index >= order.length) {
      break;
    }
  }

  return count;
}
console.log(solution([4, 3, 1, 2, 5])); // 2

// console.log(solution([5, 4, 3, 2, 1])); // 5
// https://school.programmers.co.kr/learn/courses/30/lessons/131704
