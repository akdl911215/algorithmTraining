function solution(n) {
  let num = "";
  for (let i = 1; i <= n; ++i) {
    num += i;
  }

  return num[n - 1] === undefined ? -1 : num[n - 1];
}
console.log(solution(5));
// 5

console.log(solution(15));
// 2;
