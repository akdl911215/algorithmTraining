function solution(n, info) {
  let bestShot = [];
  let maxScoreDiff = -1;

  function backtrack(shot, arrow, index) {
    if (index > 10 || arrow === 0) {
      let ryanScore = 0,
        apeachScore = 0;
      for (let i = 0; i < 10; i++) {
        if (info[i] === 0 && shot[i] === 0) continue;
        if (info[i] < shot[i]) ryanScore += 10 - i;
        else apeachScore += 10 - i;
      }

      let scoreDiff = ryanScore - apeachScore;
      if (scoreDiff > maxScoreDiff) {
        maxScoreDiff = scoreDiff;
        bestShot = shot.slice();
        if (arrow > 0) bestShot[10] = arrow; // Remaining arrows to 0 point
      }
      return;
    }

    if (arrow > info[index]) {
      shot[index] = info[index] + 1; // To win the score
      backtrack(shot, arrow - info[index] - 1, index + 1);
      shot[index] = 0;
    }
    backtrack(shot, arrow, index + 1); // Skip this score
  }

  backtrack(new Array(11).fill(0), n, 0);
  return maxScoreDiff === -1 ? [-1] : bestShot;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
