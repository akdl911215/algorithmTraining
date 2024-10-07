function solution(arr) {
  let zeroCount = 0; // 0의 개수를 저장할 변수
  let oneCount = 0; // 1의 개수를 저장할 변수

  // 재귀 함수 정의: 현재 영역의 시작 좌표 (x, y)와 크기 size를 매개변수로 받습니다.
  function compress(x, y, size) {
    let current = arr[x][y]; // 현재 영역의 첫 번째 값
    let same = true; // 영역 내 모든 값이 동일한지 확인하기 위한 변수

    // 현재 영역을 순회하며 모든 값이 동일한지 검사
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== current) {
          same = false; // 다른 값이 발견되면 false로 설정
          break;
        }
      }
      if (!same) break;
    }

    // 모든 값이 동일하다면 해당 값의 개수를 증가시킴
    if (same) {
      if (current === 0) zeroCount++;
      else oneCount++;
    } else {
      // 사이즈가 1보다 큰 경우에만 분할 진행
      if (size > 1) {
        let newSize = size / 2; // 새로운 영역의 크기

        // 4개의 하위 영역에 대해 재귀 호출
        compress(x, y, newSize); // 좌상단
        compress(x, y + newSize, newSize); // 우상단
        compress(x + newSize, y, newSize); // 좌하단
        compress(x + newSize, y + newSize, newSize); // 우하단
      }
    }
  }

  // 초기 호출: 배열의 전체 영역에 대해 함수 호출
  compress(0, 0, arr.length);

  // 최종 결과 반환
  return [zeroCount, oneCount];
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
