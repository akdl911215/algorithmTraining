function solution(start, dest, limit) {
  let maxVisitedStation = 0;
  let totalFee = 0;

  for (let i = 0; i < start.length; ++i) {
    let fee = 1;
    const startNum = start[i];
    const destNum = dest[i];
    const num = Math.abs(startNum - destNum);

    totalFee += fee + num * 2;

    if (startNum > maxVisitedStation || destNum > maxVisitedStation) {
      maxVisitedStation = Math.max(startNum, destNum);
    }
  }
  return totalFee > limit[maxVisitedStation]
    ? limit[maxVisitedStation]
    : totalFee;
}

console.log(solution([1, 0, 2, 4], [2, 2, 0, 5], [3, 17, 7, 4, 5, 17]));
// 16
