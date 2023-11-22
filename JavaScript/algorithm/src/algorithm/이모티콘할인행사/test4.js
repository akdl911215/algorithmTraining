// 그래프를 인접 리스트로 표현
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// DFS 함수
function dfs(graph, node, visited = new Set()) {
  // 현재 노드를 방문 처리
  visited.add(node);
  console.log(node);

  // 현재 노드의 인접 노드를 순회
  graph[node].forEach((neighbor) => {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  });

  return visited;
}

// 시작 노드 'A'에서 DFS 실행
console.log(dfs(graph, "A"));
