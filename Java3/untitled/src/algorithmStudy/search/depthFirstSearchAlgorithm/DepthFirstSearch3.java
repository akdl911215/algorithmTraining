package algorithmStudy.search.depthFirstSearchAlgorithm;

import java.util.ArrayList;

public class DepthFirstSearch3 {

    // 그래프를 인접 리스트로 표현
    static ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
    static boolean[] visited; // 방문 여부를 체크할 배열

    public static void main(String[] args) {
        // 그래프 초기화 (노드 5개)
        int n = 5;
        visited = new boolean[n];

        // 인접 리스트 초기화
        for (int i = 0; i < 5; ++i) {
            graph.add(new ArrayList<>());
        }

        // 간선 추가
        graph.get(0).add(1); // 0 -- 1
        graph.get(0).add(3); // 0 -- 3
        graph.get(1).add(0); // 1 -- 0
        graph.get(1).add(2); // 1 -- 2
        graph.get(1).add(4); // 1 -- 4
        graph.get(2).add(1); // 2 -- 1
        graph.get(3).add(0); // 3 -- 0
        graph.get(3).add(4); // 3 -- 4
        graph.get(4).add(1); // 4 -- 1
        graph.get(4).add(3); // 4 -- 3

        // DFS 시작 (시작 노드: 0)
        System.out.println("DFS 탐색 순서: ");
        dfs(0);
    }

    // DFS 함수 (재귀 구현)
    static void dfs(int node) {
        // 현재 노드 방문 처리
        visited[node] = true;
        System.out.print(node + " "); // 현재 노드 출력

        // 현재 노드와 연결된 모든 노드를 탐색
        for (int neighbor : graph.get(node)) {
            // 방문하지 않은 노드라면 DFS 재귀 호출
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }
}
