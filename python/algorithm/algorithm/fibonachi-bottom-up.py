def fib(n):
    dp = [0, 1] + [0]*(n - 1)

    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]

print(fib(5))