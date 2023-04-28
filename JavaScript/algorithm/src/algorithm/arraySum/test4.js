const arr = [ [ 0, 3 ], [ 3, 4 ], [ 6, 6 ] ];

const sortArr = arr.sort(condition);
const b = sortArr[0];
console.log(b)
function condition(a, b) {
    console.log(`a:${a}, b:${b}`)
}

const alphabet = ['b', 'a', 'z', 'd']
const c = alphabet.sort();
console.log(c)

const numberArr = [ [ 0, 3 ], [ 3, 4 ], [ 6, 6 ] ]
const d = numberArr.sort((a, b) => {
    console.log(`a:${a}, b:${b}`)
    console.log(`a[0] - a[1]: ${a[0] - a[1]}, b[0] - b[1]: ${b[0] - b[1]}`)
    console.log(`Math.abs(a[0] - a[1]): ${Math.abs(a[0] - a[1])}, Math.abs(b[0] - b[1]: ${Math.abs(b[0] - b[1])}`)
    const lenDiff = Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]);
    console.log('lenDiff : ', lenDiff)
    if (lenDiff !== 0) {
        console.log('check lenDiff : ', lenDiff)
        return lenDiff;
    } // 길이에 따라 정렬
    return a[0] - b[0]; // 그 외는 0번째 원소 index가 낮은 순서로 정렬
})
console.log(d)
