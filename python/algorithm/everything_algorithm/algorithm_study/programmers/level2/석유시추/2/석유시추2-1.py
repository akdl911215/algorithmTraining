from collections import deque

def bfs(graph, start):
    print()

    return 0

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

    return 0

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