function solution(food) {
  var answer = "0";

  let arr = [];

  food.map((el, key) => {
    console.log("el : ", el);
    console.log("key : ", key);
    el = el % 2 === 0 ? el : el - 1;
    for (let i = 0; i < el / 2; ++i) {
      arr.push(key);
    }
  });

  console.log("arr : ", arr);
  answer = arr.join("") + 0 + arr.reverse().join("");
  console.log("answer : ", answer);
  return answer;
}
const food = [1, 3, 4, 6];
// result : 1223330333221"
// const food = [1, 7, 1, 2];
// result : "111303111"

solution(food);

// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript
