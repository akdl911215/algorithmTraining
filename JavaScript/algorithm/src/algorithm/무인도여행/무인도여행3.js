const solution = (maps) => {
  var answer = [-1];

  const indexList = maps.map((el) => [...el]);
  console.log("indexList : ", indexList);

  const indexList2 = [];
  let sum = 0;
  for (let i = 0; i < indexList.length; ++i) {
    let count = 0;
    for (let j = 0; j < indexList[i].length; ++j) {
      if (indexList[i][j] !== "X") {
        // 상
        if (i !== 0 && indexList[i - 1][j] !== "X") {
          ++count;
        }

        // 하
        if (i !== indexList.length - 1 && indexList[i + 1][j] !== "X") {
          ++count;
        }

        // 좌
        if (j !== 0 && indexList[i][j - 1] !== "X") {
          ++count;
        }

        // 우
        if (j !== indexList[i].length - 1 && indexList[i][j + 1] !== "X") {
          ++count;
        }

        // 맨 윗줄이면서 아랫줄만 탐색
        if (i === 0 && indexList[i + 1][j] !== "X") {
          ++count;
        }

        // 맨 윗줄이면서 좌측만 탐색
        if (i === 0 && indexList[i][j - 1] !== "X") {
          ++count;
        }

        // 맨 아랫줄이면서 윗줄만 탐색
        if (i === indexList[i].length - 1 && indexList[i - 1][j] !== "X") {
          ++count;
        }

        // 맨 아랫줄이면서 좌측만 탐색
        if (i === indexList[i].length - 1 && indexList[i][j + 1] !== "X") {
          ++count;
        }
        if (count >= 1) {
          console.log("count : ", count);
          console.log("if count indexList[i][j : ", indexList[i][j]);
          sum += Number(indexList[i][j]);
        }
      }
    }
    if (count === 0) {
      indexList2.push(sum);
    }
  }

  console.log("indexList2 : ", indexList2);

  return answer;
};

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1, 1, 27]
// console.log(["XXX","XXX","XXX"]); // [-1]

// https://school.programmers.co.kr/learn/courses/30/lessons/154540
