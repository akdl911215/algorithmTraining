function solution(phone_book) {
  const map = new Map();
  phone_book.forEach((phone_number) => map.set(phone_number, 1));
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; ++i) {
    const value = phone_book[i + 1].substring(0, phone_book[i].length);
    console.log("value : ", value);
    if (phone_book[i] === value) {
      return false;
    }
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false
