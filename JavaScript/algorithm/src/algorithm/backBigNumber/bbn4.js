const solution = (numbers) => {
  const answer = new Array(numbers.length).fill(-1);
  console.log("answer : ", answer);

  const stack = [];
  for (let i = 0; i < numbers.length; ++i) {
    console.log("start stack : ", stack);
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      console.log("stack : ", stack);
      console.log("numbers[stack.at(-1)]: ", numbers[stack.at(-1)]);
      console.log("numbers[i] : ", numbers[i]);
      console.log(
        "stack && numbers[stack.at(-1)] : ",
        stack && numbers[stack.at(-1)]
      );

      console.log(
        "stack && numbers[stack.at(-1)] < numbers[i] : ",
        stack && numbers[stack.at(-1)] < numbers[i]
      );

      console.log("stack : ", stack);
      const stackPop = stack.pop();
      console.log(stackPop);
      answer[stackPop] = numbers[i];
      console.log("b stack : ", stack);

      console.log("----------");
    }
    stack.push(i);
  }

  console.log("bottom answer : ", answer);
  return answer;
};

solution([2, 3, 3, 5]);
// [3, 5, 5, -1]

// solution([9, 1, 5, 3, 6, 2]);
// [-1, 5, 6, 6, -1, -1]
