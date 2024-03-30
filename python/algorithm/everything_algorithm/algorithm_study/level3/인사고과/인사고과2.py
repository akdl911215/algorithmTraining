def solution(scores):
    # 인센티브를 받을 수 없는 사원 제거
    filtered_scores = [s for i, s in enumerate(scores) if
                       not any(s[0] < o[0] and s[1] < o[1] for j, o in enumerate(scores) if i != j)]

    # 점수 합산 및 정렬
    summed_scores = sorted([(sum(score), idx) for idx, score in enumerate(filtered_scores)], reverse=True)

    # 석차 계산
    rank = 1
    prev_score = None
    skip_next_rank = 0  # 동등 석차를 위해 다음 석차를 건너뛰는 수
    for i, (score, idx) in enumerate(summed_scores):
        if score != prev_score:  # 이전 점수와 다르면 석차 갱신
            prev_score = score
            rank = i + 1 - skip_next_rank
        else:  # 동점인 경우, 다음 석차를 건너뛰기 위해 카운트 증가
            skip_next_rank += 1

        # 완호의 석차를 찾아 반환
        if scores.index(filtered_scores[idx]) == 0:  # 완호의 원래 인덱스가 0번째인 경우
            return rank


# 예제 입력
scores = [[2, 2], [1, 4], [3, 2], [3, 2], [2, 1]]
# 완호의 석차 계산 및 출력
wanhos_rank = solution(scores)
print(wanhos_rank)
