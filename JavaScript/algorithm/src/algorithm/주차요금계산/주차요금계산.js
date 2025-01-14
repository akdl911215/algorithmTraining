function solution(fees, records) {
  const answer = [];

  const table = {};
  for (let i = 0; i < records.length; ++i) {
    const [time, carNumber, IO] = records[i].split(" ");
    const [hour, minute] = time.split(":");

    const totalTime = Number(hour) * 60 + Number(minute);
    console.log("carNumber : ", carNumber);
    console.log("totalTime : ", totalTime);

    if (IO === "IN") {
      console.log("in : ", table);
      table[carNumber] = { ...table[carNumber], IN: totalTime };
      console.log("table : ", table);
    } else if (IO === "OUT") {
      console.log("out : ", table);
      table[carNumber] = { ...table[carNumber], OUT: totalTime };
      console.log("table : ", table);
    }

    console.log("---------------------------");
  }

  console.log(table);
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
// [14600, 34400, 5000]

// console.log(
//   solution(
//     [120, 0, 60, 591],
//     [
//       "16:00 3961 IN",
//       "16:00 0202 IN",
//       "18:00 3961 OUT",
//       "18:00 0202 OUT",
//       "23:58 3961 IN",
//     ]
//   )
// );
// 	[0, 591]

// console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
// [14841]

// https://school.programmers.co.kr/learn/courses/30/lessons/92341
