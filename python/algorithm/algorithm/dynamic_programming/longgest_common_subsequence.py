def lcs(X, Y):
    m = len(X)
    n = len(Y)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    print(dp)

    # Fill the DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if_x, if_y = X[i - 1], Y[j - 1]
            if if_x == if_y: # Characters match
                dp[i][j] = dp[i - 1][j - 1] + 1
            else: # Characters don't match
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[m][n]

X = "AGGTAB"
Y = "GXTXAYB"
print(lcs(X, Y))  # Output: 4