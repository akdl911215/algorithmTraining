function factorial(x) {
  let result = 1;
  console.log(x);
  for (let i = 1; i <= x; i++) {
    result *= i;
    console.log("result : ", result);
  }

  return result;
}

const C72ver1 = factorial(7);
console.log(C72ver1);
