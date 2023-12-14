function getPermutations(arr, n) {
  const results = [];
  if (n === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, n - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    results.push(...attached);
  });

  return results;
}

function solution(k, dungeons) {
  let answer = -1;

  const arr = [];
  dungeons.forEach((array) => {
    console.log(`array: ${array}, array.length: ${array.length}`);
    arr.push(getPermutations(array, array.length));
  });
  console.log(arr);

  return answer;
}
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
// 3

// https://school.programmers.co.kr/learn/courses/30/lessons/87946
