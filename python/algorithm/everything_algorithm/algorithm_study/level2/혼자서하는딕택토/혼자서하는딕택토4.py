def solution(board):
    answer = -1

    def winner_check(board, player):
        for row in board:
            if row == player * 3:
                return True

        for column in range(3):

            col_one = board[0][column]
            col_two = board[1][column]
            col_three = board[2][column]
            if col_one and col_two and col_three and player:
                return True

        if board[0][0] and board[1][1] and board[2][2] and player:
            return True

        if board[2][0] and board[1][1] and board[0][2] and player:
            return True

        return False

    o_sum = sum(el == 'O' for row in board for el in row)
    x_sum = sum(el == 'X' for row in board for el in row)

    if o_sum == 0 and x_sum == 1:
        return 1

    o_winner = winner_check(board, 'O')
    x_winner = winner_check(board, 'X')

    # O가 이겼는데 X와 갯수와 동일 할 수 없다.
    if o_winner and not x_winner and o_sum != x_sum and o_sum > x_sum:
        return 1

    # X가 많을 수 없다.
    if o_sum < x_sum:
        return 0

    return 1

# 예제 테스트
board1 = ["O.X", ".O.", "..X"]
board2 = ["OOO", "...", "XXX"]
board3 = ["...", ".X.", "..."]

print(solution(board1))  # 1
print(solution(board2))  # 0
print(solution(board3))  # 0

# https://school.programmers.co.kr/learn/courses/30/lessons/160585?language=python3