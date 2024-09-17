
function solution(skill, skill_trees) {
    let count = 0;

    skill_trees.forEach((skill_tree) => {
        const newSkill = skill_tree
            .split('')
            .filter(c => skill.includes(c))
            .join('');

        if (skill.startsWith(newSkill)) count++
    });

    return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
// 2

// https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#fnref1