package algorithmStudy.search.breathFirstSearchAlgorithm;

import java.util.*;

public class BreathFirstSearch {

    // Graph represented as an adjacency list
    private static Map<Integer, List<Integer>> graph = new HashMap<>();

    public static void main(String[] args) {
        // Add edgs to the graph
        addEdge(1, 2);
        addEdge(1, 3);
        addEdge(2, 4);
        addEdge(2, 5);
        addEdge(3, 6);
        addEdge(3, 7);

        System.out.print("BFS Traversal starting from node 1: ");
        bfs(1);
        System.out.println("");
    }

    // Method to add an edge to the graph
    public static void addEdge(int u, int v) {
        graph.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
        graph.computeIfAbsent(v, k -> new ArrayList<>()).add(u);
    }

    // BFS method using a queue
    public static void bfs(int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start); // Add the start node to the queue

        while (!queue.isEmpty()) {
            int node = queue.poll(); // Remove a node from the queue

            if (!visited.contains(node)) {
                System.out.print(node + " "); // Print the node
                visited.add(node);

                // Add all unvisited neighbors to the queue
                for (int neighbor : graph.get(node)) {
                    if (!visited.contains(neighbor)) {
                        queue.offer(neighbor);
                    }
                }
            }
        }
    }
}
