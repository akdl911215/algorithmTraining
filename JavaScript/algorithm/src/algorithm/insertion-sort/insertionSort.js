function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

let myArray = [64, 25, 12, 22, 11];
console.log(insertionSort(myArray)); // Output: [11, 12, 22, 25, 64]