function search(arr, x) {
  // 매개변수 : 배열이름, 찾으려는 값
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return arr[i];
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
