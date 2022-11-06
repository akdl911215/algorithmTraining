// 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다.
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을
// 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는
// 것을 어려워합니다.문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의
// 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// ["aya", "yee", "u", "maa"] result : 1
// ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"] result : 2
function solution(babbling) {
  let answer = 0;

  let bool = ["ayaaya", "yeye", "woowoo", "mama"];
  for (let i = 0; i < babbling.length; ++i) {
    let tmp = babbling[i];
    const bool2 = bool.some((el) => tmp.includes(el));
    if (bool2) {
      continue;
    }

    const aya = tmp.indexOf("aya");
    if (aya !== -1) {
      tmp = tmp.replaceAll("aya", "1");
    }

    const ye = tmp.indexOf("ye");
    if (ye !== -1) {
      tmp = tmp.replaceAll("ye", "2");
    }

    const woo = tmp.indexOf("woo");
    if (woo !== -1) {
      tmp = tmp.replaceAll("woo", "3");
    }

    const ma = tmp.indexOf("ma");
    if (ma !== -1) {
      tmp = tmp.replaceAll("ma", "4");
    }

    tmp = tmp.replace(/[1234]/g, "");
    if (tmp.length === 0) {
      answer++;
    }
  }

  console.log("answer : ", answer);

  return answer;
}

// "aya", "ye", "woo", "ma"
// const babbling = ["ayaa", "wooyeaya", "u", "maa"];
// const babbling = ["aya", "yee", "u", "maa"];
// const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
// const babbling = ["asadasayafe", "mayeayaye", "yeye", "yemawoo", "ayaayaa"];
// const babbling = ["ayaayayewooomaayye", "yeeyyewoomawu", "ayeaymema"];
// const babbling = ["mayeayaye"];
const babbling = ["yeyeye"];
solution(babbling);

// https://school.programmers.co.kr/learn/courses/30/lessons/133499
