function solution(phone_book) {
  const map = new Map();
  const sort_phone_book = phone_book.sort();

  sort_phone_book.forEach((phone_number) =>
    map.set(phone_number, phone_number)
  );

  for (let i = 0; i < sort_phone_book.length - 1; ++i) {
    const value = map
      .get(sort_phone_book[i + 1])
      .substring(0, sort_phone_book[i].length);

    if (map.get(sort_phone_book[i]) === value) {
      return false;
    }
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false
