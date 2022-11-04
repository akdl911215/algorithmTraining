// 빵 야채 고기 빵
// [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
  let answer = 0;

  let arr = [];
  for (let i = 3; i < ingredient.length; ++i) {
    if (i === 3) {
      for (let j = 0; j < 4; ++j) arr.push(ingredient[j]);
    } else {
      arr.push(ingredient[i]);
    }

    if (
      arr[arr.length - 1] === 1 &&
      arr[arr.length - 2] === 3 &&
      arr[arr.length - 3] === 2 &&
      arr[arr.length - 4] === 1
    ) {
      answer++;
      arr.splice(-4);
    }
  }

  return answer;
}
console.log(solution(ingredient));
// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript
