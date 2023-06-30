function solution(k, d) {
  let answer = 0;
  for (let x = 0; x <= d; x += k) {
    let y = parseInt(Math.sqrt(d ** 2 - x ** 2));
    console.log("y: ", y);
    answer += parseInt(y / k) + 1;
    console.log("answer : ", answer);
  }
  return answer;
}
solution(2, 4);
