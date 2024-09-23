function solution(dirs) {
  const moveDirections = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  };

  const set = new Set();
  let x = 0;
  let y = 0;
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const [dx, dy] = moveDirections[dir];

    const nx = dx + x;
    const ny = dy + y;
    if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) {
      const sort = [
        [x, y],
        [nx, ny],
      ].sort((a, b) => {
        if (a[0] === b[0]) {
          return a[1] - b[1];
        } else {
          return a[0] - b[0];
        }
      });
      sort.flat().join(",");

      set.add(`${sort}`);
      x = nx;
      y = ny;
    }
  }

  return set.size;
}

console.log(solution("ULURRDLLU"));
// 7

console.log(solution("LULLLLLLU"));
// 7

// https://school.programmers.co.kr/learn/courses/30/lessons/49994
