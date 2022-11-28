// const arr = ['a', 'b', 'a', 'b', 'c'];
const arr = [1, 2, 1, 2, 3];

const result = arr.reduce((accu, curr) => {
    console.log('accu : ', accu , `, curr : ${curr}`)

    accu.set(curr, (accu.get(curr) || 0) + 1);

    return accu
},new Map())

for (const [key, value] of result.entries()) {
    console.log(key + ' : ' + value )
}

console.log('------------------')
console.log(result.values())