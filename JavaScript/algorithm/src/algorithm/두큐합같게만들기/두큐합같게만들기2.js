function solution(queue1, queue2) {
  let answer = 0;

  // const pivot =
  //   [...queue1, ...queue2].reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     0
  //   ) / 2;

  let check = queue1.length + queue2.length;

  while (true) {
    check--;

    const q1 = queue1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const q2 = queue2.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    if (!q1 || !q2) return -1;

    if (q1 === q2) {
      return answer;
    } else if (q1 > q2) {
      queue2.push(queue1.shift());
    } else if (q2 > q1) {
      queue1.push(queue2.shift());
    }

    answer++;

    if (!check) return -1;
  }
}

// 14 16
console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1

// https://school.programmers.co.kr/learn/courses/30/lessons/118667
