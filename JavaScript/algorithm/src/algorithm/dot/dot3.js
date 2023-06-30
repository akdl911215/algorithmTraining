function solution(k, d) {
  let answer = 1;

  for (let x = k; x <= d; x += k) {
    let y = Math.min(parseInt(Math.sqrt(d * d - x * x)), x);
    console.log("y: ", y);
    if (y === x) {
      answer++;
      y--;
    }
    answer += 2 * (parseInt(y / k) + 1);
    console.log("answer : ", answer);
  }

  return answer;
}

solution(2, 4);
