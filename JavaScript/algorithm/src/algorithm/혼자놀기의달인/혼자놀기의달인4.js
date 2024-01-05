function solution(cards) {
  const openBox = Array.from({ length: cards.length }, (el, key) =>
    key === 0 ? true : false
  );

  const table = new Map();
  let tableIndex = 1;
  let cardIndex = 0;
  table.set(tableIndex, 1);

  while (openBox.includes(false)) {
    const num = cards[cardIndex] - 1; // 다음 박스 번호
    cardIndex = num;

    if (!openBox[num]) {
      table.set(tableIndex, (table.get(tableIndex) || 0) + 1);
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
  arr.some((a, b) => b[1] - a[1]);

  return arr[0][1] * arr[1][1];
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
// 12

// https://school.programmers.co.kr/learn/courses/30/lessons/131130
