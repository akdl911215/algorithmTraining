function nQueen(n) {
  const board = new Array(n).fill().map(() => new Array(n).fill("."));
  const solutionList = [];

  backtrack(board, 0, solutionList);

  return solutionList;
}

function backtrack(board, row, solutionList) {
  if (row === board.length) {
    const solution = board.map((v) => [...v]);
    solutionList.push(solution);
    return;
  }

  for (let col = 0; col < board.length; ++col) {
    if (isValid(board, row, col)) {
      board[row][col] = "Q";
      backtrack(board, row + 1, solutionList);
      board[row][col] = ".";
    }
  }
}

function isValid(board, row, col) {
  for (let i = 0; i < row; ++i) {
    if (board[i][col] === "Q") {
      return false;
    }
  }

  for (let i = row, j = col; i >= 0 && j >= 0; --i, --j) {
    if (board[i][j] === "Q") {
      return false;
    }
  }

  for (let i = row, j = col; i >= 0 && j < board.length; --i, ++j) {
    if (board[i][j] === "Q") {
      return false;
    }
  }

  return true;
}

console.log(nQueen(4));
