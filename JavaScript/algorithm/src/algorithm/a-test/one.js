function solution(s1, s2) {
  var answer = "";

  let shotWord = "";
  let longWord = "";

  const bool = (s1 > s2) - (s1 < s2);
  console.log("aaaaaa : ", bool);
  if (bool === 1) {
    console.log("typof bool : ", typeof bool);
    shotWord = s1;
    longWord = s2;
  } else {
    console.log("typof bool : ", typeof bool);
    shotWord = s2;
    longWord = s1;
  }
  const wordLeng = Math.min(s1.length, s2.length);
  console.log("wordLeng : ", wordLeng);

  let check2 = 0;
  for (let i = 1; i <= wordLeng.length; ++i) {
    // const tmp = shotWord.slice(`-${i}`);
    // const tmp2 = longWord.indexOf(tmp);
    // if (tmp2 !== -1) {
    //   check2++;
    // }
    let sub = "";
    let sub2 = "";
  }

  const result = longWord.slice(check2);

  console.log("ss : ", shotWord + result);

  return answer;
}

// const s1 = "AxA";
// const s2 = "AyA";

const s1 = "xyZA";
const s2 = "ABCxy";
// const s1 = "ABCxy";
// const s2 = "xyZA";
solution(s1, s2);

// 입력값 〉
// "xyZA", "ABCxy"
// 기댓값 〉
// "ABCxyZA"
