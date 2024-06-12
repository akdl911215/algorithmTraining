def solution(scores):
    answer = 0

    score_check = [False] * len(scores)
    for i in range(len(scores)):
        for j in range(i + 1, len(scores)):
            if scores[i][0] > scores[j][0] and scores[i][1] > scores[j][1]:
                score_check[j] = True
                scores[j][0] = -1
                scores[j][1] = -1

    check_index = 0
    for (i, check) in enumerate(score_check):
        if check == True:
            check_index = i

    if scores[0][0] <= scores[check_index][0] and scores[0][1] <= scores[check_index][1]:
        return -1

    score_list = []
    for i, (work_attitude, peer_evaluation) in enumerate(scores):
        score_list.append([work_attitude + peer_evaluation, i])


    s_score_list = sorted(score_list, key=lambda x: -x[0])
    for i in range(len(s_score_list)):
        if s_score_list[i][1] == 0:
            answer = i + 1

    return answer

print(solution([[2,2],[1,4],[3,2],[3,2],[2,1]]))
# 4

# https://school.programmers.co.kr/learn/courses/30/lessons/152995