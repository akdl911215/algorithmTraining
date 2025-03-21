function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let myArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array: ", bubbleSort(myArray)); // 결과: [11, 12, 22, 25, 34, 64, 90]