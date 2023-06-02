const solution = (array, commands) => {
  return commands.map((command) => {
    const [start, end, pivot] = command;

    return array
      .filter((el, key) => key >= start - 1 && key <= end - 1)
      .sort((a, b) => a - b)[pivot - 1];
  });
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
