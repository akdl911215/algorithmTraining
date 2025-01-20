package algorithmStudy.graph.minimumSpanningTree;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Edge implements Comparable<Edge> {
    int src, dest, weight;

    // Constructor
    public Edge(int src, int dest, int weight) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }

    // Compare edges by weight
    public int compareTo(Edge other) {
        return this.weight - other.weight;
    }
}

public class KruskalMST {
    int[] parent, rank;

    // Find the root of a set
    public int find(int node) {
        if (parent[node] != node) {
            parent[node] = find(parent[node]); // Path compression
        }
        return parent[node];
    }

    // Union two sets
    public void union(int u, int v) {
        int rootU = find(u);
        int rootV = find(v);

        if (rootU != rootV) {
            if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
            } else if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
            } else {
                parent[rootV] = rootU;
                rank[rootU]++;
            }
        }
    }

    public void kruskal(int vertices, List<Edge> edges) {
        Collections.sort(edges); // Sort edges by weight
        parent = new int[vertices];
        rank = new int[vertices];

        // Initialize parent and rank
        for (int i = 0; i < vertices; i++) {
            parent[i] = i;
            rank[i] = 0;
        }

        List<Edge> mst = new ArrayList<>();
        int mstWeight = 0;
        for (Edge edge : edges) {
            int u = edge.src;
            int v = edge.dest;

            if (find(u) != find(v)) { // If u and v are in different sets
                union(u, v);
                mst.add(edge);
                mstWeight += edge.weight;
            }
        }

        System.out.print("Edges in the Minimum Spanning Tree: ");
        for (Edge edge: mst) {
            System.out.println("Edge: " + edge.src + " - " + edge.dest + " | Weight: " + edge.weight);
        }
        System.out.println("Total Weight of MST: " + mstWeight);
    }

    public static void main(String[] args) {
        int vertices = 4; // Number of vertices
        List<Edge> edges = new ArrayList<>();

        // Add edges to the graph
        edges.add(new Edge(0, 1, 10));
        edges.add(new Edge(0, 2, 6));
        edges.add(new Edge(0, 3, 5));
        edges.add(new Edge(0, 3, 15));
        edges.add(new Edge(0, 3, 4));

        KruskalMST kruskalMST = new KruskalMST();
        kruskalMST.kruskal(vertices, edges);
    }
}
