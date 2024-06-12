from collections import deque

def solution(maps):
    N = len(maps)
    M = len(maps[0])

    check_coordinates_list = [[float('inf') for _ in range(M)] for _ in range(N)]
    check_count_list = [[float('inf') for _ in range(M)] for _ in range(N)]
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)] # 상하좌우
    queue = deque([[0, 0, 0]])

    for i in range(N):
        for j in range(M):
            if maps[i][j] == 'S':
                check_coordinates_list[i][j], check_count_list[i][j] = 0, 0
                queue[0][0], queue[0][1] = i, j
                break

    L = 9999999
    E = 9999998

    pivot = 'L'

    while queue:
        x, y, c = queue.popleft()
        nx, ny = x, y

        for i in range(4):
            dx, dy = directions[i]

            print("nx + dx : ", nx + dx)
            print("ny + dy : ", ny + dy)
            print("maps[nx + dx][ny + dy] : ", maps[nx + dx][ny + dy])
            print("check_count_list[nx + dx][ny + dy] > c + 1 : ", check_count_list[nx + dx][ny + dy] > c + 1)
            while 0 <= nx + dx < N and 0 <= ny + dy < M and maps[nx + dx][ny + dy] != 'X' and maps[nx + dx][ny + dy] != pivot and check_count_list[nx + dx][ny + dy] > c + 1:
                nx += dx
                ny += dy
                c += 1
                check_count_list[nx][ny] = c


            if 0 <= nx + dx < N and 0 <= ny + dy < M and maps[nx + dx][ny + dy] == pivot:
                c += 1
                check_count_list[nx + dx][ny + dy] = c
                queue.append([nx + dx, ny + dy, c])

                if maps[nx + dx][ny + dy] == 'L':
                    check_coordinates_list[nx + dx][ny + dy] = L
                    pivot = 'E'
                    break

                if maps[nx + dx][ny + dy] == 'E':
                    check_coordinates_list[nx + dx][ny + dy] = E
                    return c + 1

    return -1

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

# print(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"))
# -1

# https://school.programmers.co.kr/learn/courses/30/lessons/159993