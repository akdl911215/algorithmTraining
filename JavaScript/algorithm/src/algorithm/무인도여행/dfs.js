const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const DFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue 이기 때문데 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      console.log("while node : ", node);

      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      console.log("while visited : ", visited);
      console.log("needVisit : ", needVisit);

      needVisit = [...graph[node], ...needVisit];
      console.log("end needVisit : ", needVisit);
      console.log("----------------------------");
    }
  }

  return visited;
};

console.log(DFS(graph, "A"));

// https://velog.io/@sangbooom/JS-BFS-DFS
