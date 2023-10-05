function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;

  const timeLength = times[times.length - 1];
  console.log("times[times.length - 1]; : ", times[times.length - 1]);
  let right = n * timeLength;
  console.log("right : ", right);

  let answer = right;

  while (left <= right) {
    console.log("left : ", left, ", right : ", right);
    let mid = Math.floor((left + right) / 2);
    console.log("mid : ", mid); // 30 > 15 > 22 > 26 > 28 > 27
    let count = 0;

    times.forEach((value) => {
      count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
      // 30 / 7 = 4 , 30 / 10 = 3
      // 15 / 7 = 2 , 15 / 10 = 1
      // 22 / 7 = 3 , 22 / 10 = 2
      // 26 / 7 = 3 , 26 / 10 = 2
      // 28 / 7 = 4 , 28 / 10 = 2
      // 27 / 7 = 3 , 27 / 10 = 2

      if (count >= n) {
        // 4 >= 6
        // 3 >= 6
        // 5 >= 6
        // 5 >= 6
        // 6 >= 6
        // 5 >= 6
        answer = Math.min(mid, answer); // 최솟값
        console.log("forEach answer : ", answer);
        return;
      }
    });
    console.log("count : ", count);

    if (count >= n) {
      right = mid - 1;
      console.log("count >= n right : ", right);
    } else {
      left = mid + 1;
      console.log("count >= n left : ", left);
    }
  }

  return answer;
}

console.log(solution(6, [7, 10]));
// https://school.programmers.co.kr/learn/courses/30/lessons/43238?language=javascript
