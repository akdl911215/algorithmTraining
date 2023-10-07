function solution(r1, r2) {
  let answer = 0;

  for (let x = 1; x <= r2; ++x) {
    console.log("x : ", x);
    let maxY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2)); // 제곱근(루트)를 씌우고 소수점은 버림
    console.log("maxY : ", maxY);

    let minY = 0;
    if (r1 > x) {
      console.log("check");
      minY = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2));
    }
    console.log("minY : ", minY);

    // maxY - minY + 1 = 해당 x좌표에 두 원 사이의 정수값이 도출
    answer += maxY - minY + 1;
    console.log("answer : ", answer);
    console.log("------------------");
  }

  return answer * 4;
}

console.log(solution(2, 3)); // 20
// https://school.programmers.co.kr/learn/courses/30/lessons/181187
