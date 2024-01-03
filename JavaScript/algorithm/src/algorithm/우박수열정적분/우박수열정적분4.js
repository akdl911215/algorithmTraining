function solution(k, ranges) {
  let index = 0;
  const arr = [[index++, k]];
  while (k !== 1) {
    if (k % 2 === 0) {
      arr.push([index++, (k /= 2)]);
    } else {
      arr.push([index++, (k = k * 3 + 1)]);
    }
  }
  console.log(arr);

  const n = arr.length - 1;
  const resultArr = [];
  for (let i = 0; i < ranges.length; ++i) {
    const [first, seconds] = ranges[i];

    if (first === 0 && seconds === 0) {
      resultArr.push(calculator(0, n, arr));
    } else if (first > n + seconds) {
      resultArr.push(-1);
    } else {
      resultArr.push(calculator(first, n + seconds, arr));
    }
  }

  function calculator(index, length, arr) {
    let result = 0;
    for (let j = index; j < length; ++j)
      result += ((arr[j][1] + arr[j + 1][1]) * (arr[j + 1][0] - arr[j][0])) / 2;

    return result;
  }

  return resultArr;
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
