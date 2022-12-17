function solution(k, m, score) {
    // 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score
    let answer = 0;

    const sortArr = score.sort((a,b) => b - a);
    console.log("sortArr : ",sortArr);

    let box = [];
    for (let i = 0; i < sortArr.length; i += m) {
        box = sortArr.splice(0, m);
        console.log('box : ', box)

        const minScore = box.map(el => el).pop();
        console.log('minScore : ', minScore)
        const boxCount = Math.floor(sortArr.length / m)
        console.log('boxCount : ', boxCount)

        // (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
        // const minScoree = sortArr.pop()

        answer = minScore * m * boxCount
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