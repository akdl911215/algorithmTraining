function solution(book_time) {
  const rooms = [];

  book_time.sort().forEach(([start, end]) => {
    const [startHour, startMinute] = start.split(":");
    const [endHour, endMinute] = end.split(":");

    const endTime = Number(endHour) * 60 + Number(endMinute) + 10;

    const index = rooms.findIndex(
      (checkOut) => checkOut <= Number(startHour) * 60 + Number(startMinute)
    );

    if (index === -1) rooms.push(endTime);
    else rooms[index] = endTime;
  });

  return rooms.length;
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
