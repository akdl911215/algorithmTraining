function solution(n, wires) {
  let minDifference = n;

  const calculateSize = (node, visited, adjacencyList) => {
    visited[node] = true;
    let size = 1;

    console.log("adjacencyList[node] : ", adjacencyList[node]);
    for (let neighbor of adjacencyList[node]) {
      console.log("neighbor : ", neighbor);

      console.log("!visited[neighbor] : ", !visited[neighbor]);
      if (!visited[neighbor]) {
        size += calculateSize(neighbor, visited, adjacencyList);
      }
    }

    return size;
  };

  // n: 4 // [[1,2],[2,3],[3,4]]
  for (let [a, b] of wires) {
    // 인접 리스트 생성
    const adjacencyList = Array.from({ length: n + 1 }, () => []);
    for (let [x, y] of wires) {
      if (x !== a || y !== b) {
        adjacencyList[x].push(y);
        adjacencyList[y].push(x);
      }
    }

    // 한 전선을 끊고 트리 크기 계산
    let visited = Array(n + 1).fill(false);
    let size = calculateSize(a, visited, adjacencyList);

    // 최소 차이 갱신
    minDifference = Math.min(minDifference, Math.abs(n - 2 * size));
  }

  return minDifference;
}

// 예시
// console.log(
//   solution(9, [
//     [1, 3],
//     [2, 3],
//     [3, 4],
//     [4, 5],
//     [4, 6],
//     [4, 7],
//     [7, 8],
//     [7, 9],
//   ])
// );
// 예상 결과: 3

console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
// 0
