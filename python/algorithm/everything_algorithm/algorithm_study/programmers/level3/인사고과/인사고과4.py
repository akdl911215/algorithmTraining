def solution(scores):

    score_check = [True for _ in range(len(scores))]
    for i in range(len(scores)):
        for j in range(len(scores)):
            if i != j and scores[i][0] > scores[j][0] and scores[i][1] > scores[j][1]:
                score_check[j], scores[j][0], scores[j][1] = False, -1, -1
                break

    if not score_check[0]:
        return -1

    summed_score = []
    for i, (work_attitude, peer_evaluation) in enumerate(scores):
        summed_score.append([work_attitude + peer_evaluation, i])

    sort_summed_score_list = sorted(summed_score, key=lambda x: -x[0])

    rank, prev_score = 0, 0
    for i, (score, idx) in enumerate(sort_summed_score_list):
        if score != prev_score:
            prev_score = score
            rank = i + 1

        if idx == 0:
            return rank

print(solution([[2,2],[1,4],[3,2],[3,2],[2,1]]))
# 4

# https://school.programmers.co.kr/learn/courses/30/lessons/152995