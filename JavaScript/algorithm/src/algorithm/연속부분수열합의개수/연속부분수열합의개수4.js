function solution(elements) {
  const totalSet = new Set();
  const extendsEl = [...elements, ...elements];
  const index = elements.length;

  for (let i = 0; i < index; ++i) {
    let num = 0;
    for (let j = i; j < i + index; ++j) {
      num += extendsEl[j];

      totalSet.add(num);
    }
  }

  return totalSet.size;
}

// 예시
// console.log(solution([7, 9, 1, 1, 4])); // 18

console.log(solution([1, 2, 3])); // 6
// [1], [2], [3], [1, 2], [2, 3], [3, 1], [1, 2, 3]
// 1 2 3 5 4 6
