function solution(n, left, right) {
  let answer = [];
  let row = Math.floor(left / n);
  let column = left % n;

  for (let i = 0; i <= right - left; i++) {
    answer.push(Math.max(row, column) + 1);
    if (column + 1 < n) {
      column++;
    } else {
      row++;
      column = 0;
    }
  }
  return answer;
}

console.log(solution(3, 2, 5));
// [3, 2, 2, 3]

console.log(solution(4, 7, 14));
// [4, 3, 3, 3, 4, 4, 4, 4]
