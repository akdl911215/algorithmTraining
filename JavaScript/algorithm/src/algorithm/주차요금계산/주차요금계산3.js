function solution(fees, records) {
  const answer = [];
  const table = {};
  const carNumberSet = new Set();

  records.forEach((el) => {
    const [time, carNumber, IO] = el.split(" ");
    const [hour, minute] = time.split(":").map(Number);
    const totalTime = hour * 60 + minute;

    carNumberSet.add(carNumber);

    if (IO === "IN") {
      table[carNumber] = (table[carNumber] || 0) - totalTime;
    } else {
      table[carNumber] += totalTime;
    }
  });

  [...carNumberSet].sort().forEach((key) => {
    if (table[key] < 1) {
      table[key] += 1439;
    }

    const [basicTime, basicFee, unitTime, unitFee] = fees;

    if (table[key] < basicTime) {
      answer.push(basicFee);
    } else {
      answer.push(
        basicFee + Math.ceil((table[key] - basicTime) / unitTime) * unitFee
      );
    }
  });

  return answer;
}
// 24:39 > 1439

// 예시 사용
// console.log(
//   solution(
//     [180, 5000, 10, 600],
//     [
//       "05:34 5961 IN",
//       "06:00 0000 IN",
//       "06:34 0000 OUT",
//       "07:59 5961 OUT",
//       "07:59 0148 IN",
//       "18:59 0000 IN",
//       "19:09 0148 OUT",
//       "22:59 5961 IN",
//       "23:00 5961 OUT",
//     ]
//   )
// );
// [14600, 34400, 5000]

console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
// [14841]
