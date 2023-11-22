const discount = [10, 20, 30, 40];
// const emoticons = [1300, 1500, 1600, 4900];
const emoticons = [7000, 9000];
let result = [];
const arr = [];

function dfs(emoticons, result) {
  console.log(`first emoticons: ${emoticons}, result : `, result);
  // 5) 이모티콘이 없으면 탐색 종료
  if (emoticons.length < 1) {
    // 6) arr 배열에 탐색한 결괏값을 추가한다.
    arr.push(result);
    return;
  }

  // 7) 할인율 개수만큼 반복한다.
  for (let i = 0; i < discount.length; i++) {
    // 8) 이모티콘 개수를 하나씩 줄이고, 줄였던 이모티콘의 할인율과 원가를 result 에 담는다.
    const emo = emoticons.slice(1);
    // console.log("emoticons : ", emoticons);
    console.log("emo : ", emo);

    const dc = discount[i];
    console.log("dc : ", dc, "/ i : ", i);
    const newResult = [...result, [dc, emoticons[0]]];
    console.log("result : ", result);
    console.log("--------------------------");
    dfs(emo, newResult);
  }
}

// 9) 최초 dfs 함수 실행
dfs(emoticons, []);
