def solution(n, info):
    answer = []

    # 어피치 총합 점수
    apeach = sum([10 - i for i in range(10) if info[i]])

    # 실질 획득 점수
    score = [(10 - i) * 2 if info[i] else 10 - i for i in range(10)]

    # 10 점을 안쏘는 기본값 설정
    queue = [[0]]

    # 10 점을 쏴서 점수를 얻을 수 있다면 추가
    if n >= info[0] + 1:
        queue.append([info[0] + 1])

    while queue:
        score_list = queue.pop(0)

        # 점수가 n과 같거나 score_list 길이가 10일 경우
        if sum(score_list) == n or len(score_list) == 10:
            original_score = sum([score[i] for i in range(len(answer)) if answer[i]])
            new_score = sum([score[i] for i in range(len(score_list)) if score_list[i]])

            if new_score > apeach and new_score >= original_score:
                answer = score_list

        # 쏠 수 있는 화살이 남아 있을 경우 어피치 보다 + 1 쏴서 점수를 획득할 수 있는 경우
        elif n >= sum(score_list) + info[len(score_list)] + 1:
            queue.append(score_list + [info[len(score_list)] + 1])
            queue.append(score_list + [0])

        # 더 이상 쏠 수 있는 화살이 없을 경우
        else:
            queue.append(score_list + [0])

    # 어치피 보다 높은 점수를 받을 수 없을때
    if not answer:
        return [-1]

    # 쏜 점수 + 안 쏜곳은 0점 처리 + 0점 자리에 남은거 쏘기
    return answer + [0] * (10 - len(answer)) + [n - sum(answer)]

print(solution(5, [2,1,1,1,0,0,0,0,0,0,0]))
# [0,2,2,0,1,0,0,0,0,0,0]

# print(solution(1, [1,0,0,0,0,0,0,0,0,0,0]))
# [-1]

# print(solution(9, [0,0,1,2,0,1,1,1,1,1,1]))
# [1,1,2,0,1,2,2,0,0,0,0]

# print(solution(10, 	[0,0,0,0,0,0,0,0,3,4,3]))
# [1,1,1,1,1,1,1,1,0,0,2]

# https://school.programmers.co.kr/learn/courses/30/lessons/92342