function nextBigNumber(n) {
  var i, j;

  console.log("n & 1 : ", n & 1);
  console.log("!(n & 1) : ", !(n & 1));
  for (i = 0; !(n & 1); i++) {
    n = n >> 1;
    console.log("1 n : ", n);
  } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i

  for (j = 0; n & 1; i++, j++) {
    n = n >> 1;
    console.log("2 n : ", n);
  } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j

  for (j--, n++; i !== j; i--) {
    n = n << 1;
    console.log("3 n : ", n);
  } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1

  for (i; i; i--, n++) {
    n = n << 1;
    console.log("1 n : ", n);
  } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입

  return n;
}

console.log(nextBigNumber(78));
// 83
