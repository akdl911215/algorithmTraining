def n_queen(n):

    def in_valid(row, col):

        for i in range(0, row):
            if board[i][col] == 'Q':
                return False

        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 'Q':
                return False

        for i, j in zip(range(row, -1, -1), range(col, n, 1)):
            if board[i][j] == 'Q':
                return False

        return True

    def backtrack(row):
        if row == n:
            print('board : ', board)
            solution = [arr[:] for arr in board]
            solutionList.append(solution)
            return

        for col in range(n):
            if in_valid(row, col):
                board[row][col] = 'Q'
                backtrack(row + 1)
                board[row][col] = '.'

    board = [['.' for _ in range(n)] for _ in range(n)]
    solutionList = []
    backtrack(0)

    return solutionList


print(n_queen(4))