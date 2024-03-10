def solution(n, tops):
    MOD = 10007
    # dp[i]는 i열까지 타일링을 완성했을 때의 경우의 수를 저장합니다.
    dp = [0] * (n + 2)
    dp[0] = 1  # 초기 조건 설정

    # 타일링 가능 여부 확인을 위해 tops를 처리합니다.
    extended_tops = [False] * (n + 1)
    for top in tops:
        extended_tops[top] = True

    for i in range(1, n + 2):
        # 기본적으로 이전 열까지의 경우의 수를 가져옵니다.
        dp[i] = dp[i - 1]

        # 마름모 타일을 놓을 수 있는지 확인합니다.
        if i >= 2 and not extended_tops[i - 1]:
            dp[i] = (dp[i] + dp[i - 2]) % MOD

    return dp[n + 1]

# print(solution(4,[1, 1, 0, 1]))
# 149

print(solution(2, [0, 1]))
# 11

# print(solution(0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
# 7704

# https://school.programmers.co.kr/learn/courses/30/lessons/258705?language=python3