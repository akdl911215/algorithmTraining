function findPair(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

const numbers = [2, 7, 11, 15];
const target = 9;

console.log(findPair(numbers, target)); // [0, 1] (2 + 7 = 9)
