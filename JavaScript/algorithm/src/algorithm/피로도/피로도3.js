function solution(k, dungeons) {
  let maxDungeonsExplored = 0;

  function exploreDungeons(k, dungeons, explored = 0) {
    maxDungeonsExplored = Math.max(maxDungeonsExplored, explored);

    dungeons.forEach((dungeon, index) => {
      console.log(
        `dungeon[0]:${dungeon[0]}, dungeon[1]:${dungeon[1]}, index:${index}, k:${k}, explored:${explored}`
      );
      console.log(`if (k:${k} >= dungeon[0]:${dungeon[0]})`);
      if (k >= dungeon[0]) {
        const newDungeons = dungeons.slice();
        newDungeons.splice(index, 1);
        console.log("newDungeons : ", newDungeons);
        exploreDungeons(k - dungeon[1], newDungeons, explored + 1);
      }
    });
  }

  exploreDungeons(k, dungeons);
  return maxDungeonsExplored;
}

// 예시
// const k = 80;
// const dungeons = [
//   [80, 20],
//   [50, 40],
//   [30, 10],
// ];
const k = 40;
const dungeons = [
  [30, 30],
  [10, 10],
];
console.log(solution(k, dungeons)); // 출력: 3
