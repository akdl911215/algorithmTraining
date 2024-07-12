from collections import deque

def bfs(maps, start, end):
    visited = [[0 for _ in range(len(maps[0]))] for _ in range(len(maps))]

    [sx, sy] = next([i, j] for i, row in enumerate(maps) for j, value in enumerate(row) if value == start)

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    visited[sx][sy] = 1

    queue = deque([[sx, sy, 0]])
    while queue:
        x, y, c = queue.popleft()

        for dx, dy in directions:
            nx, ny = x + dx, y + dy

            if 0 <= nx <= len(maps) - 1 and 0 <= ny <= len(maps[0]) - 1 and maps[nx][ny] != 'X' and visited[nx][ny] == 0:
                if maps[nx][ny] == end:
                    return c + 1

                visited[nx][ny] = 1
                queue.append([nx, ny, c + 1])
    return -1


def solution(maps):
    distance = 0
    distance += bfs(maps, 'S', 'L')
    if distance == -1:
        return -1

    distance2 = 0
    distance2 += bfs(maps, 'L', 'E')
    if distance2 == -1:
        return -1

    return distance + distance2

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

print(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]))
# -1

# https://school.programmers.co.kr/learn/courses/30/lessons/159993