function solution(k, m, score) {
    // 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score
    let answer = 0;
    const arr = score.sort((a,b) => b - a)
    let index = m - 1;
    let count = 0;
    const loopLength = score.length;
    while(true) {
        if (count + m > loopLength || count >= loopLength) {
            break;
        }

        answer += arr[index] * m
        count += m;
        index += m
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