function minOperations(queue1, queue2) {
  const totalSum = [...queue1, ...queue2].reduce((acc, val) => acc + val, 0);
  let target = totalSum / 2;

  let sum1 = queue1.reduce((acc, val) => acc + val, 0);
  let sum2 = totalSum - sum1;

  let operations = 0;
  let pointer1 = 0;
  let pointer2 = 0;
  let size1 = queue1.length;
  let size2 = queue2.length;

  while (sum1 !== sum2) {
    if (operations > size1 + size2) {
      return -1; // 이미 탐색했던 구간을 다시 탐색하는 것이므로 의미가 없음
    }

    if (sum1 > target) {
      sum1 -= queue1[pointer1 % size1];
      sum2 += queue1[pointer1 % size1];
      pointer1++;
    } else {
      sum1 += queue2[pointer2 % size2];
      sum2 -= queue2[pointer2 % size2];
      pointer2++;
    }

    operations++;
  }

  return operations;
}

// Example usage:
const queue1 = [1, 2, 3, 4];
const queue2 = [1, 4, 5, 6];
console.log(minOperations(queue1, queue2)); // 예상되는 결과를 콘솔에 출력
