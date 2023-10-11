function solution(x, y, n) {
  let answer = -1;

  let count = 0;

  function dfs(x, count) {
    if (x === y) {
      //초기값 잡기
      if (answer === -1) {
        answer = count;
      } else {
        if (answer > count) answer = count;
      }
      return;
    } else if (x > y) {
      return;
    } else {
      dfs(x * 2, count + 1);
      dfs(x * 3, count + 1);
      dfs(x + n, count + 1);
    }
  }

  dfs(x, count);
  return answer;
}

console.log(solution(10, 40, 5)); // 2
// console.log(solution(10, 40, 30)); // 1
// console.log(solution(2, 5, 4)); // -1

// https://school.programmers.co.kr/learn/courses/30/lessons/154538
