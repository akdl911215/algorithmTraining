function func1(first, second) {
  let check2 = 0;
  for (let i = 1; i <= first.length; ++i) {
    const tmp = first.slice(`-${i}`);

    const tmp2 = second.indexOf(tmp);
    if (tmp2 !== -1) {
      check2++;
    }
  }

  return first + second.slice(check2);
}
function func2(first, second) {
  let check2 = 0;
  for (let i = 1; i <= first.length; ++i) {
    const tmp = first.slice(`-${i}`);

    const tmp2 = second.indexOf(tmp);
    if (tmp2 !== -1) {
      check2++;
    }
  }

  return first + second.slice(check2);
}

function solution(s1, s2) {
  let answer = "";

  const first = func1(s1, s2);
  const second = func2(s2, s1);

  console.log("first ; ", first);
  console.log("second :  ", second);
  const bool = (first > second) - (first < second);

  if (bool === 1) answer = second;
  else answer = first;

  console.log("answer : ", answer);
  return answer;
}

// const s1 = "xyZA";
// const s2 = "ABCxy";

const s1 = "AxA";
const s2 = "AyA";
solution(s1, s2);

// 입력값 〉
// "xyZA", "ABCxy"
// 기댓값 〉
// "ABCxyZA"
