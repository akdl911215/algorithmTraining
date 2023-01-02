const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => {
        console.log(`${accumulator}, ${currentValue}`)
        return accumulator + currentValue
    },
    initialValue
);

console.log(sumWithInitial);
// expected output: 10

console.log('--------------------------')
const array2 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
const sumWithInitial2 = array2.reduce(
    (accumulator, currentValue) => {
        console.log(`${accumulator}, ${currentValue}`);
        return accumulator + currentValue
    }
);

console.log(sumWithInitial2);
// expected output: 10
