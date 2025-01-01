def solution(target):
    # 과녁
    # 싱글 1~20
    # 더블 * 2
    # 트리플 * 3
    # 불 50
    dp = [[float('inf'), 0] for _ in range(target + 1)]
    score_list = (set(range(1, 21)) |
                  set(i * 2 for i in range(1, 21)) |
                  set(i * 3 for i in range(1, 21)) |
                  {50}
                 )
    dp[0] = [0, 0]

    for ta in range(1, target + 1):
        for score in score_list:
            if ta - score >= 0:
                dart = dp[ta - score][0] + 1
                single = dp[ta - score][1] + (1 if score <= 20 or score == 50 else 0)
                if dart < dp[ta][0] or (dart == dp[ta][0] and single > dp[ta][1]):
                    dp[ta][0] = dart
                    dp[ta][1] = single

    return dp[target]

print(solution(21))
# [1,0]

print(solution(58))
# [2,2]

# https://school.programmers.co.kr/learn/courses/30/lessons/131129?language=python3