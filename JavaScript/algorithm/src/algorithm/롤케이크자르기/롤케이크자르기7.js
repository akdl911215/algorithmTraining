function solution(topping) {
  let answer = 0;
  const cakeTable = new Map();
  const sendingSet = new Set(topping);
  console.log("sendingSet : ", sendingSet);

  for (let i = 0; i < topping.length; ++i)
    cakeTable.set(topping[i], (cakeTable.get(topping[i]) || 0) + 1);

  console.log("cakeTable : ", cakeTable);

  const receivingSet = new Set();
  topping.forEach((tp) => {
    if (cakeTable.get(tp) >= 1) {
      cakeTable.set(tp, cakeTable.get(tp) - 1);
    }

    if (cakeTable.get(tp) === 0) {
      cakeTable.delete(tp);
    }
  });

  return answer;
}
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
// 2
