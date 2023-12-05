function getCount(arr, map) {
  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  return [...map.values()].sort((a, b) => b - a);
}

function getSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function solution(k, tangerine) {
  const tangMap = new Map();
  const arr = getCount(tangerine, tangMap);
  const ea = [];

  for (let i = 0; i <= arr.length; i++) {
    ea.push(arr[i]);

    if (getSum(ea) >= k) break;
  }

  return ea.length;
}

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, tangerine));
