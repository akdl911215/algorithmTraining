const solution = (numbers) => {
  const answer = [];

  for (let i = 0; i < numbers.length; ++i) answer[i] = -1;

  let start = 0;
  let end = 1;
  let check = 0;
  while (check !== numbers.length) {
    if (numbers[start] < numbers[end]) {
      answer[start] = numbers[end];
      start += 1;
      end = start + 1;
      check += 1;

      console.log(`up start:${start}, end:${end}, check:${check}`);
      continue;
    }

    if (end === numbers.length) {
      start += 1;
      end = start + 1;
      check += 1;

      console.log(`down start:${start}, end:${end}, check:${check}`);
      continue;
    }
  }

  console.log("answer : ", answer);
  return answer;
};

solution([2, 3, 3, 5]);
// [3, 5, 5, -1]

solution([9, 1, 5, 3, 6, 2]);
// [-1, 5, 6, 6, -1, -1]
