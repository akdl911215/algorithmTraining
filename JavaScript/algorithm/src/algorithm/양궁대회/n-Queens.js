function solveNQueens(n) {
  const board = new Array(n).fill().map(() => new Array(n).fill("."));
  const solutions = [];
  backtrack(board, 0, solutions);
  return solutions;
}

function backtrack(board, row, solutions) {
  if (row === board.length) {
    const solution = board.map((r) => r.join(""));
    solutions.push(solution);
    return;
  }

  for (let col = 0; col < board.length; col++) {
    // 행의 1, 2, 3, 4 채워나가는 로직 (column)
    // ex) board[0][0] > board[0][1] > board[0][2] > board[0][3]
    if (isValid(board, row, col)) {
      board[row][col] = "Q";
      backtrack(board, row + 1, solutions);
      // 만약에 return 되면 . 으로 치환되도록 아래 로직 추가
      board[row][col] = ".";
    }
  }
}

function isValid(board, row, col) {
  // Check column
  console.log(`board: ${board}, row: ${row}, col: ${col}`);

  for (let i = 0; i < row; i++) {
    console.log(`board[${i}][${col}] === "Q"`);
    if (board[i][col] === "Q") {
      return false;
    }
  }

  // Check diagonal (upper left)
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    console.log(`(upper left): board[${i}][${j}] === "Q"`);
    if (board[i][j] === "Q") {
      return false;
    }
  }

  // Check diagonal (upper right)
  for (let i = row, j = col; i >= 0 && j < board.length; i--, j++) {
    console.log(`(upper right): board[${i}][${j}] === "Q"`);
    if (board[i][j] === "Q") {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(solveNQueens(4));
