function solution(n, times) {
  let minTime = 0;
  let maxTime = n * times[times.length - 1];

  let answer = maxTime;

  while (minTime <= maxTime) {
    let middle = Math.floor((maxTime + minTime) / 2);
    let count = 0;

    times.forEach((examiner) => {
      count += Math.floor(middle / examiner);

      if (count >= n) {
        answer = Math.min(middle, answer);
      }
    });

    if (count >= n) {
      maxTime = middle - 1;
    } else {
      minTime = middle + 1;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10]));
