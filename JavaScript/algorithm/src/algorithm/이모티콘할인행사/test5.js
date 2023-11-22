// 그래프를 인접 리스트로 표현
const graph = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0, 4],
  3: [1, 5],
  4: [1, 2],
  5: [3],
};

// DFS 함수
function dfs(node, visited) {
  // 현재 노드를 방문 처리
  visited[node] = true;
  console.log(node);

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  graph[node].forEach((neighbor) => {
    if (!visited[neighbor]) {
      dfs(neighbor, visited);
    }
  });
}

// 방문한 노드를 추적하기 위한 객체
const visited = {};

// 정의된 그래프의 노드 수만큼 false로 초기화
Object.keys(graph).forEach((node) => {
  visited[node] = false;
});

// 정의된 그래프에서 0번 노드부터 DFS 실행
dfs(0, visited);
