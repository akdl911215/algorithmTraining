from collections import deque

def bfs(graph, visited, start):
    end = start[1]
    queue = deque([start])
    oil_size = 1

    # Y값에 대해서 ...

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while queue:
        q_n, q_m = queue.popleft()

        for x, y in directions:
            nx, ny = q_n + x, q_m + y

            if 0 <= nx <= len(graph) - 1 and 0 <= ny <= len(graph[0]) - 1 and graph[nx][ny] == 1 and not visited[nx][ny]:
                oil_size += 1
                visited[nx][ny] = True
                queue.append([nx, ny])
                end = ny

    return [start[1], end, oil_size]

def solution(land):

    N = len(land)
    M = len(land[0])
    oil_size_list = [0 for _ in range(M)]
    visited = [[False for _ in range(M)] for _ in range(N)]

    for i in range(N):
        for j in range(M):
            if land[i][j] == 1 and not visited[i][j]:
                visited[i][j] = True
                start, end, oil_size = bfs(land, visited,[i, j])
                for oil_pivot in range(start, end + 1):
                    oil_size_list[oil_pivot] += oil_size

    return max(oil_size_list)

print(
    solution(
        [
            [0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 1, 1]
        ]
    )
)
# 9

print(
    solution(
        [
            [1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1]
        ]
    )
)
# 16

#https://school.programmers.co.kr/learn/courses/30/lessons/250136?language=python3