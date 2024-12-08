function solution(x, y, n) {
  let count = 0;
  let test = [x];

  while (true) {
    count++;

    const set = new Set();
    test.forEach((item) => {
      console.log("item : ", item);

      if (item + n <= y) {
        console.log(`item + n: ${item + n}`);
        set.add(item + n);
      }

      if (item * 2 <= y) {
        console.log("item * 2 : ", item * 2);
        set.add(item * 2);
      }

      if (item * 3 <= y) {
        console.log("item * 3 : ", item * 3);
        set.add(item * 3);
      }
    });
    if (set.size === 0) return -1;

    if (set.has(y)) {
      return count;
    }

    test = set;

    console.log("test.js : ", test);
  }
}

console.log(solution(10, 40, 5)); // 20
