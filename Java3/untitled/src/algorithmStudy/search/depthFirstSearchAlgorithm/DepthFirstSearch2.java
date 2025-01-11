package algorithmStudy.search.depthFirstSearchAlgorithm;

import java.util.*;

public class DepthFirstSearch2 {

    private static Map<Integer, List<Integer>> graph = new HashMap<>();

    public static void main(String[] args) {
        addEdge(1, 2);
        addEdge(1, 3);
        addEdge(2, 4);
        addEdge(2, 5);
        addEdge(3, 6);
        addEdge(3, 7);

        System.out.println("DFS Pre-order Traversal starting from node 1: ");
        dfsPreOrder(1);
    }

    public static void addEdge(int u, int v) {
        graph.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
        graph.computeIfAbsent(v, k -> new ArrayList<>()).add(u);
    }

    public static void dfsPreOrder(int start) {
        Set<Integer> visited = new HashSet<>();
        Stack<Integer> stack = new Stack<>();
        stack.push(start);

        while (!stack.isEmpty()) {
            int node = stack.pop();

            if (!visited.contains(node)) {
                System.out.println(node + " ");
                visited.add(node);
            }

            for (int i = graph.get(node).size() - 1; i >= 0; i--) {
                int neighbor = graph.get(node).get(i);
                if (!visited.contains(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}
