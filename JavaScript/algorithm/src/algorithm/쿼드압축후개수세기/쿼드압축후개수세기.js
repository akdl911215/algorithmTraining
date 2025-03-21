function solution(arr) {
  var answer = [];

  const queue = [[arr.length, arr[0].length]];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (isAllElementSame(arr, x, y)) {
      const array = [];
      for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
          array.push(arr[i][j]);
        }
      }
    } else {
      //
    }
  }
  return answer;
}

function isAllElementSame(arr, x, y) {
  const firstValue = arr[x][y];

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (arr[i][j] !== firstValue) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ]),
);
// [4, 9]

// console.log(
//   solution([
//     [1, 1, 1, 1, 1, 1, 1, 1],
//     [0, 1, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 1, 1, 1, 1],
//     [0, 1, 0, 0, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 1, 0, 0, 1],
//     [0, 0, 0, 0, 1, 1, 1, 1],
//   ]),
// );
// [10, 15]

// 0과 1로 이루어진 2n x 2n 크기의 2차원 정수 배열 arr이 있습니다. 당신은 이 arr을 쿼드 트리와 같은 방식으로 압축하고자 합니다.
// 구체적인 방식은 다음과 같습니다.
// 당신이 압축하고자 하는 특정 영역을 S라고 정의합니다.
// 만약 S 내부에 있는 모든 수가 같은 값이라면, S를 해당 수 하나로 압축시킵니다.
// 그렇지 않다면, S를 정확히 4개의 균일한 정사각형 영역(입출력 예를 참고해주시기 바랍니다.)으로 쪼갠 뒤,
// 각 정사각형 영역에 대해 같은 방식의 압축을 시도합니다.
// arr이 매개변수로 주어집니다. 위와 같은 방식으로 arr을 압축했을 때,
// 배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
