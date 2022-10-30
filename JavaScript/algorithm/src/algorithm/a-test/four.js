function solution(N, relation, dirname) {
  let answer = 0;

  // 1, 2, 5
  // 1, 2, 6
  // 1, 3, 7
  // 1, 4
  // 2, 5
  // 2, 6
  // 3, 7
  console.log("relation : ", relation);
  // console.log("relation[0] : ", relation[0]);
  // console.log("relation[0][0] : ", relation[0][0]);
  // console.log("relation[0][1] : ", relation[0][1]);
  // console.log("relation[1][0] : ", relation[1][0]);
  console.log("relation.length : ", relation.length);
  for (let i = 0; i < relation.length; ++i) {
    console.log("check");
    console.log(":: ", relation[i].length - 1);
    for (let j = 0; j < relation[i].length; ++j) {
      console.log("relation[i][j]  : ", relation[i][j]);
      console.log("relation[i][j + 1]  : ", relation[i][j + 1]);
      // relation[i][j + 1] === relation[i + 1][j];
    }
  }

  return answer;
}
const N = 7;
const relation = [
  [1, 2],
  [2, 5],
  [2, 6],
  [1, 3],
  [1, 4],
  [3, 7],
];
const dirname = ["root", "abcd", "cs", "hello", "etc", "hello", "solution"];

solution(N, relation, dirname);
// result = 16
