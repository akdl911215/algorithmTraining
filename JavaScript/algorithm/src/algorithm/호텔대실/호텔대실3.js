function solution(book_time) {
  const rooms = [];

  book_time.sort().forEach((el) => {
    const [startHour, startMinute] = el[0].split(":");
    const [endHour, endMinute] = el[1].split(":");

    const startTime = Number(startHour) * 60 + Number(startMinute);
    const endTime = Number(endHour) * 60 + Number(endMinute) + 10;

    const index = rooms.findIndex((room) => room <= startTime);

    if (index === -1) {
      rooms.push(endTime);
    } else {
      rooms[index] = endTime;
    }
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
