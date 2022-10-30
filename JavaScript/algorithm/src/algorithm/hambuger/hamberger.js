// 빵 야채 고기 빵
// [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
  var answer = 0;

  const result = [1, 2, 3, 1];
  let hamburgerList = [];
  for (let i = 0; i < ingredient.length; ++i) {
    hamburgerList.push(ingredient[i]);

    if (hamburgerList.length >= 4) {
      let temList = [];

      temList.push(hamburgerList[hamburgerList.length - 4]);
      temList.push(hamburgerList[hamburgerList.length - 3]);
      temList.push(hamburgerList[hamburgerList.length - 2]);
      temList.push(hamburgerList[hamburgerList.length - 1]);

      const sameArr = temList.every((el, key) => el === result[key]);
      if (sameArr) {
        answer++;

        hamburgerList.pop();
        hamburgerList.pop();
        hamburgerList.pop();
        hamburgerList.pop();
      }
    }
  }
  return answer;
}
solution(ingredient);
// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript
