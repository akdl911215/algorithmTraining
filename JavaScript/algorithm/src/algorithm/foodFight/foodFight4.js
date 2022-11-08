function solution(food) {
  var answer = "0";

  let tmp = "";
  for (let i = 1; i < food.length; ++i) {
    tmp += String(i).repeat(Math.floor(food[i] / 2));
  }

  answer = tmp + answer + [...tmp].reverse().join("");

  console.log("answer", answer);
  return answer;
}
// const food = [1, 3, 4, 6];
// result : 1223330333221"
const food = [1, 7, 1, 2];
// result : "111303111"

solution(food);

// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript
