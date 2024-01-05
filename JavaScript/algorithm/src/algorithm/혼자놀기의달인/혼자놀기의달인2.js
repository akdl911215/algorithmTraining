function solution(cards) {
  let answer = 0;

  let cardIndex = 0;
  const openBox = Array.from({ length: cards.length }, (el, key) =>
    key === 0 ? true : false
  );

  const table = new Map();
  let tableIndex = 1;
  table.set(tableIndex, 1);
  let whileIndex = 0;

  while (whileIndex < cards.length - 1) {
    const num = cards[cardIndex] - 1; // 다음 박스 번호
    cardIndex = num;

    if (!openBox[num]) {
      table.set(tableIndex, (table.get(tableIndex) || 0) + 1);
      whileIndex++;
    } else {
      tableIndex++;

      for (let j = 1; j < openBox.length; ++j) {
        if (!openBox[j]) {
          cardIndex = j;
          break;
        }
      }
    }

    openBox[num] = true;
  }

  const arr = [...table];
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      answer = Math.max(answer, arr[i][1] * arr[j][1]);
    }
  }

  return answer;
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
// 12

// https://school.programmers.co.kr/learn/courses/30/lessons/131130
