function solution(topping) {
  let totalTypes = new Set(topping).size; // 전체 토핑 종류의 개수
  let leftCount = new Map(); // 왼쪽 부분의 각 토핑 개수
  let rightCount = new Map(); // 오른쪽 부분의 각 토핑 개수
  let fairSplits = 0; // 공평하게 나누는 방법의 수

  // 초기에 모든 토핑을 오른쪽 부분에 넣음
  topping.forEach((t) => rightCount.set(t, (rightCount.get(t) || 0) + 1));

  for (let i = 0; i < topping.length - 1; i++) {
    let t = topping[i];
    // 왼쪽 부분에 토핑 추가
    leftCount.set(t, (leftCount.get(t) || 0) + 1);
    // 오른쪽 부분에서 토핑 제거
    rightCount.set(t, rightCount.get(t) - 1);
    if (rightCount.get(t) === 0) {
      rightCount.delete(t);
    }

    // 왼쪽과 오른쪽 부분의 토핑 종류 수가 같은 경우 카운트
    if (
      leftCount.size === rightCount.size &&
      leftCount.size === totalTypes / 2
    ) {
      fairSplits++;
    }
  }

  return fairSplits;
}

// 테스트
let topping = [1, 2, 1, 3, 1, 4, 1, 2];
console.log(solution(topping)); // 결과 출력
