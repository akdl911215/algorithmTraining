function solution(dirs) {
  const moveDirections = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  };

  let count = 1;
  const set = new Set();
  const pivot = [0, 0];
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const direction = moveDirections[dir];

    const newX = (pivot[0] += direction[0]);
    const newY = (pivot[1] += direction[1]);
    if (-5 <= newX && newX <= 5 && -5 <= newY && newY <= 5) {
      const forwardPivot = `${newX}, ${newY}`;
      const pivotExist = set.has(forwardPivot);
      if (!pivotExist) {
        set.add(forwardPivot);
        count++;
      }
    }
  }

  return count;
}

console.log(solution("ULURRDLLU"));
// 7

console.log(solution("LULLLLLLU"));
// 7

// https://school.programmers.co.kr/learn/courses/30/lessons/49994
