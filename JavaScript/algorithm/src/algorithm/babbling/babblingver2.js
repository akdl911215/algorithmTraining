function solution(babbling) {
  // 해당 풀이는 StarBlitz님의 풀이를 해석하였음을 미리 밝힙니다.
  let count = 0;
  // 연속되는 경우
  let dup = ["ayaaya", "yeye", "woowoo", "mama"];
  while (babbling.length) {
    console.log("check");
    let b = babbling.pop();
    console.log("b : ", b);
    // 연속되는 발음은 패스

    console.log(
      "dup.some : ",
      dup.some((v) => {
        console.log("some v : ", v);
        b.includes(v);
      })
    );
    if (dup.some((v) => b.includes(v))) {
      console.log("여긴?");
      continue;
    }
    console.log("1 b : ", b);
    // 가능한 발음을 모두 숫자로 바꾸어
    b = b
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");
    console.log("2 b : ", b);
    // 숫자는 공백으로 변환
    b = b.replace(/[1234]/g, "");
    console.log("3 b : ", b);
    // 모두 가능한 발음의 경우 count++
    if (b.length === 0) count++;
  }

  return count;
}
// const babbling = ["ayaayayewooomaayye", "yeeyyewoomawu", "ayeaymema"];
const babbling = ["ye"];
solution(babbling);
