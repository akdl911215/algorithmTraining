function solution(targets) {
    var answer = 0;

    let range = [];

    console.log(targets.length)
    for (let i = 0; i < targets.length; ++i) {
        const targetOne = targets[i][0]
        const subTargetOne = targetOne + 1;

        const targetTwo = targets[i][1]
        const subTargetTwo = targetTwo - 1;

        const difference = subTargetTwo - subTargetOne;

        range[i] = {
            left: subTargetOne,
            right: subTargetTwo,
            arrLeft: targets[i][0],
            arrRight: targets[i][1],
            difference
        }

    }

    range.sort()
    console.log(range)

    return answer;
}

solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]);
// 3

// [4,5] [4,8] [3,7] 5이상 8이하
// [10,14] [11,13] [5,12] 6이상 13이하
// [1,4] 2이상 3이

// https://school.programmers.co.kr/learn/courses/30/lessons/181188
