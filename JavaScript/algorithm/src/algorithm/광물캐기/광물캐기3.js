function solution(picks, minerals) {
  let answer = 0;

  const length = Math.ceil(minerals.length / 5);
  const mineralList = minerals.splice(0, picks.reduce((a, b) => a + b) * 5);
  const caseArr = [];

  for (let i = 0; i < length; ++i) {
    const mineralsObj = { diamond: 0, iron: 0, stone: 0 };

    mineralList.splice(0, 5).forEach((mineral) => mineralsObj[mineral]++);

    const { diamond, iron, stone } = mineralsObj;
    caseArr.push([
      diamond + iron + stone,
      diamond * 5 + iron + stone,
      diamond * 25 + iron * 5 + stone,
    ]);
  }

  caseArr
    .sort((a, b) => b[2] - a[2])
    .forEach((value) => {
      const [diamond, iron, stone] = picks;

      if (diamond > 0) {
        picks[0]--;
        answer += value[0];
        return;
      }

      if (iron > 0) {
        picks[1]--;
        answer += value[1];
        return;
      }

      if (stone > 0) {
        picks[2]--;
        answer += value[2];
        return;
      }
    });

  return answer;
}

console.log(
  solution(
    [1, 3, 2],
    [
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "diamond",
      "iron",
      "stone",
    ]
  )
);
// 12

console.log(
  solution(
    [0, 1, 1],
    [
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "iron",
      "iron",
      "iron",
      "diamond",
    ]
  )
);
// 50
