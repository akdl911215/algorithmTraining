def solution(skill, skill_trees):
    answer = 0

    for skill_tree in skill_trees:
        new_skill = ''
        for c in skill_tree:
            print('c : ' + c)
            print('skill : ' + skill)
            if c in skill:
                new_skill += c
                print('new_skill ' + new_skill)


        if skill.startswith(new_skill):
            answer += 1


    return answer

print(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
# 2

# https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#fnref1
