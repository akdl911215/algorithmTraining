function solution(k, tangerine) {
  let freqMap = {};
  let minTypes = Infinity;

  // 첫 번째 윈도우 설정
  for (let i = 0; i < k; i++) {
    freqMap[tangerine[i]] = (freqMap[tangerine[i]] || 0) + 1;
  }
  minTypes = Object.keys(freqMap).length;

  // 슬라이딩 윈도우 순회
  for (let i = k; i < tangerine.length; i++) {
    // 윈도우에서 제외되는 귤의 빈도 감소
    freqMap[tangerine[i - k]]--;
    if (freqMap[tangerine[i - k]] === 0) {
      delete freqMap[tangerine[i - k]];
    }

    // 윈도우에 새로 포함되는 귤의 빈도 증가
    freqMap[tangerine[i]] = (freqMap[tangerine[i]] || 0) + 1;

    // 서로 다른 크기의 최소값 업데이트
    minTypes = Math.min(minTypes, Object.keys(freqMap).length);
  }

  return minTypes;
}
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
// 3

console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
// 2

// console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
// 1

// https://school.programmers.co.kr/learn/courses/30/lessons/138476
