const solution = (maps) => {
  const result = [];
  console.log("maps: ", maps);
  console.log("maps[0] : ", maps[0]);
  const [R, C] = [maps.length, maps[0].length];
  console.log(`R: ${R}, C: ${C}`);
  const visited = Array.from({ length: R }, () => Array(C).fill(0));
  const move = [
    [0, 1], // 우
    [0, -1], // 좌
    [1, 0], // 하
    [-1, 0], // 상
  ];

  const bfs = (a, b) => {
    let cnt = 0;
    const q = [[a, b]];
    console.log("q : ", q);
    cnt += parseInt(maps[a][b]);
    visited[a][b] = 1;

    while (q.length) {
      const [r, c] = q.shift();
      console.log(`r: ${r}, c: ${c}`);
      for (let i = 0; i < 4; i++) {
        const nr = r + move[i][0];
        console.log("nr : ", nr);

        const nc = c + move[i][1];
        console.log("nc : ", nc);
        if (
          nr >= 0 && // 상
          nc >= 0 && // 좌
          nr < R && // 하
          nc < C && // 우
          !visited[nr][nc] &&
          maps[nr][nc] !== "X"
        ) {
          console.log("if ", `: nr:${nr}, nc:${nc}`);
          console.log("if visited[nr][nc] : ", visited[nr][nc]);
          visited[nr][nc] = 1;
          console.log("visited[nr][nc] :: ", visited[nr][nc]);
          cnt += parseInt(maps[nr][nc]);
          q.push([nr, nc]);
        }
      }
    }
    result.push(cnt);
  };

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") bfs(i, j);
    }
  }

  if (result.length === 0) return [-1];

  return result.sort((a, b) => a - b);
};

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1, 1, 27]
