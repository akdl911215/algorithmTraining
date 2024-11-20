function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  for (let i = deliveries.length - 1; i >= 0; ) {
    if (deliveries[i] === 0 && pickups[i] === 0) {
      i--;
      continue;
    }

    distanceCalculator(cap, deliveries, i);
    distanceCalculator(cap, pickups, i);

    answer += (i + 1) * 2;
  }

  return answer;
}

function distanceCalculator(cap, parcelList, index) {
  while (index >= 0) {
    if (cap >= parcelList[index]) {
      cap -= parcelList[index];
      parcelList[index--] = 0;
    } else {
      parcelList[index] -= cap;
      break; // 더 이상 배달이나 수거가 불가능하면 멈춤
    }
  }
}
console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
// 16

console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
// 30

// https://school.programmers.co.kr/learn/courses/30/lessons/150369

// https://school.programmers.co.kr/questions/75690
