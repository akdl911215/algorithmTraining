package algorithmStudy.backtracking.nQueens;

public class NQueens {
    public static void main(String[] args) {
        int n = 4; // Size of the chessboard
        int[][] board = new int[n][n];
        if (solveNQueen(board, 0, n)) {
            //
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
}
