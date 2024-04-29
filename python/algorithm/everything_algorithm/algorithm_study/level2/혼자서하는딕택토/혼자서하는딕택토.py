from collections import deque

def solution(board):
    answer = 0

    # O || X 가로, 세로, 대각선으로 먼저 3개를 놓으면 승리
    # O >= X && O가 없으면 X도 없다.
    # 0 == 0 && X == 0 return 1
    # O,X가 총 9개되면 무승부

    O = sum(row.count("O") for row in board)
    X = sum(row.count("X") for row in board)

    if O == 0 and X == 0:
        return 1

    if O + X == 9:
        return 0

    direction = [(-1, 0), (1, 0), (0, -1), (0 , 1)]
    if O == X and O >= 3 and X >= 3:
        queue = deque()
        for x in range(len(board)):
            for y in range(len(board[x])):
                if board[x][y] == '0':
                    queue.append([x, y])
        print('queue : ', queue)

        count = 0
        while queue:
            x, y = queue.popleft()

            for dx, dy in direction:
                if len(board) > dx + x >= 0 and len(board[0]) > dy + y >= 0:
                    count += 1
                else:
                    count = 0

        if count >= 3:
            return 0

        return 0

    turn = "O" if O <= X else "X"
    print(turn)

    return answer

print(solution(["O.X", ".O.", "..X"]))
# 1

# print(solution(["OOO", "...", "XXX"]))
# 0

# print(solution(["...", ".X.", "..."]))
# 0

# print(solution(["...", "...", "..."]))
# 1

# https://school.programmers.co.kr/learn/courses/30/lessons/160585?language=python3