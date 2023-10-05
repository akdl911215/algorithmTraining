function BinarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + (high - low) / 2;

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 7));
