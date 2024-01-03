function solution(name, yearning, photo) {
  const answer = [];

  const table = new Map();
  for (let i = 0; i < name.length; ++i) table.set(name[i], yearning[i]);

  for (let i = 0; i < photo.length; ++i) {
    let result = 0;
    for (let j = 0; j < photo[i].length; ++j) {
      const score = table.get(photo[i][j]);
      if (score) result += score;
    }

    answer.push(result);
  }

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
// [19, 15, 6]

// https://school.programmers.co.kr/learn/courses/30/lessons/176963?language=javascripts
