function calcTime(time) {
  const [h, m] = time.split(":").map((x) => Number(x));
  return h * 60 + m;
}

function solution(book_time) {
  const map = new Map();

  for (const [startTime, endTime] of book_time) {
    let st = calcTime(startTime);
    const et = calcTime(endTime);

    for (; st < et + 10; st++) map.set(st, (map.get(st) || 0) + 1);
  }

  console.log("map : ", map.entries());
  const val = Math.max(...map.values());
  console.log("val : ", val);
  return val;
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
