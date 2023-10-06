function solution(phone_book) {
  console.log("phone_book1 : ", phone_book);
  phone_book.sort(); // 전화번호 리스트를 정렬합니다.
  console.log("phone_book2 : ", phone_book);

  for (let i = 0; i < phone_book.length - 1; i++) {
    // 현재 번호와 다음 번호의 시작 부분이 같으면 접두어이므로 false를 반환합니다.
    if (
      phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)
    ) {
      return false;
    }
  }

  return true; // 접두어가 없는 경우 true를 반환합니다.
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false

// https://school.programmers.co.kr/learn/courses/30/lessons/42577
