const a = 3000;
const b = 5000;
const budget = 23000;
// 3000, 5000, 23000;
function solution(a, b, budget) {
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof budget);
  let answer = 0;

  for (let i = 0; i * a <= budget; ++i) {
    for (let j = 0; j * b <= budget - a * i; ++j) {
      const resultA = i * a;
      const resultB = j * b;
      console.log(`resultA : ${resultA} , resultB : ${resultB}`);
      if (budget - (Number(resultA) + Number(resultB)) === 0) {
        answer++;
      }
    }
  }
  console.log(answer);
  return answer;
}

solution(a, b, budget);
