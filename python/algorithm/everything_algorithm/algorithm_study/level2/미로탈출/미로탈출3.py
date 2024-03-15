from collections import deque


def solution(maps):
    N = len(maps)
    M = len(maps[0])
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # 상하좌우
    queue = deque()
    visited = [[False] * M for _ in range(N)]

    # 시작 지점과 레버, 출구 위치를 찾습니다.
    for i in range(N):
        for j in range(M):
            if maps[i][j] == 'S':
                start = (i, j)
            elif maps[i][j] == 'L':
                lever = (i, j)
            elif maps[i][j] == 'E':
                exit = (i, j)

    # BFS 함수 정의: 타겟 지점까지의 최소 시간을 계산합니다.
    def bfs(start, target, allow_through_target):
        for row in visited:
            for i in range(M):
                row[i] = False
        queue.clear()
        queue.append((*start, 0))
        visited[start[0]][start[1]] = True

        while queue:
            x, y, time = queue.popleft()
            if (x, y) == target:
                return time
            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                while 0 <= nx < N and 0 <= ny < M and maps[nx][ny] != 'X' and not visited[nx][ny]:
                    if (nx, ny) == target or (allow_through_target and maps[nx][ny] != 'E'):
                        visited[nx][ny] = True
                        queue.append((nx, ny, time + 1))
                    nx += dx
                    ny += dy

        return -1

    # 레버까지 이동한 후, 레버에서 출구까지의 최소 시간을 구합니다.
    time_to_lever = bfs(start, lever, False)
    if time_to_lever == -1:
        return -1
    time_to_exit_from_lever = bfs(lever, exit, True)

    if time_to_exit_from_lever == -1:
        return -1

    return time_to_lever + time_to_exit_from_lever

print(solution([
    "SOOOL",
    "XXXXO",
    "OOOOO",
    "OXXXX",
    "OOOOE"
              ]))
# 16

# print(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"))
# -1
