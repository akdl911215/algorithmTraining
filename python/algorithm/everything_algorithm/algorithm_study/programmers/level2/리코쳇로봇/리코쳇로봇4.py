
def solution(board):
    N = len(board)
    M = len(board[0])
    queue = [[0, 0, 0]]

    for a in range(N):
        for b in range(M):
            if 'R' == board[a][b]:
                queue[0][0], queue[0][1] = a, b
                break

    check_coordinates_list = [[float('inf') for _ in range(M)] for _ in range(N)]
    check_coordinates_list[queue[0][0]][queue[0][1]] = 0

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while queue:
        x, y, c = queue.pop(0)

        if board[x][y] == 'G':
            return c

        for i in range(4):
            nx, ny = x, y
            dx, dy = directions[i]

            while 0 <= nx + dx < N and 0 <= ny + dy < M and board[nx + dx][ny + dy] != 'D':
                nx += dx
                ny += dy

            if check_coordinates_list[nx][ny] > c + 1:
                check_coordinates_list[nx][ny] = c + 1
                queue.append([nx, ny, c + 1])


    return -1

print(solution(
    [
        "...D..R",
        ".D.G...",
        "....D.D",
        "D....D.",
        "..D...."
    ]))
# 7

# print(solution([".D.R", "....", ".G..", "...D"]))
# -1

# https://school.programmers.co.kr/learn/courses/30/lessons/169199