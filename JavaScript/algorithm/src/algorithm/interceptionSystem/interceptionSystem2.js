function solution(targets) {
    var answer = 0;

    let range = [];

    let check = [];
    let differenceArr = [];
    console.log(targets.length)
    for (let i = 0; i < targets.length; ++i) {
        const left = targets[i][0]
        const right = targets[i][1]
        const difference = right - left;

        for (let j = 0; j < difference; ++j) {
            check[j] = j + left;
        }
        console.log('check :: ', check)

        range[i] = {
            arrLeft: targets[i][0],
            arrRight: targets[i][1],
            difference,
            differenceArr: check[i]
        }
        console.log('range :: ', range)
    }



    console.log(range)

    return answer;
}

solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]);
// 3

// [4,5] [4,8] [3,7] 5이상 8이하
// [10,14] [11,13] [5,12] 6이상 13이하
// [1,4] 2이상 3이

// https://school.programmers.co.kr/learn/courses/30/lessons/181188
