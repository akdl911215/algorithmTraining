import heapq

def dijkstra(graph, start):
    dist = { node: float('inf') for node in graph }
    dist[start] = 0
    pq = [(0, start)]

    while pq:
        current_dist, current_node = heapq.heappop(pq)

        dist_current_node = dist[current_node]
        if current_dist > dist_current_node:
            continue

        for neighbor, weight in graph[current_node]:
            distance = current_dist + weight

            dist_neighbor = dist[neighbor]
            if distance < dist_neighbor:
                dist[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return dist
graph = {
    'A': [('B', 1), ('D', 4)],
    'B': [('C', 2), ('D', 3)],
    'C': [],
    'D': []
}
start = 'A'
result = dijkstra(graph, start)
print(result)