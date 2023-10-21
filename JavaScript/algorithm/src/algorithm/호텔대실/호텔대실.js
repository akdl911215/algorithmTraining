function solution(book_time) {
  const sortedBookTime = book_time.sort();

  const room = [];
  for (let time of sortedBookTime) {
    const [[sH, sM], [eH, eM]] = time.map((x) => x.split(":"));

    const startTime = Number(sH) * 60 + Number(sM);
    const endTime = Number(eH) * 60 + Number(eM) + 10;

    const index = room.findIndex((time) => time <= startTime);

    if (index === -1) {
      room.push(endTime);
    } else {
      room[index] = endTime;
    }
  }

  return room.length;
}
console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
// 3

// console.log(
//   solution([
//     ["09:10", "10:10"],
//     ["10:20", "12:20"],
//   ])
// );
// 1

// console.log(
//   solution([
//     ["10:20", "12:30"],
//     ["10:20", "12:30"],
//     ["10:20", "12:30"],
//   ])
// );
// 3

// https://school.programmers.co.kr/learn/courses/30/lessons/155651
