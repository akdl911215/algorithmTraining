function solution(s) {
  let count = 0;
  let zero_remove_count = 0;

  while (s !== "1") {
    count++;

    let number = "";
    for (const num of s) {
      if (num === "1") {
        number += num;
      }
    }

    zero_remove_count += s.length - number.length;
    s = number.length.toString(2);
  }

  return [count, zero_remove_count];
}

console.log(solution("110010101001"));
// [3,8]

console.log(solution("01110"));
// [3,3]

console.log(solution("1111111"));
// [4,1]

// 공식 풀이 연구
