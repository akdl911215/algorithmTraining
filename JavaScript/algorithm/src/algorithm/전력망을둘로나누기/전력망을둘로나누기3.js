function solution(n, wires) {
  let answer = 0;

  for (let i = 0; i < wires.length; ++i) {
    const adjacencyList = Array.from({ length: n + 1 }, () => []);
    const [first, second] = wires[i];

    for (let j = 0; j < wires.length; ++j) {
      const [third, fourth] = wires[j];

      if (first !== third && second !== fourth) {
        adjacencyList[third].push(fourth);
        adjacencyList[fourth].push(third);

        const visitedArr = Array.from({ length: n + 1 }, () => false);
        const size = calculateSize(first, adjacencyList, visitedArr);
      }
    }
  }

  function calculateSize(referencePoint, connectionCheck, visitedCheck) {
    let size = 1;
    visitedCheck[referencePoint] = true;
    // const num = connectionCheck[referencePoint];

    // console.log("visitedCheck[num] : ", visitedCheck[num]);
    // if (!visitedCheck[num]) {
    //
    // }

    return size;
  }

  return answer;
}

console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
// 0

// 예시
// console.log(
//   solution(9, [
//     [1, 3],
//     [2, 3],
//     [3, 4],
//     [4, 5],
//     [4, 6],
//     [4, 7],
//     [7, 8],
//     [7, 9],
//   ])
// );
// 예상 결과: 3

// https://school.programmers.co.kr/learn/courses/30/lessons/86971
