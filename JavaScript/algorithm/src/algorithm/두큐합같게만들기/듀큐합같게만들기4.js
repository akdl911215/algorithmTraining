function solution(queue1, queue2) {
  let answer = 0;

  const queue = [...queue1, ...queue2];

  const pivot =
    queue.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    2;

  let currentSum = queue1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  let startIndex = 0;
  let endIndex = queue1.length;

  while (startIndex < queue.length) {
    if (currentSum === pivot) return answer;

    if (currentSum < pivot) {
      currentSum += queue[endIndex++];
    } else {
      currentSum -= queue[startIndex++];
    }
    answer++;
  }

  return -1;
}

// 14 16
console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1

// https://school.programmers.co.kr/learn/courses/30/lessons/118667
