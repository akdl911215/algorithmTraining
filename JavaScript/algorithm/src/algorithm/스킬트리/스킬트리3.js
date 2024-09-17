
function solution(skill, skill_trees) {
    let answer = 0;

    skill_trees.forEach((skill_tree) => {
        // 스킬트리에서 선행 스킬에 해당하는 문자만 추출
        let filtered = skill_tree
            .split('')
            .filter((char) => skill.includes(char))
            .join('');

        // 스킬 순서의 앞부분과 비교
            if (skill.startsWith(filtered)) {
            answer++;
        }
    });

    return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
// 2

// https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#fnref1