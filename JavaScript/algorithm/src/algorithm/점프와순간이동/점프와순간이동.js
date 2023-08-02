const solution = (n) =>
  n
    .toString(2)
    .split("")
    .filter((el) => +el === 1).length;

console.log(solution(9));

// https://school.programmers.co.kr/learn/courses/30/lessons/12980
