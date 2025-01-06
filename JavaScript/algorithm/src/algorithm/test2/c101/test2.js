function isValid(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const si = s[i];
    if (si === "(") {
      count++;
    } else {
      count--;
    }

    if (count < 0) {
      return false;
    }
  }

  return true;
}

function solution(arr1, arr2) {
  let map = {};

  for (let i = 0; i < arr1.length; ++i) {
    for (let j = 0; j < arr2.length; ++j) {
      const s = arr1[i] + arr2[j];
      if (s.length % 2 === 1) {
        continue;
      }
      map[s] = (map[s] || 0) + 1;
    }
  }

  let count = 0;
  for (let key in map) {
    if (isValid(key)) {
      count += map[key];
    }
  }
  return count;
}

console.log(solution(["()", "(()", ")()", "()"], [")()", "()", "(()"]));
// 3

// console.log(solution());
