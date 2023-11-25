function solution(coin, cards) {
  let answer = 0;

  const n = cards.length;
  const handCardLists = cards.slice(0, n / 3);
  const cardList = cards.slice(n / 3);

  const nPlusOne = (card1, card2, n) => card1 + card2 === n + 1;

  while (cardList.length > 0 && coin > 0) {
    const draw = cardList.splice(0, 2);
    let usedCoin = 0;

    for (let i = 0; i < handCardLists.length; ++i) {
      for (let j = 0; j < draw.length; ++j) {
        const bool = nPlusOne(handCardLists[i], draw[j], n);

        if (bool) {
          handCardLists.splice(i, 1);
          usedCoin++;
          break;
        }
      }

      if (usedCoin > 0) break;
    }

    if (usedCoin === 0) {
      handCardLists.push(draw[0]);
      usedCoin++;
    }

    coin -= usedCoin;
    ++answer;
  }

  return answer;
}
console.log(solution(4, [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 3]));
// 5
