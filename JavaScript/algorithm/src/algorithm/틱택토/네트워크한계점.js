function thresholdCheck(network, status) {
  // 가로와 세로 줄을 동시에 확인합니다.
  for (let i = 0; i < 3; i++) {
    // 가로 줄 확인
    if (
      network[i][0] === status &&
      network[i][1] === status &&
      network[i][2] === status
    ) {
      return true;
    }
    // 세로 줄 확인
    if (
      network[0][i] === status &&
      network[1][i] === status &&
      network[2][i] === status
    ) {
      return true;
    }
  }

  // 두 대각선 확인
  if (
    network[0][0] === status &&
    network[1][1] === status &&
    network[2][2] === status
  ) {
    return true;
  }
  if (
    network[0][2] === status &&
    network[1][1] === status &&
    network[2][0] === status
  ) {
    return true;
  }

  return false;
}

function validateNetwork(network) {
  let hCount = 0;
  let lCount = 0;

  // network 배열을 한 번 순회하면서 "H"와 "L"의 개수를 계산합니다.
  for (const row of network) {
    for (const cell of row) {
      if (cell === "H") hCount++;
      else if (cell === "L") lCount++;
    }
  }

  // "H"는 "L"보다 많을 수 없으며, 교대로 배치되어야 합니다.
  if (hCount < lCount || hCount > lCount + 1) {
    return 0;
  }

  // 임계 상태를 확인합니다.
  const hThreshold = thresholdCheck(network, "H");
  const lThreshold = thresholdCheck(network, "L");

  // 양쪽 모두 임계 상태인 경우는 비정상입니다.
  if (hThreshold && lThreshold) {
    return 0;
  }

  // "H"가 임계 상태이면 "H"의 개수는 "L"보다 반드시 1 많아야 합니다.
  if (hThreshold && hCount !== lCount + 1) {
    return 0;
  }

  // "L"이 임계 상태이면 "H"와 "L"의 개수는 같아야 합니다.
  if (lThreshold && hCount !== lCount) {
    return 0;
  }

  // 정상적인 데이터 수집 상태
  return 1;
}

// 테스트 예제
console.log(validateNetwork(["H.L", "..H", "..L"])); // 1
console.log(validateNetwork(["H.L", "H.L", "H.L"])); // 0
console.log(validateNetwork(["...", ".L.", "..."])); // 0
console.log(validateNetwork(["...", "...", "..."])); // 1
