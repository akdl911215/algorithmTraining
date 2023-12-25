function solution(topping) {
  var answer = 0;
  let baseSet = new Set();
  let compareSet = new Set();
  let counter = new Array(10001).fill(0);

  if (topping.length === 1) {
    return answer;
  }

  topping.map((v) => {
    console.log("v : ", v);
    baseSet.add(v);
    counter[v]++;
  });
  console.log("baseSet : ", baseSet);
  console.log("counter : ", counter);

  console.log("topping : ", topping);
  topping.map((v) => {
    console.log("counter[v]  :", counter[v]);
    if (counter[v] >= 1) {
      counter[v]--;
    }
    if (counter[v] === 0) {
      baseSet.delete(v);
    }
    compareSet.add(v);
    if (baseSet.size === compareSet.size) {
      answer++;
    }
  });

  return answer;
}
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
// 2
