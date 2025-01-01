def solution(target):
    # 점수 계산 가능한 값들
    scores = [50] + [i for i in range(1, 21)] + [2 * i for i in range(1, 21)] + [3 * i for i in range(1, 21)]
    dp = [[float('inf'), 0] for _ in range(target + 1)]  # [최소 다트 수, 싱글/불 개수]
    dp[0] = [0, 0]  # 점수 0에서는 다트 0개 사용

    for t in range(1, target + 1):
        for score in scores:
            if t - score >= 0:
                darts = dp[t - score][0] + 1
                singles = dp[t - score][1] + (1 if score <= 20 or score == 50 else 0)
                if darts < dp[t][0] or (darts == dp[t][0] and singles > dp[t][1]):
                    dp[t] = [darts, singles]

    return dp[target]
print(solution(21))
# [1,0]

print(solution(58))
# [2,2]