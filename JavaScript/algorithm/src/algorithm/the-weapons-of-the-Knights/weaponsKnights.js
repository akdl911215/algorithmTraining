function solution(number, limit, power) {
    let answer = 0;

    let arr = []
    for (let i = 1; i <= number; ++i) {
        let j = 1;
        let check = 0;
        while (j <= i) {
            if (i % j === 0) {
                check++
            }
            j++
        }
        arr.push(check)
    }

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > limit) arr[i] = power;
        answer += arr[i];
    }

    return answer;
}

// const number = 5;
// const limit = 3;
// const power = 2;
// resunlt : 10

const number = 10;
const limit = 3;
const power = 2;
// result : 21

solution(number,limit, power)