const solution = (maps) => {
  var answer = [-1];

  const indexList = [];
  // const idx = maps.indexOf(typeof === "number");

  for (let i = 0; i < maps.length; ++i) {
    let num = "";
    for (let j = 0; j < maps[i].length; ++j) {
      const numberConvert = maps[i][j];
      if (
        numberConvert === "1" ||
        numberConvert === "2" ||
        numberConvert === "3" ||
        numberConvert === "4" ||
        numberConvert === "5" ||
        numberConvert === "6" ||
        numberConvert === "7" ||
        numberConvert === "8" ||
        numberConvert === "9"
      ) {
        num += j;
        console.log("num : ", num);
      }
    }
    indexList.push(num);
  }

  console.log("indexList : ", indexList);
  // const arr = []
  // while (idx != -1) {
  //     indexList.push(idx);
  //     idx = maps.indexOf()
  // }

  return answer;
};

// 0 1 2 3 4
// 6 4 6 4
console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1, 1, 27]
// console.log(["XXX","XXX","XXX"]); // [-1]

// https://school.programmers.co.kr/learn/courses/30/lessons/154540
