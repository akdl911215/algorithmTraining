def solution(skill, skill_trees):
    answer = 0

    for skill_tree in skill_trees:
        new_skill = ''.join([c for c in skill_tree if c in skill])

        if skill.startswith(new_skill):
            answer += 1

    return answer

print(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
# 2

# https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#fnref1
