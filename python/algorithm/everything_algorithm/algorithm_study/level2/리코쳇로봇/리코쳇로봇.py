def check_coordinates(x, y, board):
    if x >= len(board[0]) or y >= len(board) or  board[x][y] == 'D':
        return False

    return True

def solution(board):
    answer = 0
    queue = [[0, 0]]
    for i in range(len(board)):
        for j in range(len(board[0])):
            if 'R' == board[i][j]:
                queue[0][0], queue[0][1] = i, j

    print(queue)

    while queue:
        x, y = queue.pop(0)

        if check_coordinates(x + 1, y + 1, board):
            queue.append([x + 1, y + 1])

        if check_coordinates(x + 1, y - 1, board):
            queue.append([x + 1, y - 1])

        if check_coordinates(x - 1, y - 1, board):
            queue.append([x - 1, y - 1])

        if check_coordinates(x - 1, y + 1, board):
            queue.append([x - 1, y + 1])



    return answer

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