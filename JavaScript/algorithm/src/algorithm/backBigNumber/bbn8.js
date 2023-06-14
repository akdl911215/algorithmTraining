function solution(nums) {
  const dp = new Array(nums.length).fill(-1);
  const stack = [0];
  for (let i = 1; i < nums.length; i++) {
    while (nums[stack[stack.length - 1]] < nums[i]) {
      dp[stack.pop()] = nums[i];
    }

    stack.push(i);
  }

  console.log(dp);
  return dp;
}
solution([2, 3, 3, 5]);
// [3, 5, 5, -1]

solution([9, 1, 5, 3, 6, 2]);
// [-1, 5, 6, 6, -1, -1]
