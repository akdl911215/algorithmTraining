from collections import deque

def bfs(maps, start, end, count):
    N = len(maps)
    M = len(maps[0])
    visit_check = [[0 for _ in range(M)] for _ in range(N)]
    queue = deque([[0, 0, count]])

    loop_exit = False
    for i in range(N):
        for j in range(M):
            if maps[i][j] == start:
                queue[0][0], queue[0][1] = i, j
                visit_check[i][j] = 1
                loop_exit = True
                break
        if loop_exit:
            break

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while queue:
        x, y, c = queue.popleft()

        for i in range(4):
            nx, ny = directions[i][0] + x, directions[i][1] + y

            if 0 <= nx < N and 0 <= ny < M and maps[nx][ny] == end:
                return c + 1

            if 0 <= nx < N and 0 <= ny < M and maps[nx][ny] != 'X':
                if visit_check[nx][ny] == 0:
                    visit_check[nx][ny] = 1
                    queue.append([nx, ny, c + 1])
    return -1


def solution(maps):

    S_to_L = bfs(maps, 'S', 'L', 0)
    if S_to_L == -1:
        return -1

    L_to_E = bfs(maps, 'L', 'E', S_to_L)
    if L_to_E == -1:
        return -1

    return L_to_E

# S : 시작 지점
# E : 출구
# L : 레버
# O : 통로
# X : 벽
print(solution([
    "SOOOL",
    "XXXXO",
    "OOOOO",
    "OXXXX",
    "OOOOE"
              ]))
# 16

print(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]))
# -1

# https://school.programmers.co.kr/learn/courses/30/lessons/159993