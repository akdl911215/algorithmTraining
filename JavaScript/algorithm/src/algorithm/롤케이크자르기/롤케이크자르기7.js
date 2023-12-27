function solution(topping) {
  let answer = 0;
  const cakeTable = new Map();
  const sendingSet = new Set(topping);

  for (let i = 0; i < topping.length; ++i)
    cakeTable.set(topping[i], (cakeTable.get(topping[i]) || 0) + 1);

  const receivingSet = new Set();
  topping.forEach((tp) => {
    if (cakeTable.get(tp) >= 1) {
      cakeTable.set(tp, cakeTable.get(tp) - 1);
      receivingSet.add(tp);
    }

    if (!cakeTable.get(tp)) {
      cakeTable.delete(tp);
      sendingSet.delete(tp);
    }

    if (receivingSet.size === sendingSet.size) answer++;
  });

  return answer;
}
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
// 2
console.log(solution([1, 2, 3, 1, 4]));
// 0
