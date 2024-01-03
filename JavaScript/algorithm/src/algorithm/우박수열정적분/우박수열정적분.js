function solution(k, ranges) {
  const answer = [];

  let num = k;
  let index = 0;
  const arr = [[index++, num]];
  while (num !== 1) {
    if (num % 2 === 0) {
      arr.push([index++, (num /= 2)]);
    } else {
      arr.push([index++, (num = num * 3 + 1)]);
    }
  }

  // [0, 0] 전체의 정적분값 계산
  // [0, 0] 이 아니면 배열의 앞값 <= x <= 뒷값
  // 뒷값이 음수의 경우에는 n - b > n === 초항 k 가 1이 되기까지의 횟수
  const n = arr.length - 1;

  const resultArr = [];
  for (let i = 0; i < ranges.length; ++i) {
    const [first, seconds] = ranges[i];

    if (first === 0 && seconds === 0) {
      let result = 0;
      for (let j = 0; j < arr.length - 1; ++j) {
        const a = arr[j][1] + arr[j + 1][1];
        console.log("a : ", a);
        const b = arr[j + 1][0] - arr[j][0];
        console.log("b : ", b);
        const c = (a * b) / 2;
        console.log("c : ", c);
        result += c;
        console.log("result : ", result);
      }

      resultArr.push(result);
    } else if (first > n + seconds) {
      resultArr.push(-1);
    } else if (seconds < 0) {
      let result = 0;
      console.log("n + seconds ::: ", n + seconds);
      for (let j = first; j < n + seconds; ++j) {
        // result +=
        //   ((arr[i][1] + arr[i + 1][1]) * (arr[i + 1][0] - arr[i][0])) / 2;
        console.log("j : ", j);
        const a = arr[j][1] + arr[j + 1][1];
        console.log("a : ", a);
        const b = arr[j + 1][0] - arr[j][0];
        console.log("b : ", b);
        const c = (a * b) / 2;
        console.log("c : ", c);
        result += c;
        console.log("result : ", result);
      }

      resultArr.push(result);
    } else {
      let result = 0;
      for (let j = first; j < n + seconds; ++j) {
        // result +=
        //   ((arr[i][1] + arr[i + 1][1]) * (arr[i + 1][0] - arr[i][0])) / 2;
        const a = arr[j][1] + arr[j + 1][1];
        console.log("a : ", a);
        const b = arr[j + 1][0] - arr[j][0];
        console.log("b : ", b);
        const c = (a * b) / 2;
        console.log("c : ", c);
        result += c;
        console.log("result : ", result);
      }

      resultArr.push(result);
    }
  }

  console.log("resultArrR : ", resultArr);

  return answer;
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
