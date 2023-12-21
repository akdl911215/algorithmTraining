function solution(n, left, right) {
  let arr = [];

  // 2차원 배열을 1차원 배열로 변환
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      arr.push(i);
    }
    for (let j = i + 1; j <= n; j++) {
      arr.push(j);
    }
  }

  // left부터 right까지의 부분 추출
  return arr.slice(left, right + 1);
}

// 예시 사용
console.log(solution(3, 2, 5));
