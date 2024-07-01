from collections import deque

def bfs(graph, time_check, start):
    [sx, sy] = start

    directions = [(0, -1), (0, 1), (-1, 0), (1, 0)]

    queue = deque([[sx, sy]])
    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx, ny = x + directions[i][0], y + directions[i][1]
            if 0 <= nx <= len(graph) - 1 and 0 <= ny <= len(graph[0]) and graph[nx][ny] != 'X':
                time_check += 1


def solution(maps):

    time_check = 0
    start = next([i, j] for i, row in enumerate(maps) for j, value in enumerate(row) if value == 'S')
    print('start : ', start)
    bfs(maps, time_check, start)

    return -1

print(solution(
    [
        "SOOOL",
        "XXXXO",
        "OOOOO",
        "OXXXX",
        "OOOOE"
    ]
))
# 16

# print(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]))
# -1

# https://school.programmers.co.kr/learn/courses/30/lessons/159993