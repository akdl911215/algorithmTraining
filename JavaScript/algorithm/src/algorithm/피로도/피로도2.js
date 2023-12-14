function getPermutations(array, size) {
  const results = [];
  if (size === 1) return array.map((value) => [value]);

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, size - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
}

function solution(k, dungeons) {
  const dungeonPermutations = getPermutations(dungeons, dungeons.length);
  let maxDungeonCount = 0;

  dungeonPermutations.forEach((permutation) => {
    let currentFatigue = k;
    let dungeonCount = 0;

    permutation.forEach(([minFatigue, useFatigue]) => {
      if (currentFatigue >= minFatigue) {
        currentFatigue -= useFatigue;
        dungeonCount++;
      }
    });

    maxDungeonCount = Math.max(maxDungeonCount, dungeonCount);
  });

  return maxDungeonCount;
}

// 테스트 케이스
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 결과: 3

// https://school.programmers.co.kr/learn/courses/30/lessons/87946
