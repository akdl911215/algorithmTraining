function solution(k, m, score) {
    // 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score
    let answer = 0;
    const forLength = score.length;
    console.log('forLength : ', forLength)

    // const sortArr = score.sort((a,b) => b - a);
    // console.log("sortArr : ",sortArr);

    let box = [];
    let count = forLength;
    while(count >= m) {
        box = score.sort((a,b) => b - a).splice(0, m);
        console.log('box : ', box);
        const minScore = box.map(el => el).pop();
        console.log('micScore : ', minScore);

        answer += minScore * m * 1
        count -= m;
    }

    console.log("answer :: " ,answer)
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