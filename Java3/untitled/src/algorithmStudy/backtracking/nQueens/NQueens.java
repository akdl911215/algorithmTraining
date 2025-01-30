package algorithmStudy.backtracking.nQueens;

public class NQueens {
    public static void main(String[] args) {
        int n = 4; // Size of the chessboard
//        int n = 3;
//        int n = 2;
        int[][] board = new int[n][n];
        if (solveNQueens(board, 0, n)) {
            printBoard(board);
        } else {
            System.out.println("No solution exists");
        }
    }

    private static boolean solveNQueens(int[][] board, int col, int n) {
        if (col >= n) {
            return true;
        }

        for (int i = 0; i < n; i++) {
            if (isSafe(board, i, col, n)) {
                board[i][col] = 1;

                if (solveNQueens(board, col + 1, n)) {
                    return true;
                }

                board[i][col] = 0; // Backtrack
            }
        }

        return false;
    }

    private static boolean isSafe(int[][] board, int row, int col, int n) {
        int i, j;

        // Check this row on left side
        for (i = 0; i < col; i++){
            if (board[row][i] == 1) {
                return false;
            }
        }

        // Check upper diagonal on left side
        for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 1) {
                return false;
            }
        }

        // Check lower diagonal on left side
        for (i = row, j = col; j >= 0 && i < n; i++, j--) {
            if (board[i][j] == 1) {
                return false;
            }
        }

        return true;
    }

    private static void printBoard(int[][] board) {
        for (int[] row: board) {
            for (int cell: row) {
                System.out.print(cell == 1 ? "Q " : ". ");
            }
            System.out.println();
        }
    }
}
