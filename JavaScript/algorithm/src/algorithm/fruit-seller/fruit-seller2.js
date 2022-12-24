
function solution(k, m, score) {
    let answer = 0;
    const arr = score.sort((a,b) => b - a);
    let index = m - 1;

    for (let i = 0; i < Math.floor(score.length / m); i++) {
        answer += arr[index] * m;
        index += m;
    }

    return answer;
}

// const k = 3;
// const m = 4;
// const score = [1, 2, 3, 1, 2, 3, 1];
// result : 8

const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
// result : 33

console.log(solution(k,m,score))


// https://school.programmers.co.kr/learn/courses/30/lessons/135808