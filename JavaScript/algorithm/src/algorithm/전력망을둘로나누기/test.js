function findPairs(arr, targetSum) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

// 사용 예시
const numbers = [1, 2, 3, 4, 5];
const target = 6;
console.log(findPairs(numbers, target)); // [[1, 5], [2, 4]]
