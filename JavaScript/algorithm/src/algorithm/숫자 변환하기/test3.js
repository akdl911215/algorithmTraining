// function dp() {
//   //
// }
// dp(5);

const dp = Array.from({ length: 10 }, () => 0);
console.log("dp : ", dp);
function fibonacci(number) {
  if (number === 1) return 1;
  if (number === 2) return 1;
  if (dp[number] !== 0) {
    console.log("dp[number] : ", dp[number]);
    return dp[number];
  }

  dp[number] = fibonacci(number - 1) + fibonacci(number - 2);
  console.log("end dp[number] : ", dp[number]);
  return dp[number];
}
console.log(fibonacci(5));
// 1 1 2 3 5
