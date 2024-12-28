def coin_change(coins, amount):
    # Initialize the DP array a Large value
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    print(dp)

    # Iterate over all amounts from 1 to 'amount'
    for i in range(1, amount + 1):
        for coin in coins:
            if i - coin >= 0:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    # If dp[amount] is still infinity, return -1 (not possible)
    return dp[amount] if dp[amount] != float('inf') else -1

# Example usage
coins = [1, 2, 5]
amount = 11
print(coin_change(coins, amount))  # Output: 3