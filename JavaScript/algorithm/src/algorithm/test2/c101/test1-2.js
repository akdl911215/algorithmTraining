function solution(n) {
  let length = 0; // 전체 길이를 추적
  let digit = 1; // 숫자의 자릿수
  let start = 1; // 자릿수에 해당하는 첫 번째 숫자 (1, 10, 100...)

  // 자릿수 별로 반복하여 n번째 숫자가 어떤 범위에 속하는지 찾기
  while (n > length + digit * 9 * start) {
    length += digit * 9 * start; // 현재 자릿수의 숫자 길이를 더함
    start *= 10; // 다음 자릿수의 시작 숫자 (1 -> 10 -> 100 ...)
    digit++; // 자릿수 증가
  }

  // n번째 숫자가 속하는 구간을 찾았으면, 그 숫자가 몇 번째 숫자인지 계산
  const num = start + Math.floor((n - length - 1) / digit);
  const digitIndex = (n - length - 1) % digit;

  // 구한 숫자의 해당 자릿수 값 반환
  return String(num)[digitIndex] - "0";
}
// console.log(solution(5));
// 5

console.log(solution(15));
// 2;
