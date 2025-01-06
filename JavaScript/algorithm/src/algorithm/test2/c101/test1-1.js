function solution(n) {
  // 자릿수가 1일때 1 * 9
  // 자릿수가 10일때 2 * 90
  // 자릿수가 100일때 3 * 900

  let digits = 1;
  let a = 1;
  let b = 1;

  while (n > a * (9 * b)) {
    digits++;
    a++;

    b *= 10;
  }

  let str = "";
  for (let i = b; i <= n; ++i) {
    str += i;
  }

  return parseInt(str[n - b]);
}
// console.log(solution(5));
// 5

console.log(solution(15));
// 2;
