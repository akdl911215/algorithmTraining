function solution(n, info) {
  let answer = [];

  let apeach = 0;
  const score = info.map((score, index) => {
    if (score) apeach += 10 - index;

    return score ? (10 - index) * 2 : 10 - index;
  });

  const queue = [[0]];
  if (n >= info[0] + 1) queue.push([info[0] + 1]);

  while (queue.length) {
    const scoreList = queue.shift();
    const scoreSum = scoreList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    if (scoreSum === n || scoreList.length === n) {
      const original = answer.map((el, index) => {
        let sum = 0;
        if (info[index]) sum += score[index];

        return sum;
      })[0];
      const originalScore = original ? original : 0;
      console.log(originalScore);
      const newS = scoreList.map((el, index) => {
        let sum = 0;
        if (info[index]) sum += score[index];

        return sum;
      })[0];
      const newScore = newS ? newS : 0;

      console.log("newScore : ", newScore);
      console.log("originalScore : ", originalScore);
      if (newScore > apeach && newScore >= originalScore) {
        console.log("up answer : ", answer);
        answer = scoreList;
        console.log("down answer : ", answer);
      }
    } else if (n >= scoreSum + (info[scoreList.length] + 1)) {
      queue.push([...scoreList, info[scoreList.length] + 1]);
      queue.push([...scoreList, 0]);
    } else {
      queue.push([...scoreList, 0]);
    }
  }

  if (!answer.length) return -1;

  return [
    ...answer,
    Array.from({ length: 10 - answer.length }, () => 0),
    n - answer.length,
  ];
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
// [0,2,2,0,1,0,0,0,0,0,0]

// console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
// [-1]

// https://school.programmers.co.kr/learn/courses/30/lessons/92342
