function solution(cards) {
  let answer = 0;

  let cardIndex = 0;
  const openBox = Array.from({ length: cards.length }, (el, key) =>
    key === 0 ? true : false
  );

  const arr = [8];
  const table = new Map();
  let tableIndex = 1;

  for (let i = 0; i < cards.length; ++i) {
    const num = cards[cardIndex] - 1; // 다음 박스 번호
    console.log("num : ", num);
    cardIndex = num;

    if (!openBox[num]) {
      table.set(tableIndex, (table.get(tableIndex) || 0) + 1);
      arr.push(cards[num]);
      console.log("arr : ", arr);

      console.log("openBox[num] : ", openBox[num]);

      openBox[num] = true;
    } else {
      tableIndex++;
      openBox[num] = true;
      // i--;

      for (let j = 1; j < openBox.length; ++j) {
        if (!openBox[j]) {
          cardIndex = j;
          break;
        }
      }
    }
  }
  console.log("table : ", table);
  console.log("openBox : ", openBox);

  return answer;
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
// 12

// https://school.programmers.co.kr/learn/courses/30/lessons/131130
