function solution(n, info) {
  const answer = [];

  //  0  1  2  3  4  5  6  7  8  9  10   : index
  // [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
  //  10 9  8  7  6  5  4  3  2  1  0    : score

  //  34 > 16
  // [0,2,2,0,1,0,0,0,0,0,0]
  // 23

  const compareArr = Array.from({ length: info.length }, () => 0);

  for (let i = 0; i < compareArr.length; ++i) {
    compareArr[i] -= info[i];
  }
  console.log(compareArr);

  // 어퍼치 >= 라이언

  return answer;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
// [0,2,2,0,1,0,0,0,0,0,0]

// console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
// [-1]

// https://school.programmers.co.kr/learn/courses/30/lessons/92342
