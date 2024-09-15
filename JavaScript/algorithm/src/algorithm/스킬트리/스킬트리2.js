function solution(skill, skill_trees) {

    const skillArr = skill.split("");

    let count = 0;
    for (let i = 0; i < skill_trees.length; ++i) {
        let check = -1;
        let bool = false;
        for (let j = 0; j < skillArr.length; ++j) {
            let index = skill_trees[i].indexOf(skillArr[j])
            if (index > check) {
                check = index;
            } else {
                bool = true;
                break;
            }
        }

        if (!bool) count++;


    }


    return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
// 2

// https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#fnref1