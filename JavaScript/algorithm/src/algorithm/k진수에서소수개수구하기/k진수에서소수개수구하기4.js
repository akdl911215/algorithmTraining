function solution(n, k) {
  let numbers = n
    .toString(k)
    .split("0")
    .filter((a) => a > 1);

  console.log("numbers : ", numbers);

  let primes = [
    false,
    false,
    ...new Array(Math.max(...numbers) - 1).fill(true),
  ];
  for (let i = 2; i * i <= primes.length; i++) {
    for (let j = i * 2; j <= primes.length; j += i) {
      primes[j] = false;
    }
  }
  console.log(primes);

  // let numbers2 = n.toString(k).split("0");
  // console.log("numbers2 : ", numbers2);

  let answer = 0;
  for (const number of numbers) {
    answer++;
    if (number > 3) {
      for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) {
          answer--;
          break;
        }
      }
    }
  }
  return answer;
}

console.log(solution(437674, 3)); // 3
