function solution(skill, skill_trees) {
    let count = 0;

    const skillArr = skill.split("");
    console.log('skillArr : ', skillArr)
    const skillIndexArr = [];
    
    for (let i = 0; i < skill_trees.length; ++i) {
        const arr = [];
        for (let j = 0; j < skillArr.length; ++j) {
            arr.push(skill_trees[i].indexOf(skillArr[j]));
        }
        skillIndexArr.push(arr);
    }
    console.log(skillIndexArr)

    return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
// 2

// https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#fnref1