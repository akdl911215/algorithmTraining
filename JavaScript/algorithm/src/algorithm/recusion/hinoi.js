// num = 원반갯수, from = 출발지 기둥 번호,
// to = 목적지 기둥 번호, order = 나머지 기둥 번호
hanoi(4, 0, 1, 2);

function hanoi(num, from, to, other) {
  console.log(
    "num : ",
    num,
    ", from : ",
    from,
    ", to : ",
    to,
    ", other : ",
    other
  );
  // console.log("to : ", to);
  // console.log("other : ", other);
  if (num === 0) return;
  // console.log("재귀 첫번째 hanoi 전");
  hanoi(num - 1, from, other, to);
  console.log(`${from}번에서 ${to}로 옮긴다.`);

  // console.log("재귀 두번째 hanoi 전");
  hanoi(num - 1, other, to, from);
}
