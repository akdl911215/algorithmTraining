// maxY - minY + 1 = 해당 x 좌표에 두 원 사이의 정수값이 도출
// max 는 내림, min 은 올림
function solution(r1, r2) {
  let answer = 0;

  for (let x = 1; x <= r2; ++x) {
    // 피타고라스정의 > c^2 = a^2 + b^2
    const maxY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
    console.log("maxY : ", maxY);

    console.log(`r1: ${r1}, x: ${x} // r1 > x : ${r1 > x}`);
    const minY = r1 > x ? Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) : 0;
    console.log("minY : ", minY);

    answer += maxY - minY + 1;
  }

  return answer * 4;
}

console.log(solution(2, 3)); // 20
