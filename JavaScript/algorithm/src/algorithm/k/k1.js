const solution = (array, commands) => {
  const answer = [];

  commands.map((el, key) => {
    const arr = [];
    for (let i = el[0] - 1; i < el[1]; ++i) {
      arr.push(array[i]);
    }
    arr.sort((a, b) => a - b);

    answer.push(arr[el[2] - 1]);
  });

  return answer;
};

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
// [5, 6, 3]
