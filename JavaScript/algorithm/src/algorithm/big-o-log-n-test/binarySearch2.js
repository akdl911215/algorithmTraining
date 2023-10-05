function BinarySearch2(arr, low, high, key) {
  if (low > high) return -1; // 종료 조건2 검색 실

  let mid = low + (high - low) / 2;

  if (arr[mid] === key) {
    return mid;
  } else if (arr[mid] > key) {
    return BinarySearch2(arr, low, mid - 1, key);
  } else {
    return BinarySearch2(arr, mid + 1, high, key);
  }
}

console.log(BinarySearch2([1, 2, 3, 4, 5, 6, 7], 0, 6, 7));
