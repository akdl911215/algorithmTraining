from collections import deque

def solution(board):
    answer = 0

    # O || X 가로, 세로, 대각선으로 먼저 3개를 놓으면 승리
    # O >= X && O가 없으면 X도 없다.
    # 0 == 0 && X == 0 return 1
    # O,X가 총 9개되면 무승부

    queue = deque()
    for str in board:
        for s in str:
            queue.append(s)
    print(queue)

    table = []
    for str in board:
        for s in str:
            table.append(s)
    print('table : ', table)

    while not queue:
        s = queue.popleft()


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