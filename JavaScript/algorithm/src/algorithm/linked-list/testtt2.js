function solution(coin, cards) {
  let answer = 0;
  const n = cards.length;
  let hand = cards.slice(0, n / 3); // 손에 든 카드
  let deck = cards.slice(n / 3); // 남은 카드 더미

  while (deck.length > 0) {
    const drawn = deck.splice(0, 2); // 카드 두 장 뽑기
    let canContinue = false; // 이번 라운드를 계속할 수 있는지

    // 현재 손에 있는 카드와 뽑은 카드를 조합하여 n+1을 만들 수 있는지 확인
    for (let i = 0; i < hand.length; i++) {
      for (let j = 0; j < drawn.length; j++) {
        if (hand[i] + drawn[j] === n + 1) {
          if (coin > 0 || i !== j) {
            hand.splice(i, 1); // 카드 사용
            coin--; // 동전 사용
            canContinue = true;
            break;
          }
        }
      }
      if (canContinue) break;
    }

    // n+1을 만들 수 없고 동전이 있다면, 하나의 카드를 구매
    if (!canContinue && coin > 0) {
      hand.push(drawn[0]); // 첫 번째 뽑은 카드를 구매
      coin--; // 동전 사용
      canContinue = true;
    }

    if (canContinue) answer++; // 다음 라운드로 진행
    else break; // n+1을 만들 수 없으므로 게임 종료
  }

  return answer;
}

console.log(solution(4, [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4]));
