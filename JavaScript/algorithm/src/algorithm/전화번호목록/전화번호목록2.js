function solution(phone_book) {
  const hash_map = {};

  for (let phone_number of phone_book) hash_map[phone_number] = 1;
  console.log("hash_map : ", hash_map);

  for (let phone_number of phone_book) {
    let temp = "";

    for (let number of phone_number) {
      temp += number;
      console.log("temp : ", temp);

      if (hash_map[temp] && temp != phone_number) {
        console.log("hash_map[temp] : ", hash_map[temp]);
        console.log("temp != phone_number : ", temp != phone_number);
        return false;
      }
    }
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
// console.log(solution(["123", "456", "789"])); // true
// console.log(solution(["12", "123", "1235", "567", "88"])); // false

// https://school.programmers.co.kr/learn/courses/30/lessons/42577
