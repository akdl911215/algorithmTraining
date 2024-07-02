from collections import deque

def bfs(maps, time_check, start, end, visited):
    [sx, sy] = next([i, j] for i, row in enumerate(maps) for j, value in enumerate(row) if value == start)
    print('sx : ', sx, " / sy : ", sy)

    directions = [(0, -1), (0, 1), (-1, 0), (1, 0)]

    print('maps : ', maps)
    visited[sx][sy] = True
    queue = deque([[sx, sy]])
    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx, ny = x + directions[i][0], y + directions[i][1]
            if 0 <= nx <= len(maps) - 1 and 0 <= ny <= len(maps[0]) and maps[nx][ny] != 'X' and not visited[ny][ny]:
                time_check += 1
                visited[nx][ny] = True
                queue.append([nx, ny])

            if 0 <= nx <= len(maps) - 1 and 0 <= ny <= len(maps[0]) and maps[nx][ny] == end and not visited[ny][ny]:
                return time_check

    return -1


def solution(maps):

    time_check = 0
    visited = [[False for _ in range(len(maps[0]))] for _ in range(len(maps))]
    print('visited : ', visited)
    distance = bfs(maps, time_check, 'S', 'L', visited)

    return distance

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