function solution(queue1, queue2) {
  let answer = -2;

  const pivot =
    [...queue1, ...queue2].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / 2;
  console.log(pivot);

  return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
// console.log([1, 2, 1, 2], [1, 10, 1, 2]); // 7
// console.log([1, 1], [1, 5]); // -1

// https://school.programmers.co.kr/learn/courses/30/lessons/118667
