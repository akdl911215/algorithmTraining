function solution(k, tangerine) {
    const arr = tangerine.filter((item, index) => tangerine.indexOf(item) !== index);
    console.log('arr : ', arr)

    // 중복인게 3개
    // 과일 수 6개
    // 중복 x 2 가 과일 숫자보다 작으면
    let answer = 0;
    if (arr.length * 2 >= k) {
        answer = arr.length
    }
    else if (arr.length * 2 < k) {
        answer = arr.length
    }
    else if (arr.length * 2 > k) {
        answer = Math.floor(k / 2)
    }

    return answer
}

// const k = 6
// const tangerine = [1,3,2,5,4,5,2,3]
// result : 3

const k = 4
tangerine = [1,3,2,5,4,5,2,3]
// result : 2

// const k = 2
// tangerine = [1,1,1,1,2,2,2,3]
// result : 1

console.log(solution(k, tangerine))