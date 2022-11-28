function solution(k, tangerine) {
    let answer = 0;
    const arr = tangerine.filter((item, index) => tangerine.indexOf(item) !== index);
    const divisor = Math.floor(k / 2);

    if (arr.length > divisor) {
        answer = divisor;
    } else {
        answer = arr.length;
    }

    return answer
}

const k = 3
const tangerine = [1, 1, 2, 2, 3, 3, 4, 4, 5]

// const k = 6
// const tangerine = [1,3,2,5,4,5,2,3]
// result : 3

// const k = 4
// tangerine = [1,3,2,5,4,5,2,3]
// result : 2

// const k = 2
// tangerine = [1,1,1,1,2,2,2,3]
// result : 1

console.log(solution(k, tangerine))