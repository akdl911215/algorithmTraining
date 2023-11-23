const arr = [];
const discount = [10, 20, 30, 40];

// 4) 깊이 탐색을 통해 가능한 가짓수를 탐색한다. result : 이모티콘별 할인율 적용 값
function dfs(emoticons, result) {
  // 5) 이모티콘이 없으면 탐색 종료
  if (emoticons.length < 1) {
    // 6) arr 배열에 탐색한 결괏값을 추가한다.
    arr.push(result);
    console.log("arr : ", arr);
    return;
  }

  // 7) 할인율 개수만큼 반복한다.
  for (let i = 0; i < discount.length; i++) {
    // 8) 이모티콘 개수를 하나씩 줄이고, 줄였던 이모티콘의 할인율과 원가를 result 에 담는다.
    const emo = emoticons.slice(1);
    console.log("emoticons : ", emoticons, " / i : ", i);
    console.log("emo : ", emo);

    const newResult = [...result, [discount[i], emoticons[0]]];
    console.log("newResult : ", newResult);
    console.log("--------------------");
    dfs(emo, newResult);
  }
}

// 9) 최초 dfs 함수 실행
dfs([7000, 9000], []);
console.log("arr : ", arr);
