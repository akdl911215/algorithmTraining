const solution = (numbers) => {
  const answer = new Array(numbers.length).fill(-1);

  const stack = [];
  for (let i = 0; i < numbers.length; ++i) {
    while (numbers[stack.at(-1)] < numbers[i]) {
      console.log(
        "numbers[stack[stack.length - 1] : ",
        numbers[stack[stack.length - 1]]
      );
      console.log("numbers[stack.at(-1)] : ", numbers[stack.at(-1)]);
      answer[stack.pop()] = numbers[i];
    }

    stack.push(i);
  }

  return answer;
};

// solution([2, 3, 3, 5]);
// [3, 5, 5, -1]

solution([9, 1, 5, 3, 6, 2]);
// [-1, 5, 6, 6, -1, -1]
