function solution(n, left, right) {
  const answer = [];

  let index = 1;
  let count = 0;
  for (let i = 0; i < n * n; ++i) {
    answer[i] = index;

    if (count < n) {
      index++;
    } else {
      count = 0;
      // index ;
    }
  }

  return answer.slice(left, right + 1);
}

console.log(solution(3, 2, 5));
// [3, 2, 2, 3]

// console.log(solution(4, 7, 14));
// [4, 3, 3, 3, 4, 4, 4, 4]
