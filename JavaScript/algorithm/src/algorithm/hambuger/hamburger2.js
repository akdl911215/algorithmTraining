// 빵 야채 고기 빵
// [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
  var answer = 0;

  let arr = [];
  for (let i = 0; i < ingredient.length; ++i) {
    arr.push(ingredient[i]);
    if (
      arr[arr.length - 1] === 1 &&
      arr[arr.length - 2] === 3 &&
      arr[arr.length - 3] === 2 &&
      arr[arr.length - 4] === 1
    ) {
      answer++;
      console.log("1 arr : ", arr);
      arr.splice(-4);
      console.log("2 arr : ", arr);
    }
  }

  return answer;
}
console.log(solution(ingredient));
// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript
