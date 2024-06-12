def solution(scores):
    # 인센티브를 받지 못하는 사원 판별
    can_receive = [True for _ in range(len(scores))]
    for i in range(len(scores)):
        for j in range(len(scores)):
            if i != j and scores[i][0] < scores[j][0] and scores[i][1] < scores[j][1]:
                can_receive[i] = False
                break

    # 인센티브를 받을 수 있는 사원들의 점수 합 계산
    valid_scores = [(scores[i][0] + scores[i][1], i) for i in range(len(scores)) if can_receive[i]]

    # 점수 합으로 내림차순 정렬
    valid_scores.sort(reverse=True, key=lambda x: x[0])

    # 완호의 석차 찾기
    rank = 1
    for i in range(len(valid_scores)):
        if i > 0 and valid_scores[i][0] < valid_scores[i - 1][0]:
            rank = i + 1
        if valid_scores[i][1] == 0:  # 완호의 인덱스
            return rank

print(solution([[2, 2], [1, 4], [3, 2], [3, 2], [2, 1]]))