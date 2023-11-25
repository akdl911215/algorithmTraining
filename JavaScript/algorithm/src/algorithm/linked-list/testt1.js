function solution(dice) {
  const n = dice.length / 2;
  const outcomes = new Map();

  // 모든 가능한 주사위의 합 조합을 만듭니다.
  function getAllSums(diceSet) {
    console.log("diceSet : ", diceSet);
    const sums = [];
    const [aDice, bDice] = diceSet;
    for (const die1 of diceSet) {
      console.log("die1 : ", die1);
      for (const die2 of diceSet) {
        console.log("die2 : ", die2);
        if (die1 !== die2) {
          for (const face1 of die1) {
            for (const face2 of die2) {
              sums.push(face1 + face2);
            }
          }
        }
      }
    }
    return sums;
  }

  // 가능한 모든 조합에 대해 승리 횟수를 계산합니다.
  function countWins(diceA, diceB) {
    let win = 0;
    let tie = 0;
    let loss = 0;

    for (const sumA of diceA) {
      for (const sumB of diceB) {
        if (sumA > sumB) win++;
        else if (sumA === sumB) tie++;
        else loss++;
      }
    }

    return [win, tie, loss];
  }

  // A의 선택 가능한 주사위 조합을 만듭니다.
  const combinations = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n * 2; j++) {
      combinations.push([i, j]);
    }
  }

  // 각 조합에 대한 승리 횟수를 계산합니다.
  for (const [i, j] of combinations) {
    const diceA = getAllSums([dice[i], dice[j]]);
    const remainingDice = dice.filter((_, index) => index !== i && index !== j);
    const diceB = getAllSums(remainingDice);
    const [win, tie, loss] = countWins(diceA, diceB);
    outcomes.set(`${i + 1},${j + 1}`, win);
  }

  // 가장 승리 횟수가 높은 조합을 찾습니다.
  const maxWins = Math.max(...outcomes.values());
  const bestCombination = [...outcomes.entries()].find(
    ([, wins]) => wins === maxWins
  )[0];

  // 결과를 오름차순 배열로 반환합니다.
  return bestCombination.split(",").map(Number);
}

// 예제 실행
console.log(
  solution([
    [1, 2, 3, 4, 5, 6],
    [3, 3, 3, 3, 4, 4],
    [1, 3, 3, 4, 4, 4],
    [1, 1, 4, 4, 5, 5],
  ])
); // [1, 4]이 출력되어야 합니다.
