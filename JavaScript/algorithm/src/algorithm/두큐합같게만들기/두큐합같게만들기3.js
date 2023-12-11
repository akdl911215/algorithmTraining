function solution(queue1, queue2) {
  const totalSum =
    queue1.reduce((acc, cur) => acc + cur, 0) +
    queue2.reduce((acc, cur) => acc + cur, 0);
  // 총 합이 홀수인 경우, 두 큐의 합을 같게 만들 수 없음
  if (totalSum % 2 !== 0) return -1;

  const targetSum = totalSum / 2;
  let currentSum = queue1.reduce((acc, cur) => acc + cur, 0);
  let start = 0,
    end = queue1.length; // 슬라이딩 윈도우의 시작과 끝 인덱스
  let operations = 0;

  const combinedQueue = queue1.concat(queue2); // 두 큐를 하나의 큐로 합침

  while (start < combinedQueue.length) {
    if (currentSum === targetSum) {
      return operations;
    }

    if (currentSum < targetSum && end < combinedQueue.length) {
      currentSum += combinedQueue[end++];
    } else {
      currentSum -= combinedQueue[start++];
    }

    operations++;
  }

  return -1; // 목표 합을 만들 수 없는 경우
}
// 14 16
// console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
// console.log(solution([1, 1], [1, 5])); // -1

// https://school.programmers.co.kr/learn/courses/30/lessons/118667
