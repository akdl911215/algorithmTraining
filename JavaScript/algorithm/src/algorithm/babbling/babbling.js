// 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다.
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을
// 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는
// 것을 어려워합니다.문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의
// 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// ["aya", "yee", "u", "maa"] result : 1
// ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"] result : 2
function solution(babbling) {
  let answer = 0;

  for (let i = 0; i < babbling.length; ++i) {
    console.log(i);
    console.log(babbling[i]);

    let tmp = babbling[i];
    console.log("tmp 할당 : ", tmp);
    const aya = tmp.indexOf("aya");
    console.log("aya: ", aya);
    if (aya !== -1) {
      // tmp = tmp.slice(aya + 3);
      tmp = tmp.replace("aya", "");
      console.log("aya tmp: ", tmp);
      console.log("tmp : ", tmp);
    }

    const ye = tmp.indexOf("ye");
    console.log("ye : ", ye);
    if (ye !== -1) {
      // tmp = tmp.slice(ye + 2);
      tmp = tmp.replace("ye", "");
      console.log("ye tmp: ", tmp);
      console.log("tmp : ", tmp);
    }

    const woo = tmp.indexOf("woo");
    console.log("woo : ", woo);
    if (woo !== -1) {
      // tmp = tmp.slice(woo + 3);
      tmp = tmp.replace("woo", "");
      console.log("woo tmp: ", tmp);
      console.log("tmp : ", tmp);
    }

    const ma = tmp.indexOf("ma");
    console.log("ma : ", ma);
    if (ma !== -1) {
      // tmp = tmp.slice(ma + 2);
      tmp = tmp.replace("ma", "");
      console.log("ma tmp: ", tmp);
      console.log("tmp : ", tmp);
    }

    if (tmp.length === 0) {
      console.log("tmp.length : ", tmp.length);
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
const babbling = ["asadasayafe", "mayeayaye", "yeye", "yemawoo", "ayaayaa"];
// const babbling = ["mayeayaye"];
solution(babbling);
