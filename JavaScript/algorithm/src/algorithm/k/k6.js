const solution = (a, cs) => {
  return cs.map((c) => a.slice(c[0] - 1, c[1]).sort((a, b) => a - b)[c[2] - 1]);
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
