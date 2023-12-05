function solution(k, tangerine) {
  let answer = 0;

  const map = {};

  for (let i = 0; i <= tangerine.length - k; ++i) {
    const tmpMap = { ...map };
    for (let j = i; j < k + i; ++j) {
      console.log("tmpMap[tangerine[j]] : ", tmpMap[tangerine[j]]);
      const num = tmpMap[tangerine[j]] || 0;
      console.log("num : ", num);

      tmpMap[tangerine[j]] = num + 1;
    }

    console.log("-----");
    console.log("tmpMap : ", tmpMap);
  }

  console.log(map);

  return answer;
}
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
// 3

// console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
// 2

// console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
// 1

// https://school.programmers.co.kr/learn/courses/30/lessons/138476
