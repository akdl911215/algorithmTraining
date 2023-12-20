function isPrime(num) {
  // 1과 0은 소수가 아님
  if (num <= 1) return false;

  // 2는 유일한 짝수 소수
  if (num === 2) return true;

  // 짝수는 소수가 아님
  if (num % 2 === 0) return false;

  // 3부터 num의 제곱근까지 반복하여 확인
  const sqrNum = Math.sqrt(num);
  for (let i = 0; i < sqrNum; i += 2) if (num % i === 0) return false;
}

function solution(n, k) {
  let answer = 0;

  let num = "";
  const numberList = n.toString(k);
  console.log("numberList : ", numberList);
  const numberArr = [];
  for (let i = 0; i < numberList.length; ++i) {
    if (numberList[i] === "0") {
      numberArr.push(Number(num));
      num = "";
    } else {
      num += numberList[i];
    }
  }

  if (num !== "") numberArr.push(Number(num));

  console.log(numberArr);

  return numberArr
    .filter((el) => 1 != el)
    .map((num) => {
      if (isPrime(num)) return num;
    }).length;
}

console.log(solution(437674, 3)); // 3
