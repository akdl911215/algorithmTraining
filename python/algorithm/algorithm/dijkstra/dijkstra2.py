import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    queue = [(0, start)]

    while queue:
        current_dist, current_node = heapq.heappop(queue)
        if current_dist > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node]:
            distance = current_dist  + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))

    return distances

graph = {
    'A': [('B', 2), ('C', 1), ('D', 4)],
    'B': [('A', 2), ('D', 3)],
    'C': [('A', 1), ('D', 5)],
    'D': [('A', 4), ('B', 3), ('C', 5)],
}

print(dijkstra(graph, 'A'))