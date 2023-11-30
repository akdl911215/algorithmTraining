function maxSum(arr, windowSize) {
  let maxSum = 0;
  let tempSum = 0;

  // 배열 길이가 윈도우 크기보다 작은 경우
  if (arr.length < windowSize) return null;

  // 초기 윈도우의 합을 계산
  for (let i = 0; i < windowSize; ++i) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // 슬라이딩 윈도우
  for (let i = windowSize; i < arr.length; ++i) {
    tempSum = tempSum - arr[i - windowSize] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

const arr = [1, 2, 3, 4, 5];
const windowSize = 3;
console.log(maxSum(arr, windowSize)); // 12
