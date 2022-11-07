function solution(food) {
  var answer = "";

  console.log("food : ", food);
  answer += "0";
  for (let i = 1; i < food.length; ++i) {
    if (food[i] % 2 === 0) {
      console.log("if check : ", food[i]);
      for (let j = 0; j < food[i] - 1; ++j) {
        answer = i + answer + i;
      }
    } else {
      console.log("else check : ", food[i]);
      console.log("else food[i].length; : ", food[i].length);
      for (let j = 0; j < food[i]; ++j) {
        answer = i + answer + i;
      }
    }
  }

  console.log("answer : ", answer);
  return answer;
}
const food = [1, 3, 4, 6];
// result : 1223330333221"

// const food = [1, 7, 1, 2];
// result : "111303111"

solution(food);

// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript
