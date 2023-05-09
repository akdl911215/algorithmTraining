function solution(targets) {
    const sortTargets = targets.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let pivot = sortTargets[0][1];
    for (let i = 1; i < sortTargets.length; ++i) {
        if(sortTargets[i][0] >= pivot) {
            pivot = sortTargets[i][1];
            count++;
        }
    }
    return count;
}

solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]);
// 3

// [4,5] [4,8] [3,7] 5이상 8이하
// [10,14] [11,13] [5,12] 6이상 13이하
// [1,4] 2이상 3이

// https://school.programmers.co.kr/learn/courses/30/lessons/181188
