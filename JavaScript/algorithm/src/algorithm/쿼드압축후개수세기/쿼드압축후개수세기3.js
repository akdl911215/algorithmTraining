function solution(arr) {
  let zero = 0;
  let one = 0;

  function compress(x, y, size) {
    const pivot = arr[x][y];
    let same = true;

    for (let a = x; a < size + x; a++) {
      for (let b = y; b < size + y; b++) {
        if (pivot !== arr[a][b]) {
          same = false;
          break;
        }
      }

      if (!same) break;
    }

    if (same) {
      if (arr[x][y] === 1) one++;
      else zero++;
    } else {
      let dividends = size / 2;

      compress(x, y, dividends);
      compress(x, y + dividends, dividends);
      compress(x + dividends, y, dividends);
      compress(x + dividends, y + dividends, dividends);
    }
  }

  compress(0, 0, arr.length);

  return [zero, one];
}

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ]),
);
// [4, 9]

// compress(0, 0, 4)
// ├── compress(0, 0, 2)
// │   ├── compress(0, 0, 1)  => one++
// │   ├── compress(0, 1, 1)  => one++
// │   ├── compress(1, 0, 1)  => one++
// │   └── compress(1, 1, 1)  => zero++
// ├── compress(0, 2, 2)      => zero++
// ├── compress(2, 0, 2)
// │   ├── compress(2, 0, 1)  => one++
// │   ├── compress(2, 1, 1)  => zero++
// │   ├── compress(3, 0, 1)  => one++
// │   └── compress(3, 1, 1)  => one++
// └── compress(2, 2, 2)
//     ├── compress(2, 2, 1)  => zero++
//     ├── compress(2, 3, 1)  => one++
//     ├── compress(3, 2, 1)  => one++
//     └── compress(3, 3, 1)  => one++

console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ]),
);
// [10, 15]
