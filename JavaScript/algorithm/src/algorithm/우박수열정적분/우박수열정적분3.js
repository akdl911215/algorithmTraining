function solution(k, ranges) {
  const accArea = [0];
  let value = k;
  while (value != 1) {
    const nextValue = value % 2 ? value * 3 + 1 : value / 2;
    accArea.push(accArea[accArea.length - 1] + (value + nextValue) / 2);
    value = nextValue;
  }

  return ranges.map(([a, b]) => {
    if (a >= accArea.length || -b >= accArea.length) return -1;
    const area = accArea[accArea.length - 1 + b] - accArea[a];
    if (area < 0 || area == null) return -1;
    return area;
  });
}

console.log(
  solution(5, [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3],
  ])
);
// [33.0,31.5,0.0,-1.0]

// console.log(
//   solution(3, [
//     [0, 0],
//     [1, -2],
//     [3, -3],
//   ])
// );
// [47.0,36.0,12.0]

// https://school.programmers.co.kr/learn/courses/30/lessons/134239
