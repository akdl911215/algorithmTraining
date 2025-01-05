def fibonacci_memoization(n, memo={}):
    if n <= 1:
        return n
    if n not in memo:
        left = fibonacci_memoization(n - 1, memo)
        right = fibonacci_memoization(n - 2, memo)
        memo[n] = left + right

    return memo[n]

n = 10
print(fibonacci_memoization(n))