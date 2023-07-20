function solution(n) {
  var answer = 0;

  const hex = n.toString(2);

  let check = 0;
  for (let i = 0; i < hex.length; ++i) if (Number(hex[i]) === 1) ++check;

  Loop1: for (let i = n + 1; ; ++i) {
    let check2 = 0;
    const compareHex = i.toString(2);
    Loop2: for (let j = 0; j < compareHex.length; ++j) {
      if (Number(compareHex[j]) === 1) ++check2;
    }

    if (check === check2) {
      answer = i;
      break Loop1;
    }
  }

  return answer;
}

console.log(solution(78));
// 83

console.log(solution(15));
// 23

// https://school.programmers.co.kr/learn/courses/30/lessons/12911
