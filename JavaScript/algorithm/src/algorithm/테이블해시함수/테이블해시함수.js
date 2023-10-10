function solution(data, col, row_begin, row_end) {
  let answer = 0;

  data.sort((a, b) => {
    const desc = a[col - 1] - b[col - 1];
    if (a[col - 1] === b[col - 1]) {
      const asc = b[0] - a[0];
      return asc;
    }
    return desc;
  });

  for (let i = row_begin; i <= row_end; ++i)
    answer ^= data[i - 1].reduce(
      (accumulator, currentValue) => accumulator + (currentValue % i),
      0
    );

  return answer;
}
// 0000
// 0100
// ----
// 0100

// arr[i][0] === PK
console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2, // col
    2, // row_begin
    3 // row_end
  )
);
// 4

// https://school.programmers.co.kr/learn/courses/30/lessons/147354
