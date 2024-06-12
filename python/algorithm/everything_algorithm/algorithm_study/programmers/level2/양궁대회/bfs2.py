from collections import deque


def bfs(graph, start):
    visited = set()
    queue = deque([start])
    print(queue)
    answer = [start]

    while queue:
        element = queue.popleft()

        if element not in visited:
            visited.add(element)

            for el in graph[element]:
                if el not in visited:
                    queue.append(el)


graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print(bfs(graph, 'A'))