function selectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

let myArray = [64, 25, 12, 22, 11];
console.log(selectionSort(myArray)); // Output: [11, 12, 22, 25, 64]