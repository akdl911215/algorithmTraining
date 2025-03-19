function countUniqueNumbers(numbers) {
  const uniqueNumbers = new Set();

  for (const number of numbers) {
    uniqueNumbers.add(number);
  }

  return uniqueNumbers.size;
}

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
const result = countUniqueNumbers(numbers);
console.log(result); // Output: 5 (unique numbers are 1, 2, 3, 4, 5)