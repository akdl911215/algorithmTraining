def solution(board):
    def check_winner(board, player):
        # Check rows
        for row in board:
            p = player * 3

            if row == p:
                return True

        # Check columns
        for col in range(3):
            if board[0][col] == board[1][col] == board[2][col] == player:
                return True

        # Check diagonals
        if board[0][0] == board[1][1] == board[2][2] == player:
            return True
        if board[0][2] == board[1][1] == board[2][0] == player:
            return True

        return False

    # Count O's and X's
    o_count = sum(row.count('O') for row in board)
    x_count = sum(row.count('X') for row in board)

    # O는 항상 X보다 하나 더 많거나 같아야 한다.
    # if o_count != x_count and o_count != x_count + 1:
    if o_count < x_count:
        return 0

    # Check winners
    o_wins = check_winner(board, 'O')
    x_wins = check_winner(board, 'X')

    # 둘 다 동시에 이길 수 없다.
    if o_wins and x_wins:
        return 0

    # O가 이겼다면 O는 X보다 하나 더 많아야 한다.
    if o_wins and o_count != x_count + 1:
        return 0

    # X가 이겼다면 O와 X의 개수가 같아야 한다.
    if x_wins and o_count != x_count:
        return 0

    # 위의 모든 조건을 통과하면 올바른 게임 상태이다.
    return 1


# 예제 테스트
board1 = ["O.X", ".O.", "..X"]
board2 = ["OOO", "...", "XXX"]
board3 = ["...", ".X.", "..."]

print(solution(board1))  # 1
print(solution(board2))  # 0
print(solution(board3))  # 0
