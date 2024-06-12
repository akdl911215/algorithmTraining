from collections import deque

def bfs(graph, start_node):
    visited = []
    queue = deque([start_node])

    while queue:
        node = queue.popleft()

        if node not in visited:
            visited.append(node)

            for neighbor in graph[node]:
                if neighbor not in visited:
                    queue.append(neighbor)

    return visited

graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}
print(bfs(graph, 0))