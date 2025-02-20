def solution(board):
    def winner_check(board, player):
        for row in board:
            if row == player * 3:
                return True

        for column in range(3):

            col_one = board[0][column]
            col_two = board[1][column]
            col_three = board[2][column]
            if col_one == col_two == col_three == player:
                return True

        if board[0][0] == board[1][1] == board[2][2] == player:
            return True

        if board[2][0] == board[1][1] == board[0][2] == player:
            return True

        return False

    o_sum = sum(el == 'O' for row in board for el in row)
    x_sum = sum(el == 'X' for row in board for el in row)

    if o_sum < x_sum or o_sum > x_sum + 1:
        return 0

    o_winner = winner_check(board, 'O')
    x_winner = winner_check(board, 'X')

    # O와 X가 동시에 승리할 수 없다
    if o_winner and x_winner:
        return 0

    # O가 승리 할때 O의 갯수가 X보다 1많아야 한다.
    if o_winner and o_sum <= x_sum:
        return 0

    # X가 승리 할때 O의 수와 동일 해야 한다.
    if x_winner and (o_sum > x_sum or o_sum < x_sum):
        return 0

    return 1

print(solution(["O.X", ".O.", "..X"]))
# 1

print(solution(["OOO", "...", "XXX"]))
# 0

print(solution(["...", ".X.", "..."]))
# 0

print(solution(["...", "...", "..."]))
# 1