function solution(k, tangerine) {
  const freq = new Map();

  // 귤의 빈도수 체크
  for (let i = 0; i < tangerine.length; i++) {
    const target = freq.get(tangerine[i]);
    freq.set(tangerine[i], target ? target + 1 : 1);
  }
  console.log("freq : ", freq);
  console.log("freq.values() : ", freq.values());

  // 빈도수의 값만 내림차순으로 정렬
  const val = Array.from(freq.values()).sort((a, b) => b - a);
  console.log("val : ", val);
  let count = 0;

  // k가 0보다 작거나 같아질때까지 반복하며 count를 1씩 상승시킴
  for (let i = 0; i < val.length; i++) {
    if (k <= 0) break;

    k -= val[i];
    count++;
  }

  return count;
}

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, tangerine));
