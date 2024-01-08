def solve_n_queens(n):
    def backtrack(row):
        if row == n:
            solution = [''.join(row) for row in board]
            solutions.append(solution)
            return

        for col in range(n):
            if is_valid(row, col):
                board[row][col] = 'Q'
                backtrack(row + 1)
                board[row][col] = '.'

    def is_valid(row, col):
        for i in range(row):
            if board[i][col] == 'Q':
                return False

        # Check upper left diagonal
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 'Q':
                return False

        # Check upper right diagonal
        for i, j in zip(range(row, -1, -1), range(col, n)):
            if board[i][j] == 'Q':
                return False

        return True

    board = [['.' for _ in range(n)] for _ in range(n)]
    solutions = []
    backtrack(0)
    return solutions


# Example usage
example_solutions = solve_n_queens(4)
print(example_solutions)