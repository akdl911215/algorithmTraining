function solution(picks, minerals) {
  let answer = 0;

  let len = Math.ceil(minerals.length / 5);
  let maxLen = picks.reduce((a, b) => a + b);

  let arr = [];
  if (maxLen === 0) return 0;

  minerals = minerals.splice(0, maxLen * 5);

  for (let i = 0; i < len; ++i) {
    let obj = { diamond: 0, iron: 0, stone: 0 };
    minerals.splice(0, 5).map((mineral) => {
      obj[mineral]++;
    });

    arr.push([
      obj.diamond + obj.iron + obj.stone,
      obj.diamond * 5 + obj.iron + obj.stone,
      obj.diamond * 25 + obj.iron * 5 + obj.stone,
    ]);
  }

  console.log("arr : ", arr);
  arr.sort((a, b) => b[2] - a[2]);
  arr.map((value) => {
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

// console.log(
//   solution(
//     [0, 1, 1],
//     [
//       "diamond",
//       "diamond",
//       "diamond",
//       "diamond",
//       "diamond",
//       "iron",
//       "iron",
//       "iron",
//       "iron",
//       "iron",
//       "diamond",
//     ]
//   )
// );
// 50
