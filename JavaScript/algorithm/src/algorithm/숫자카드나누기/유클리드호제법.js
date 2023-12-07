function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function gcd2(a, b) {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// console.log(gcd(28, 9)); // 1
// console.log(gcd(9, 28));
//
console.log(gcd(48, 18)); // 6
console.log(gcd(6, 15)); // 3
console.log(gcd(3, 2));

//
// console.log(gcd(56, 42)); // 14
// console.log(gcd(101, 10)); // 1
// console.log(gcd(270, 192)); // 6

// gcd(32, 12);
// gcd(12, 8);
// gcd(8, 4);
// gcd(4, 0);
// gcd(0, NaN)
// console.log(4 % 0);
