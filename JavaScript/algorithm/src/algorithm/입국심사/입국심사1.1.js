function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 0;

  let right = n * times[times.length - 1];

  let answer = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    times.forEach((value) => {
      count += Math.floor(mid / value);

      if (count >= n) {
        answer = Math.min(mid, answer);
        return;
      }
    });

    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10]));
// https://school.programmers.co.kr/learn/courses/30/lessons/43238?language=javascript
