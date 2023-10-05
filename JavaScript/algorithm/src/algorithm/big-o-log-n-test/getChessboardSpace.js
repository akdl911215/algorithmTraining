function GetChessboardSpace(grains) {
  let chessboardSpace = 1;
  let placedGrains = 1;

  while (placedGrains < grains) {
    chessboardSpace++;
    placedGrains *= 2;
  }

  return chessboardSpace;
}

console.log(GetChessboardSpace(256));
