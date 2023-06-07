const solution = (numbers) => {
  const answer = [];

  for (let i = 0; i < numbers.length; ++i) {
    answer[i] = -1;
  }

  for (let i = 0; i < numbers.length; ++i) {
    for (let j = i + 1; j < numbers.length; ++j) {
      if (numbers[i] < numbers[j]) {
        answer[i] = numbers[j];
        break;
      }
    }
  }

  return answer;
};

solution([2, 3, 3, 5]);
// [3, 5, 5, -1]

solution([9, 1, 5, 3, 6, 2]);
// [-1, 5, 6, 6, -1, -1]
