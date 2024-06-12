def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]

    if n == 0:
        return 0
    if n == 1:
        return 1

    a = fibonacci(n - 1, memo)
    b = fibonacci(n - 2, memo)

    memo[n] = a + b

    return memo[n]

print(fibonacci(5))