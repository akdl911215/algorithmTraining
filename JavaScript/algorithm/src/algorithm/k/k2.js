const solution = (array, commands) => {
  const answer = [];

  commands.map((command) => {
    const [start, end, pivot] = command;

    answer.push(
      array
        .filter((el, key) => key >= start - 1 && key <= end - 1)
        .sort((a, b) => a - b)[pivot - 1]
    );
  });

  return answer;
};

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
// [5, 6, 3]
