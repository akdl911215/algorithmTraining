from collections import deque

def bfs(graph, start):
    N, M = start
    queue = deque([[N, M]])
    oil_size = 1

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while queue:
        q_n, q_m = queue.popleft()

        for x, y in directions:
            nx, ny = q_n + x, q_m + y

            if 0 <= nx <= len(graph) and 0 <= ny <= len(graph[0]) and graph[nx][ny] == 1:
                oil_size += 1
                queue.append([nx, ny])

    return oil_size

def solution(land):

    N = len(land)
    M = len(land[0])

    visited = [[False for _ in range(M)] for _ in range(N)]
    print('visited : ', visited)
    oil_size_list = [0 for _ in range(M)]
    print('oil_size_list : ', oil_size_list)

    for i in range(N):
        for j in range(M):
            if land[i][j] == 1:
                oil_size = bfs(land, [i, j])
                visited[i][j] = True
                oil_size_list[j] += oil_size

    revl = max(oil_size_list)
    print('revl : ' + revl)

    return revl

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

# print(
#     solution(
#         [
#             [1, 0, 1, 0, 1, 1],
#             [1, 0, 1, 0, 0, 0],
#             [1, 0, 1, 0, 0, 1],
#             [1, 0, 0, 1, 0, 0],
#             [1, 0, 0, 1, 0, 1],
#             [1, 0, 0, 0, 0, 0],
#             [1, 1, 1, 1, 1, 1]
#         ]
#     )
# )
# 16

#https://school.programmers.co.kr/learn/courses/30/lessons/250136?language=python3