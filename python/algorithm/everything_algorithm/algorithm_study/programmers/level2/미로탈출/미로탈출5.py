from collections import deque
# bfs 를 모듈화해서 L과 E를 찾는것에 재활용하면 될듯

def bfs(maps, N, M, start, end, count, coordinates_count_list):
    check_coordinates_list = [[float('inf') for _ in range(M)] for _ in range(N)]
    check_coordinates_list[start[0]][start[1]] = 0
    pivot = 0

    queue = deque([[start[0], start[1], count]])
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)] # 상하좌우

    while queue:
        x, y, c = queue.popleft()
        nx, ny = x, y

        for i in range(4):
            dx, dy = directions[i]

            while 0 <= nx + dx < N and 0 <= ny + dy < M and maps[nx][ny] != 'X' and coordinates_count_list[nx][ny] == 0:
                nx += x
                ny += y
                c += 1
                coordinates_count_list[nx][ny] = c

            if 0 <= nx < N and 0 <= ny < M and check_coordinates_list[nx][ny] > pivot:
                pivot += 1
                queue.append([nx, ny, c])

    return [-1]


def solution(maps):
    N = len(maps)
    M = len(maps[0])

    start = [0, 0]
    lever = [0, 0]
    exit = [0, 0]

    for i in range(N):
        for j in range(M):
            if maps[i][j] == 'S':
                start[0], start[1] = i, j

            if maps[i][j] == 'L':
                lever[0], lever[1] = i, j

            if maps[i][j] == 'E':
                exit[0], exit[1] = i, j

    coordinates_count_list = [[0 for _ in range(M)] for _ in range(N)]
    coordinates_count_list[start[0]][start[1]] = 0
    end = lever
    lever_position_information = bfs(maps, N, M, start, end, 0, coordinates_count_list)
    print('lever_position_information : ', lever_position_information)
    if lever_position_information[0] == -1:
        return -1

    end = exit
    count = lever_position_information[2]
    start[0], start[1] = lever_position_information[0], lever_position_information[1]
    exit_position_information = bfs(maps, N, M, start, end, count, coordinates_count_list)
    print('exit_position_information : ', exit_position_information)
    if exit_position_information[0] == -1:
        return -1

    return exit_position_information[2]

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