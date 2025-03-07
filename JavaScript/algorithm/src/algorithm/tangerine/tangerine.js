function solution(k, tangerine) {
    let answer = 0;
    const arr = [...new Set(tangerine.filter((item, index) => tangerine.indexOf(item) !== index))]

    while(k > 0) {
        arr.shift();
        answer += 1;
        k -= 2
    }
    return answer
}

const k = 10
const tangerine = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 8, 8 ,9,9,10,11]

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