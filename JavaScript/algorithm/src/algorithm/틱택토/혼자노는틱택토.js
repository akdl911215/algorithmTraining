function winnerCheck(board, player) {
  let row = 0;
  for (let i = 0; i < 3; ++i) {
    if (board[i][0] === player) {
      row += 1;
    }
    if (board[i][1] === player) {
      row += 1;
    }
    if (board[i][2] === player) {
      row += 1;
    }

    if (row === 3) {
      return true;
    }
  }

  let column = 0;
  for (let i = 0; i < 3; ++i) {
    if (board[0][i] === player) {
      column += 1;
    }
    if (board[1][i] === player) {
      column += 1;
    }
    if (board[2][i] === player) {
      column += 1;
    }

    if (column === 3) {
      return true;
    }
  }

  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }

  if (
    board[2][0] === player &&
    board[1][1] === player &&
    board[0][2] === player
  ) {
    return true;
  }

  return false;
}

function solution(board) {
  let result = -1;

  let oSum = 0;
  let xSum = 0;
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      if ("O" === board[i][j]) {
        oSum += 1;
      }

      if ("X" === board[i][j]) {
        xSum += 1;
      }
    }
  }

  const oWin = winnerCheck(board, "O");
  const xWin = winnerCheck(board, "X");
  console.log("oWin : ", oWin);
  console.log("xWin : ", xWin);

  // "O"를 표시할 차례인데 "X"를 표시하거나 반대로 "X"를 표시할 차례인데 "O"를 표시
  if (oSum < xSum) {
    return -1;
  }

  // 선공이나 후공이 승리해서 게임이 종료되었음에도 그 게임을 진행

  return result;
}

console.log(solution(["O.X", ".O.", "..X"]));
// 1

// console.log(solution(["OOO", "...", "XXX"]));
// 0

// console.log(solution(["...", ".X.", "..."]));
// 0

// console.log(solution(["...", "...", "..."]));
// 1
