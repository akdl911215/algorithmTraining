package algorithmStudy.search.depthFirstSearchAlgorithm;

import java.util.*;

public class DepthFirstSearch {

    // Graph represented as an adjacency list
    private static Map<Integer, List<Integer>> graph = new HashMap<>();

    public static void main (String[] args) {
        // Add edges to the graph
        addEdge(1, 2);
        addEdge(1, 3);
        addEdge(2, 4);
        addEdge(2, 5);
        addEdge(3, 6);
        addEdge(3, 7);

        System.out.println("DFS Traversal starting from node 1: ");
        dfs(1);
    }

    // Method to add an edge to the graph
    public static void addEdge(int u, int v) {
        graph.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
        graph.computeIfAbsent(v, k -> new ArrayList<>()).add(u);
    }

    // DFS method using a stack
    public static void dfs(int start) {
        Set<Integer> visited = new HashSet<>();
        Stack<Integer> stack = new Stack<>();
        stack.push(start);

        while (!stack.isEmpty()) {
            int node = stack.pop();

            if (!visited.contains(node)) {
                System.out.println(node + " ");
                visited.add(node);

                // Push all unvisited neighbors onto the stack
                for (int neighbor : graph.get(node)) {
                    if (!visited.contains(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }
}
