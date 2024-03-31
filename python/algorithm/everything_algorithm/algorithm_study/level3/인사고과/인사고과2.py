def solution(scores):
    # 인센티브를 받을 수 없는 사원 제거
    filtered_scores = [s for i, s in enumerate(scores) if
                       not any(s[0] < o[0] and s[1] < o[1] for j, o in enumerate(scores) if i != j)]

    # 점수 합산 및 정렬
    summed_scores = sorted([(sum(score), idx) for idx, score in enumerate(filtered_scores)], reverse=True)

    # 석차 계산
    rank = 1
    prev_score = None

    for i, (score, idx) in enumerate(summed_scores):
        if score != prev_score:  # 이전 점수와 다르면 석차 갱신
            prev_score = score
            rank = i + 1

        # 완호의 석차를 찾아 반환

        print('idx : ', idx)
        print('filtered_scores[idx] : ', filtered_scores[idx])
        print('scores.index(filtered_scores[idx]) : ', scores.index(filtered_scores[idx]))
        if scores.index(filtered_scores[idx]) == 0:  # 완호의 원래 인덱스가 0번째인 경우
            return rank


print(solution([[2, 2], [1, 4], [3, 2], [3, 2], [2, 1]]))
