const solution = (numbers) => {
  const answer = new Array(numbers.length).fill(-1);

  let sum = 0;
  for (let i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
  }

  for (let i = 0; i < numbers.length; ++i) {
    sum -= numbers[i];
    if (sum >= numbers[i]) {
      for (let j = i + 1; j < numbers.length; ++j) {
        if (numbers[i] < numbers[j]) {
          answer[i] = numbers[j];
          break;
        }
      }
    }
  }

  return answer;
};

solution([2, 3, 3, 5]);
// [3, 5, 5, -1]

solution([9, 1, 5, 3, 6, 2]);
// [-1, 5, 6, 6, -1, -1]
