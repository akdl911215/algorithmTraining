function solution(k, tangerine) {
  let answer = 0;

  const map = {};
  for (let i = 0; i < tangerine.length; ++i)
    map[tangerine[i]] = (map[tangerine[i]] || 0) + 1;

  const sortable = [];
  for (let name in map) {
    sortable.push([name, map[name]]);
  }
  const sortMap = sortable.sort((a, b) => b[1] - a[1]).map((el) => el[1]);

  for (let i = 0; i < sortMap.length; ++i) {
    if (k <= 0) break;

    k -= sortMap[i];
    answer++;
  }

  return answer;
}

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, tangerine));
