const fibonacciFunc = (num) => {
  if (num > 1) return num + fibonacciFunc(num - 1);

  return num;
};

let ranNum = Math.floor(Math.random() * 10);
console.log("ranNum : ", ranNum);
console.log(fibonacciFunc(ranNum));
