function solution(x, y, n) {
  let answer = 999;

  let count = 0;
  let check = 0;
  while (count < y) {
    count += x + n;
    check++;
  }

  let count2 = 0;
  let check2 = 0;
  while (count2 < y) {
    count2 += x * 2;
    check2++;
  }

  let count3 = 0;
  let check3 = 0;
  while (count3 < y) {
    count3 += x * 3;
    check3++;
  }

  const arr = [
    { [`${count}`]: check },
    { [`${count2}`]: check2 },
    { [`${count3}`]: check3 },
  ];

  for (let i = 0; i < 3; ++i) {
    if (
      Number(Object.keys(arr[i])) === y &&
      Number(Object.values(arr[i])) < answer
    ) {
      return (answer = Number(Object.values(arr[i])));
    }
  }
  return -1;
}
console.log(solution(10, 40, 5)); // 2
// console.log(solution(10, 40, 30)); // 1
// console.log(solution(2, 5, 4)); // -1

// https://school.programmers.co.kr/learn/courses/30/lessons/154538
