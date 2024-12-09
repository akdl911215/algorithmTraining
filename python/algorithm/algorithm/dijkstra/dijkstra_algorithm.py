import heapq

def dijkstra(graph, start):
    # Initialize distances
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    # Priority queue to process the nodes
    pq = [(0, start)]  # (distance, node)

    while pq:
        current_distance, current_node = heapq.heappop(pq)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node]:
            distance = current_distance + weight

            # If a shorter path to the neighbor is found
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return distances

# Example graph: {node: [(neighbor, weight), ...]}
graph = {
    'A': [('B', 10), ('C', 20)],
    'B': [('A', 10), ('D', 5)],
    'C': [('A', 20), ('D', 1)],
    'D': [('B', 5), ('C', 1)]
}

# Find shortest paths from 'A'
result = dijkstra(graph, 'A')
print(result)


