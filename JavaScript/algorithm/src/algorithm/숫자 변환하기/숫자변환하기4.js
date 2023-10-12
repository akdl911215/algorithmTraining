function solution(x, y, n) {
  const arr = Array.from({ length: y + 1 }, () => Infinity);
  arr[x] = 0;

  for (let i = x; i <= y; ++i) {
    if (i - n >= x) {
      arr[i] = Math.min(arr[i], arr[i - n] + 1);
    }

    if (i % 2 === 0 && i / 2 >= x) {
      arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    }

    if (i % 3 === 0 && i / 3 >= x) {
      arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    }
  }

  return arr[y] === Infinity ? -1 : arr[y];
}

console.log(solution(10, 40, 5)); // 20
