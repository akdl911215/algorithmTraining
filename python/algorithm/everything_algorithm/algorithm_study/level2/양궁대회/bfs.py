from collections import deque


def bfs(graph, start):
    visited = set()
    queue = deque([start])

    while queue:
        vertex = queue.popleft()

        if vertex not in visited:
            visited.add(vertex)
            print(vertex, end=" ")

            # 인접 노드를 큐에 추가
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    queue.append(neighbor)


# 그래프 예시 (인접 리스트 방식)
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

bfs(graph, 'A')