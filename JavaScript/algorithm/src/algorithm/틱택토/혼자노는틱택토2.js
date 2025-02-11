function winnerCheck(board, player) {
  // 가로와 세로 줄을 동시에 확인합니다.
  for (let i = 0; i < 3; i++) {
    // 가로 줄 확인
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
    // 세로 줄 확인
    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) {
      return true;
    }
  }

  // 두 대각선 확인
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }

  return false;
}

function solution(board) {
  let oSum = 0;
  let xSum = 0;

  // board 배열을 한 번 순회하면서 "O"와 "X"의 개수를 계산합니다.
  for (const row of board) {
    for (const cell of row) {
      if (cell === "O") oSum++;
      else if (cell === "X") xSum++;
    }
  }

  // 선공("O")은 후공("X")보다 적을 수 없으며, 차이가 2 이상 나면 번갈아 둔 것이 아님
  if (oSum < xSum || oSum > xSum + 1) {
    return 0;
  }

  // 승리 조건을 확인합니다.
  const oWin = winnerCheck(board, "O");
  const xWin = winnerCheck(board, "X");

  // 양쪽 모두 승리하는 경우는 있을 수 없습니다.
  if (oWin && xWin) {
    return 0;
  }

  // "O"가 승리했다면 "O"가 한 번 더 둔 상태여야 합니다.
  if (oWin && oSum !== xSum + 1) {
    return 0;
  }

  // "X"가 승리했다면 "O"와 "X"의 개수가 같아야 합니다.
  if (xWin && oSum !== xSum) {
    return 0;
  }

  // 별도의 빈칸 전체 채움 조건 없이, 위의 규칙만으로 정상적인 게임 상태임을 판단할 수 있습니다.
  return 1;
}

console.log(solution(["O.X", ".O.", "..X"]));
// 1

console.log(solution(["OOO", "...", "XXX"]));
// 0

console.log(solution(["...", ".X.", "..."]));
// 0

console.log(solution(["...", "...", "..."]));
// 1
