function solution(elements) {
  const uniqueSums = new Set();
  let n = elements.length;
  const extendedElements = [...elements, ...elements];

  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let end = start; end < start + n; end++) {
      sum += extendedElements[end];

      uniqueSums.add(sum);
    }
  }

  return uniqueSums.size;
}

// 예시
// console.log(solution([7, 9, 1, 1, 4])); // 18

console.log(solution([1, 2, 3])); //
// [1], [2], [3], [1, 2], [2, 3], [3, 1], [1, 2, 3]
// 1 2 3 5 4 6
