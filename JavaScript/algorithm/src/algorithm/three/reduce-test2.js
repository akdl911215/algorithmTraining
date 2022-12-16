const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
    console.log(`${accumulator} + ${currentValue}`)
    return accumulator + currentValue
}, initialValue);
/*
0 + 1
1 + 2
3 + 3
6 + 4
*/

console.log(sumWithInitial);
// expected output: 10
