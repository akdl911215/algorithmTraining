// const arr = [1, 1, 2, 2, 3]
const arr = ['f', 'a', 'b', 'b', 'c']

const arr2 = arr.filter((item, index) => arr.indexOf(item) !== index)

// const arr3  = arr2(arr)

console.log(arr2)