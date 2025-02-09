def print_board(board):
    # 스도쿠 보드를 출력하는 함수
    for i in range(9):
        if i % 3 == 0 and i != 0:
            print("-" * 21) # 서브 그리드 결계선
        for j in range(9):
            if j % 3 == 0 and j != 0:
                print("|", end=" ")
            print(board[i][j], end=" ")
        print()

def is_valid(board, row, col, num):
    # 숫자가 유효한지 확인하는 함수

    # 행 검사 (Check row)
    for i in range(9):
        if board[row][i] == num:
            return False

    # 열 검사 (Check column)
    for j in range(9):
        if board[j][col] == num:
            return False

    # 3x3 서브 그리드 검사 (Check 3x3 subgrid)
    start_row = (row // 3) * 3
    start_col = (col // 3) * 3
    for i in range(3):
        for j in range(3):
            if board[start_row + i][start_col + j] == num:
                return False

    return True

def solve_sudoku(board):
    # 스도쿠를 해결하는 함수 (백트래킹 사용)

    for row in range(9):
        for col in range(9):
            # 빈 칸인 경우 (If the cell is empty)
            if board[row][col] == 0:
                # 1부터 9까지 시도 (Try numbers from 1 to 9)
                for num in range(1, 10):
                    if is_valid(board, row, col, num):
                        board[row][col] = num # 숫자 배치 (Place the number)

                        # 재귀 호출 (Recursive call)
                        if solve_sudoku(board):
                            return True

                        board[row][col] = 0 # 백 트래킹 (Backtrack)

                return False # 해결 불가 (No solution)
    return True # 해결 완료 (Solution found)

# 초기 스도쿠 보드 (Initial Sudoku Board)
board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

print("초기 스도쿠 보드 (Initial Sudoku Board):")
print_board(board)

if solve_sudoku(board):
    print("\n해결된 스도쿠 보드 (Solved Sudoku Board):")
    print_board(board)
else:
    print("해결책이 없습니다. (No solution exists)")
