const solution = (numbers) => {
  const answer = new Array(numbers.length).fill(-1);
  console.log(answer);

  let start = 0;
  let end = 1;
  while (numbers.length === 0) {
    if (answer[start] < answer[end]) {
      answer[start] = answer[end];

      start += 1;
      end = 1 + start;
    } else if (answer[start] >= answer[end]) {
      if (end === answer.length) {
        start += 1;
        end = 1 + start;
      } else {
        end = +1;
      }
    }
  }
  return answer;
};

solution([2, 3, 3, 5]);
// [3, 5, 5, -1]

// solution([9, 1, 5, 3, 6, 2]);
// [-1, 5, 6, 6, -1, -1]
