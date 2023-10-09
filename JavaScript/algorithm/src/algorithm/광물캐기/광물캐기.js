function solution(picks, minerals) {
  let answer = 0;

  let count = 0;
  let usage = 5;
  let numberOfTools = picks.shift();
  let tool = "dia";
  while (!!minerals.length) {
    if (usage < 1) {
      numberOfTools--;
      usage = 5;
    }
    if (numberOfTools < 1) {
      numberOfTools = picks.shift();
      count++;
    }

    if (count === 1) tool = "iron";
    if (count === 2) tool = "stone";

    const mineral = minerals.shift();
    usage--;

    answer += mining(mineral, tool);
  }

  return answer;
}

function mining(mineral, tool) {
  let fatigueAsWell = 1;
  if (mineral === "diamond") {
    if (tool === "iron") {
      fatigueAsWell = 5;
    }

    if (tool === "stone") {
      fatigueAsWell = 25;
    }
  }

  if (mineral === "iron") {
    if (tool === "stone") {
      fatigueAsWell = 5;
    }
  }

  return fatigueAsWell;
}

// console.log(
//   solution(
//     [1, 3, 2],
//     [
//       "diamond",
//       "diamond",
//       "diamond",
//       "iron",
//       "iron",
//       "diamond",
//       "iron",
//       "stone",
//     ]
//   )
// );
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

// https://school.programmers.co.kr/learn/courses/30/lessons/172927
