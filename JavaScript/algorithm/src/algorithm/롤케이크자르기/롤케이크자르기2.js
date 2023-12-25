function solution(topping) {
  let answer = 0;

  for (let i = 0; i < topping.length - 1; ++i) {
    const [frontArr, backArr] = splitIntoChunk(topping, i + 1);
    const frontSet = new Set(frontArr);
    const backSet = new Set(backArr);

    if (frontSet.size === backSet.size) answer++;
  }

  return answer;
}

function splitIntoChunk(arr, chunk) {
  const copyArr = [...arr];
  const result = [];

  const tempArray = copyArr.splice(0, chunk);
  result.push(tempArray);
  result.push(copyArr);

  return result;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
// 2

console.log(solution([1, 2, 3, 1, 4]));
// 0

// https://school.programmers.co.kr/learn/courses/30/lessons/132265
