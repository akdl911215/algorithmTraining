from collections import deque

def bfs(maps, start, end):
    visited = [[0 for _ in range(len(maps[0]))] for _ in range(len(maps))]
    print('visited : ', visited)

    [sx, sy] = next([i, j] for i, row in enumerate(maps) for j, value in enumerate(row) if value == start)
    print('sx : ', sx, " / sy : ", sy)

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    print('maps : ', maps)
    visited[sx][sy] = 1
    queue = deque([[sx, sy, 0]])
    while queue:
        x, y, c = queue.popleft()

        for i in range(4):
            nx, ny = x + directions[i][0], y + directions[i][1]

            if 0 <= nx <= len(maps) - 1 and 0 <= ny <= len(maps[0]) - 1 and maps[nx][ny] != 'X':
                if visited[nx][ny] == 0:
                    visited[nx][ny] = 1
                    c += 1
                    queue.append([nx, ny, c])

            if 0 <= nx <= len(maps) - 1 and 0 <= ny <= len(maps[0]) and maps[nx][ny] == end and visited[ny][ny] == 0:
                return c

    return -1


def solution(maps):

    total_distance += bfs(maps, 'S', 'L')
    total_distance += bfs(maps, 'L', 'E')

    return total_distance

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